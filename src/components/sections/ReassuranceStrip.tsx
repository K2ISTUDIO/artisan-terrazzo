import { CheckIcon } from "@/components/ui/Icons";

const defaultItems = [
  "Terrazzo coulé sur place",
  "Réalisations sur mesure",
  "Paris & Île-de-France",
  "Particuliers & professionnels",
];

export function ReassuranceStrip({ items = defaultItems }: { items?: string[] }) {
  return (
    <div className="border-y border-line bg-bone-dark/50">
      <ul className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm text-ink/75">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-brass-dark shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
