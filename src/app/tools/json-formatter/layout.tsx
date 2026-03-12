import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator - Free Online Tool",
  description:
    "Format, validate, and minify JSON data instantly. 100% client-side processing — your data never leaves your browser. Free, no sign-up required.",
  keywords: [
    "json formatter",
    "json validator",
    "json beautifier",
    "json minifier",
    "format json online",
    "validate json",
    "json pretty print",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JSON Formatter & Validator",
  description:
    "Format, validate, and minify JSON data instantly. 100% client-side processing — your data never leaves your browser. Free, no sign-up required.",
  url: "https://www.devtoolkit.cc/tools/json-formatter",
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
