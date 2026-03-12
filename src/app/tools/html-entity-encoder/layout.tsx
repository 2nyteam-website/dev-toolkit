import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Entity Encoder & Decoder - Free Online Tool",
  description:
    "Encode and decode HTML entities instantly. Convert special characters like <, >, & to HTML entities and back. 100% client-side processing. Free, no sign-up required.",
  keywords: [
    "html entity encoder",
    "html entity decoder",
    "html escape",
    "html unescape",
    "encode html entities",
    "decode html entities",
    "html special characters",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HTML Entity Encoder & Decoder",
  description:
    "Encode and decode HTML entities instantly. Convert special characters like <, >, & to HTML entities and back. 100% client-side processing.",
  url: "https://www.devtoolkit.cc/tools/html-entity-encoder",
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
