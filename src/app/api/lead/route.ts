import { NextResponse } from "next/server";

/**
 * Lead intake endpoint.
 *
 * This currently validates the payload and logs it server-side so the form
 * is fully functional end-to-end in development. Before launch, wire this
 * to a real destination — pick ONE (or several) of:
 *   - Transactional email (Resend, Postmark, SES) to notify the team
 *   - A CRM (HubSpot, Pipedrive) via its API
 *   - A spreadsheet/DB for simple tracking
 * Uploaded files (photos/plans) arrive in the FormData but are not
 * persisted anywhere yet — add a storage step (e.g. Vercel Blob, S3) before
 * relying on them in production.
 */

const REQUIRED_FIELDS = ["projectType", "firstName", "lastName", "email", "phone", "city", "postalCode"] as const;

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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] Erreur de traitement", error);
    return NextResponse.json({ ok: false, error: "Une erreur est survenue. Merci de réessayer." }, { status: 500 });
  }
}
