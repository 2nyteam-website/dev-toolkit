import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YAML Validator & JSON Converter - Online YAML Checker",
  description:
    "Validate YAML syntax online and convert YAML to JSON instantly. Detailed error messages with line numbers. 100% client-side — your data never leaves your browser.",
  keywords: [
    "yaml validator",
    "yaml checker",
    "yaml to json",
    "yaml parser",
    "yaml lint",
    "online yaml validator",
    "yaml syntax checker",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "YAML Validator & JSON Converter",
  description:
    "Validate YAML syntax online and convert YAML to JSON instantly. Detailed error messages with line numbers. 100% client-side — your data never leaves your browser.",
  url: "https://www.devtoolkit.cc/tools/yaml-validator",
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
