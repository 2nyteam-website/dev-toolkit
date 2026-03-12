import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator - Free Online Tool",
  description:
    "Generate random UUID v4 identifiers instantly. Bulk generation supported. 100% client-side — no data sent to any server.",
  keywords: [
    "uuid generator",
    "uuid v4",
    "random uuid",
    "guid generator",
    "unique id generator",
    "uuid online",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UUID Generator",
  description:
    "Generate random UUID v4 identifiers instantly. Bulk generation supported. 100% client-side — no data sent to any server.",
  url: "https://www.devtoolkit.cc/tools/uuid-generator",
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
