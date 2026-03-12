import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cron Expression Generator & Parser - Free Online Tool",
  description:
    "Build and parse cron expressions visually. See human-readable descriptions and next execution times. 100% client-side processing.",
  keywords: [
    "cron generator",
    "cron expression builder",
    "cron parser",
    "crontab generator",
    "cron schedule",
    "cron expression explained",
    "cron next run",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Cron Expression Generator",
  description:
    "Build and parse cron expressions visually. See human-readable descriptions and next execution times. 100% client-side processing.",
  url: "https://www.devtoolkit.cc/tools/cron-generator",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
