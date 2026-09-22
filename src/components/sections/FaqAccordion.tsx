"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";
import { JsonLd, faqSchema } from "@/lib/schema";
import { ChevronDownIcon } from "@/components/ui/Icons";

export function FaqAccordion({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 border-t border-line">
      <JsonLd data={faqSchema(items)} />
      <div className="container-page">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 text-balance">{title}</h2>
        <div className="max-w-3xl divide-y divide-line border-t border-b border-line">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer focus-ring rounded"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg text-ink font-medium">{item.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 shrink-0 text-brass-dark transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm md:text-base text-ink/70 leading-relaxed max-w-2xl">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
