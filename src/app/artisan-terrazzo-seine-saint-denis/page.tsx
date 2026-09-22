import type { Metadata } from "next";
import { DepartementPage } from "@/components/templates/DepartementPage";
import { departements } from "@/data/departements";
import { buildMetadata } from "@/lib/metadata";

const dept = departements.find((d) => d.slug === "artisan-terrazzo-seine-saint-denis")!;

export const metadata: Metadata = buildMetadata({
  title: dept.title,
  description: dept.metaDescription,
  path: `/${dept.slug}`,
});

export default function Page() {
  return <DepartementPage dept={dept} index={1} />;
}
