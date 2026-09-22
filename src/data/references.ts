/**
 * Named client references for the "Qui sommes-nous" page.
 *
 * These names are published on the explicit confirmation of the business
 * owner that the underlying work is real. Per that same instruction, we
 * deliberately do NOT state a specific store/site, address, year, contract
 * amount, exact scope, or Vinci subsidiary — none of that has been
 * communicated, and inventing it would turn a real reference into a false
 * claim. The copy stays at "notre savoir-faire nous a amenés à intervenir
 * sur des projets liés à..." rather than "partenaire officiel de...", which
 * would assert a formal relationship we cannot substantiate.
 *
 * Add further entries here as they're confirmed — same rule applies.
 */
export type ClientReference = {
  name: string;
};

export const clientReferences: ClientReference[] = [
  { name: "Hermès" },
  { name: "Vinci" },
];
