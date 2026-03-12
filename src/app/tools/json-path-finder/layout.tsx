import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Path Finder - Interactive JSONPath Explorer",
  description:
    "Explore JSON data with an interactive tree view and find JSONPath expressions instantly. Click any node to get its full path. 100% client-side. Free, no sign-up required.",
  keywords: [
    "jsonpath finder",
    "json path finder",
    "jsonpath explorer",
    "json tree viewer",
    "jsonpath expression",
    "json navigator",
    "json path generator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JSON Path Finder",
  description:
    "Explore JSON data with an interactive tree view and find JSONPath expressions instantly. Click any node to get its full path. 100% client-side.",
  url: "https://www.devtoolkit.cc/tools/json-path-finder",
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
