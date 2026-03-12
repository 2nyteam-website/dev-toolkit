import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS Converter - Inline CSS to Tailwind & Back",
  description:
    "Convert inline CSS to Tailwind CSS classes or Tailwind classes to CSS. 100% client-side processing — your data never leaves your browser.",
  keywords: [
    "tailwind converter",
    "css to tailwind",
    "tailwind to css",
    "tailwind css converter",
    "inline css to tailwind",
    "tailwind class generator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tailwind CSS Converter",
  description:
    "Convert inline CSS to Tailwind CSS classes or Tailwind classes to CSS. 100% client-side processing — your data never leaves your browser.",
  url: "https://www.devtoolkit.cc/tools/tailwind-converter",
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
