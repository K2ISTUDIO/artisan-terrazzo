import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // "société terrazzo" and "entreprise terrazzo" target the same search
      // intent — one canonical page avoids duplicate/thin content.
      {
        source: "/societe-terrazzo",
        destination: "/entreprise-terrazzo",
        permanent: true,
      },
      // "artisan-terrazzo" now covers the brand/savoir-faire story; the
      // location-intent keyword is served by the Paris page.
      {
        source: "/artisan-terrazzo-75",
        destination: "/artisan-terrazzo-paris",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
