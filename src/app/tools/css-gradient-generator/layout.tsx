import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Gradient Generator - Linear Gradient Builder Online",
  description:
    "Generate CSS linear gradient code with a live preview. Pick colors, set direction or angle, and copy the CSS instantly. Free online gradient builder.",
  keywords: [
    "css gradient generator",
    "linear gradient generator",
    "css gradient builder",
    "gradient maker",
    "background gradient css",
    "online gradient tool",
    "color gradient generator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Gradient Generator",
  description:
    "Generate CSS linear gradient code with a live preview. Pick colors, set direction or angle, and copy the CSS instantly. Free online gradient builder.",
  url: "https://www.devtoolkit.cc/tools/css-gradient-generator",
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
