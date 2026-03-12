import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Tag Generator - HTML, Open Graph & Twitter Card Tags",
  description:
    "Generate complete HTML meta tags including Open Graph and Twitter Card tags. Real-time preview of generated code. Free online meta tag builder.",
  keywords: [
    "meta tag generator",
    "open graph generator",
    "twitter card generator",
    "seo meta tags",
    "html meta tags",
    "og tags generator",
    "meta description generator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Meta Tag Generator",
  description:
    "Generate complete HTML meta tags including Open Graph and Twitter Card tags. Real-time preview of generated code. Free online meta tag builder.",
  url: "https://www.devtoolkit.cc/tools/meta-tag-generator",
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
