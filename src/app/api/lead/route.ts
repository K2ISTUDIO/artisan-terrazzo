import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

/**
 * Lead intake endpoint.
 *
 * Validates the payload, notifies the team by email via Resend (including
 * any uploaded photos/plans as attachments), and always logs the payload
 * server-side as a fallback record in case the email fails to send.
 */

const REQUIRED_FIELDS = ["projectType", "firstName", "lastName", "email", "phone", "city", "postalCode"] as const;

const FIELD_LABELS: [label: string, key: string][] = [
  ["Type de projet", "projectType"],
  ["Précision", "projectTypeDetail"],
  ["Nature du projet", "projectNature"],
  ["Ville", "city"],
  ["Code postal", "postalCode"],
  ["Superficie", "surface"],
  ["Échéance", "timing"],
  ["Prénom", "firstName"],
  ["Nom", "lastName"],
  ["E-mail", "email"],
  ["Téléphone", "phone"],
  ["Message", "message"],
];

const PROJECT_NATURE_LABELS: Record<string, string> = {
  neuf: "Projet neuf",
  renovation: "Rénovation",
};

function formatEmailBody(payload: Record<string, string>): string {
  return FIELD_LABELS.filter(([, key]) => payload[key]?.trim())
    .map(([label, key]) => {
      const value = key === "projectNature" ? (PROJECT_NATURE_LABELS[payload[key]] ?? payload[key]) : payload[key];
      return `${label} : ${value}`;
    })
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload: Record<string, string> = {};

    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        payload[key] = value;
      }
    }

    const missing = REQUIRED_FIELDS.filter((field) => !payload[field]?.trim());
    if (missing.length > 0) {
      return NextResponse.json({ ok: false, error: `Champs manquants : ${missing.join(", ")}` }, { status: 400 });
    }

    // Honeypot anti-spam field: if filled, silently accept without processing.
    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    const files = formData.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);

    console.log("[lead] Nouvelle demande de devis", {
      ...payload,
      attachments: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
    });

    if (!process.env.RESEND_API_KEY) {
      console.warn("[lead] RESEND_API_KEY absent — e-mail de notification non envoyé");
    } else {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const attachments = await Promise.all(
          files.map(async (file) => ({
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          })),
        );

        const subject =
          payload.projectType === "Contact général"
            ? `Message de contact — ${payload.firstName} ${payload.lastName}`
            : `Nouvelle demande de devis — ${payload.firstName} ${payload.lastName}`;

        const { error } = await resend.emails.send({
          from: `${siteConfig.name} <${siteConfig.email}>`,
          to: siteConfig.email,
          replyTo: payload.email,
          subject,
          text: formatEmailBody(payload),
          attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (error) {
          console.error("[lead] Échec de l'envoi de l'e-mail", error);
        }
      } catch (emailError) {
        console.error("[lead] Échec de l'envoi de l'e-mail", emailError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] Erreur de traitement", error);
    return NextResponse.json({ ok: false, error: "Une erreur est survenue. Merci de réessayer." }, { status: 500 });
  }
}
