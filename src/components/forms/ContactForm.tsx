"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

type State = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  website: string;
};

const initial: State = { firstName: "", lastName: "", email: "", phone: "", message: "", consent: false, website: "" };

export function ContactForm() {
  const [form, setForm] = useState<State>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update<K extends keyof State>(key: K, value: State[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = "Prénom requis.";
    if (!form.lastName.trim()) next.lastName = "Nom requis.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Adresse e-mail invalide.";
    if (!form.message.trim()) next.message = "Décrivez brièvement votre demande.";
    if (!form.consent) next.consent = "Ce consentement est nécessaire pour vous répondre.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const data = new FormData();
      data.append("projectType", "Contact général");
      data.append("firstName", form.firstName);
      data.append("lastName", form.lastName);
      data.append("email", form.email);
      data.append("phone", form.phone || "Non renseigné");
      data.append("city", "Non renseigné");
      data.append("postalCode", "00000");
      data.append("message", form.message);
      data.append("website", form.website);

      const response = await fetch("/api/lead", { method: "POST", body: data });
      const result = await response.json();
      if (!result.ok) {
        setStatus("error");
        return;
      }
      trackEvent("form_submit", { form: "contact" });
      trackEvent("generate_lead", { form: "contact" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-bone-dark/40 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brass/15">
          <CheckIcon className="w-6 h-6 text-brass-dark" />
        </div>
        <h3 className="font-display text-xl text-ink">Message bien reçu</h3>
        <p className="mt-2 text-sm text-ink/65">Nous revenons vers vous dans les meilleurs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Prénom" error={errors.firstName}>
          <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass(!!errors.firstName)} />
        </Field>
        <Field label="Nom" error={errors.lastName}>
          <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass(!!errors.lastName)} />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass(!!errors.email)} />
        </Field>
        <Field label="Téléphone (facultatif)">
          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass(false)} />
        </Field>
      </div>
      <Field label="Votre message" error={errors.message}>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass(!!errors.message)}
          placeholder="Décrivez votre projet ou votre question…"
        />
      </Field>
      <label className="flex items-start gap-3 text-sm text-ink/70 cursor-pointer">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 w-4 h-4 accent-brass-dark cursor-pointer"
        />
        <span>
          J&rsquo;accepte que ces informations soient utilisées pour me répondre, conformément à la{" "}
          <Link href="/politique-confidentialite" className="underline underline-offset-2 text-brass-dark">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>
      {errors.consent && <p className="text-xs text-terracotta">{errors.consent}</p>}
      {status === "error" && <p className="text-sm text-terracotta">Une erreur est survenue. Merci de réessayer.</p>}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">{label}</span>
      {children}
      {error && <span className="block mt-1.5 text-xs text-terracotta">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border ${hasError ? "border-terracotta" : "border-line"} bg-white px-4 py-3 text-sm text-ink placeholder:text-mineral/60 focus-ring focus:border-brass/50`;
}
