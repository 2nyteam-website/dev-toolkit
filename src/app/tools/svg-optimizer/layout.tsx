import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG Optimizer - Clean & Compress SVG Online",
  description:
    "Optimize SVG files online by removing comments, metadata, and unnecessary attributes. Preview before and after, compare file sizes. 100% client-side.",
  keywords: [
    "svg optimizer",
    "svg minifier",
    "svg cleaner",
    "optimize svg",
    "compress svg",
    "svg compressor",
    "inline svg optimizer",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SVG Optimizer",
  description:
    "Optimize SVG files online by removing comments, metadata, and unnecessary attributes. Preview before and after, compare file sizes. 100% client-side.",
  url: "https://www.devtoolkit.cc/tools/svg-optimizer",
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
