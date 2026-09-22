/**
 * Named client references, shown as real logos on the homepage trust bar
 * and on the "Qui sommes-nous" references section.
 *
 * These are published on the explicit confirmation of the business owner
 * that the underlying work is real, and using logo artwork supplied by
 * them for this purpose. Per that same instruction, we deliberately do NOT
 * state a specific store/site, address, year, contract amount, exact
 * scope, or corporate subsidiary — none of that has been communicated,
 * and inventing it would turn a real reference into a false claim. Copy
 * stays at "parmi nos références" / "notre savoir-faire nous a amenés à
 * intervenir sur des projets liés à..." rather than "partenaire officiel
 * de...", which would assert a formal relationship we cannot substantiate.
 *
 * Add further entries here as they're confirmed — same rule applies.
 */
export type ClientReference = {
  name: string;
  logo: string;
};

export const clientReferences: ClientReference[] = [
  { name: "Hermès", logo: "/images/logos/hermes.png" },
  { name: "Vinci", logo: "/images/logos/vinci.webp" },
  { name: "LVMH", logo: "/images/logos/lvmh.png" },
  { name: "Eiffage Construction", logo: "/images/logos/eiffage.png" },
  { name: "Fayat", logo: "/images/logos/fayat.png" },
  { name: "Galeries Lafayette", logo: "/images/logos/galeries-lafayette.png" },
  { name: "Deskeo", logo: "/images/logos/deskeo.png" },
  { name: "Google", logo: "/images/logos/google.png" },
  { name: "Pierre Yovanovitch", logo: "/images/logos/pierre-yovanovitch.png" },
];
