"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

export function EmailLink({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <a href={`mailto:${siteConfig.email}`} className={className} onClick={() => trackEvent("email_click")}>
      {children}
    </a>
  );
}
