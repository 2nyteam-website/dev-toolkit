import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regex Tester - Free Online Regular Expression Tool",
  description:
    "Test and debug regular expressions with real-time highlighting, match groups, and common presets. 100% client-side processing — your data never leaves your browser.",
  keywords: [
    "regex tester",
    "regular expression tester",
    "regex online",
    "regex debugger",
    "regex match",
    "regex pattern tester",
    "regex validator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Regex Tester",
  description:
    "Test and debug regular expressions with real-time highlighting, match groups, and common presets. 100% client-side processing — your data never leaves your browser.",
  url: "https://www.devtoolkit.cc/tools/regex-tester",
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
