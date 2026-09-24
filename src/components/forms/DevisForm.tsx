"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckIcon, CounterIcon, FloorIcon, MoreIcon, UploadIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

const PROJECT_TYPES = [
  { label: "Sol", icon: FloorIcon },
  { label: "Plan de travail", icon: CounterIcon },
  { label: "Autre", icon: MoreIcon },
] as const;

const TIMING_OPTIONS = [
  "Dès que possible",
  "Dans les 3 mois",
  "Dans 3 à 6 mois",
  "Plus de 6 mois",
  "Pas encore défini",
];

type FormState = {
  projectTypes: string[];
  projectTypeDetail: string;
  projectNature: "neuf" | "renovation" | "";
  city: string;
  postalCode: string;
  surface: string;
  timing: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
};

const initialState: FormState = {
  projectTypes: [],
  projectTypeDetail: "",
  projectNature: "",
  city: "",
  postalCode: "",
  surface: "",
  timing: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  website: "",
};

const STEP_LABELS = ["Votre projet", "Le chantier", "Vos coordonnées"];

export function DevisForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!started) {
      setStarted(true);
      trackEvent("form_start");
    }
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  }

  function toggleProjectType(label: string) {
    if (!started) {
      setStarted(true);
      trackEvent("form_start");
    }
    setForm((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(label)
        ? prev.projectTypes.filter((t) => t !== label)
        : [...prev.projectTypes, label],
    }));
    setErrors((prev) => ({ ...prev, projectTypes: "" }));
  }

  function validateStep(current: number): boolean {
    const next: Record<string, string> = {};
    if (current === 0) {
      if (form.projectTypes.length === 0) next.projectTypes = "Sélectionnez au moins un type de projet.";
      if (form.projectTypes.includes("Autre") && !form.projectTypeDetail.trim()) {
        next.projectTypeDetail = "Précisez votre projet.";
      }
      if (!form.projectNature) next.projectNature = "Précisez s'il s'agit d'un projet neuf ou d'une rénovation.";
    }
    if (current === 1) {
      if (!form.city.trim()) next.city = "Indiquez la ville de votre chantier.";
      if (!/^\d{5}$/.test(form.postalCode.trim())) next.postalCode = "Code postal à 5 chiffres.";
      if (!form.surface.trim() || Number(form.surface) <= 0) next.surface = "Indiquez une superficie approximative.";
      if (!form.timing) next.timing = "Sélectionnez une échéance indicative.";
    }
    if (current === 2) {
      if (!form.firstName.trim()) next.firstName = "Prénom requis.";
      if (!form.lastName.trim()) next.lastName = "Nom requis.";
      if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Adresse e-mail invalide.";
      if (!/^[0-9+\s.-]{8,}$/.test(form.phone.trim())) next.phone = "Numéro de téléphone invalide.";
      if (!form.consent) next.consent = "Ce consentement est nécessaire pour traiter votre demande.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    trackEvent("form_step", { step: step + 2 });
    setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validateStep(2)) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === "projectTypes") return;
        data.append(key, String(value));
      });
      data.append("projectType", form.projectTypes.join(", "));
      files.forEach((file) => data.append("attachments", file));

      const response = await fetch("/api/lead", { method: "POST", body: data });
      const result = await response.json();

      if (!result.ok) {
        setSubmitError(result.error ?? "Une erreur est survenue. Merci de réessayer.");
        setSubmitting(false);
        return;
      }

      const projectTypeLabel = form.projectTypes.join(", ");
      trackEvent("form_submit");
      trackEvent("generate_lead", { project_type: projectTypeLabel });
      trackEvent("quote_request", { project_type: projectTypeLabel, city: form.city });
      router.push("/merci-demande-devis");
    } catch {
      setSubmitError("Une erreur est survenue. Merci de réessayer dans un instant.");
      setSubmitting(false);
    }
  }

  const progress = ((step + 1) / STEP_LABELS.length) * 100;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl" noValidate>
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-mineral mb-2">
          {STEP_LABELS.map((label, i) => (
            <span key={label} className={i <= step ? "text-ink font-medium" : ""}>
              {i + 1}. {label}
            </span>
          ))}
        </div>
        <div className="h-1.5 rounded-full bg-stone overflow-hidden">
          <div className="h-full bg-brass transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl text-ink mb-1">Quel est votre projet ?</legend>
          <div>
            <span className="block text-sm font-medium text-ink mb-3">
              Type de projet <span className="font-normal text-ink/50">(plusieurs choix possibles)</span>
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              {PROJECT_TYPES.map(({ label, icon: Icon }) => {
                const selected = form.projectTypes.includes(label);
                return (
                  <button
                    type="button"
                    key={label}
                    aria-pressed={selected}
                    onClick={() => toggleProjectType(label)}
                    className={`flex flex-col items-center justify-center gap-2 rounded-xl border px-3 py-4 text-sm transition-colors duration-200 cursor-pointer focus-ring ${
                      selected
                        ? "border-brass bg-brass/10 text-ink"
                        : "border-line bg-white text-ink/70 hover:border-brass/40"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${selected ? "text-brass-dark" : "text-mineral"}`} />
                    {label}
                  </button>
                );
              })}
            </div>
            {errors.projectTypes && <p className="mt-2 text-xs text-terracotta">{errors.projectTypes}</p>}

            {form.projectTypes.includes("Autre") && (
              <div className="mt-4">
                <input
                  type="text"
                  value={form.projectTypeDetail}
                  onChange={(e) => update("projectTypeDetail", e.target.value)}
                  className={inputClass(!!errors.projectTypeDetail)}
                  placeholder="Précisez votre projet (escalier, salle de bains, façade…)"
                  autoFocus
                />
                {errors.projectTypeDetail && <p className="mt-2 text-xs text-terracotta">{errors.projectTypeDetail}</p>}
              </div>
            )}
          </div>

          <div>
            <span className="block text-sm font-medium text-ink mb-3">Projet neuf ou rénovation ?</span>
            <div className="flex gap-3">
              {(["neuf", "renovation"] as const).map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => update("projectNature", value)}
                  className={`flex-1 rounded-xl border px-4 py-3 text-sm transition-colors duration-200 cursor-pointer focus-ring ${
                    form.projectNature === value
                      ? "border-brass bg-brass/10 text-ink"
                      : "border-line bg-white text-ink/70 hover:border-brass/40"
                  }`}
                >
                  {value === "neuf" ? "Projet neuf" : "Rénovation"}
                </button>
              ))}
            </div>
            {errors.projectNature && <p className="mt-2 text-xs text-terracotta">{errors.projectNature}</p>}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl text-ink mb-1">
            Où se situe votre chantier et quelle est sa superficie ?
          </legend>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Ville du projet" error={errors.city}>
              <input
                type="text"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className={inputClass(!!errors.city)}
                placeholder="Paris, Boulogne-Billancourt…"
              />
            </Field>
            <Field label="Code postal" error={errors.postalCode}>
              <input
                type="text"
                inputMode="numeric"
                value={form.postalCode}
                onChange={(e) => update("postalCode", e.target.value)}
                className={inputClass(!!errors.postalCode)}
                placeholder="75011"
              />
            </Field>
          </div>
          <Field label="Superficie approximative (m²)" error={errors.surface}>
            <input
              type="number"
              min={0}
              value={form.surface}
              onChange={(e) => update("surface", e.target.value)}
              className={inputClass(!!errors.surface)}
              placeholder="25"
            />
          </Field>
          <div>
            <span className="block text-sm font-medium text-ink mb-3">Date souhaitée du chantier</span>
            <div className="flex flex-wrap gap-2.5">
              {TIMING_OPTIONS.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => update("timing", option)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors duration-200 cursor-pointer focus-ring ${
                    form.timing === option ? "border-brass bg-brass/10 text-ink" : "border-line bg-white text-ink/70 hover:border-brass/40"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {errors.timing && <p className="mt-2 text-xs text-terracotta">{errors.timing}</p>}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl text-ink mb-1">Comment pouvons-nous vous contacter ?</legend>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Prénom" error={errors.firstName}>
              <input type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass(!!errors.firstName)} />
            </Field>
            <Field label="Nom" error={errors.lastName}>
              <input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass(!!errors.lastName)} />
            </Field>
            <Field label="E-mail" error={errors.email}>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass(!!errors.email)} />
            </Field>
            <Field label="Téléphone" error={errors.phone}>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass(!!errors.phone)} />
            </Field>
          </div>
          <Field label="Message / description du projet (facultatif)">
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className={inputClass(false)}
              placeholder="Précisez ici tout élément utile : contraintes du support, teintes envisagées, accès au chantier…"
            />
          </Field>

          <div>
            <span className="block text-sm font-medium text-ink mb-2">Photos ou plans (facultatif)</span>
            <label className="flex items-center gap-3 rounded-xl border border-dashed border-line px-4 py-4 text-sm text-ink/60 cursor-pointer hover:border-brass/40 transition-colors duration-200 focus-ring">
              <UploadIcon className="w-5 h-5 text-brass-dark shrink-0" />
              {files.length > 0 ? `${files.length} fichier(s) sélectionné(s)` : "Ajouter des photos ou plans (JPG, PNG, PDF)"}
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => setFiles(e.target.files ? Array.from(e.target.files) : [])}
              />
            </label>
          </div>

          <label className="flex items-start gap-3 text-sm text-ink/70 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="mt-1 w-4 h-4 accent-brass-dark cursor-pointer"
            />
            <span>
              J&rsquo;accepte que les informations transmises via ce formulaire soient utilisées pour traiter ma
              demande, conformément à la{" "}
              <Link href="/politique-confidentialite" className="underline underline-offset-2 text-brass-dark">
                politique de confidentialité
              </Link>
              .
            </span>
          </label>
          {errors.consent && <p className="text-xs text-terracotta -mt-3">{errors.consent}</p>}
        </fieldset>
      )}

      {submitError && <p className="mt-6 text-sm text-terracotta">{submitError}</p>}

      <div className="mt-8 flex items-center gap-4">
        {step > 0 && (
          <Button type="button" variant="secondary" onClick={goBack}>
            Précédent
          </Button>
        )}
        {step < STEP_LABELS.length - 1 ? (
          <Button type="button" onClick={goNext}>
            Étape suivante
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
            {!submitting && <CheckIcon className="w-4 h-4" />}
          </Button>
        )}
      </div>
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
