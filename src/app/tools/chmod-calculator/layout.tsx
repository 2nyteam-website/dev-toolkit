import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chmod Calculator - File Permission Calculator",
  description:
    "Calculate Unix/Linux file permissions instantly. Convert between numeric (755) and symbolic (rwxr-xr-x) chmod notation with an interactive checkbox UI. Free, no sign-up required.",
  keywords: [
    "chmod calculator",
    "file permissions calculator",
    "unix permissions",
    "linux chmod",
    "chmod 755",
    "chmod numeric to symbolic",
    "file permission converter",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Chmod Calculator",
  description:
    "Calculate Unix/Linux file permissions instantly. Convert between numeric (755) and symbolic (rwxr-xr-x) chmod notation with an interactive checkbox UI.",
  url: "https://www.devtoolkit.cc/tools/chmod-calculator",
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
