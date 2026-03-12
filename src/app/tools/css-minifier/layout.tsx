import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Minifier & Beautifier - Free Online Tool",
  description:
    "Minify and beautify CSS instantly. Remove whitespace and comments to reduce file size, or format CSS for readability. 100% client-side processing. Free, no sign-up required.",
  keywords: [
    "css minifier",
    "css minify online",
    "css beautifier",
    "css formatter",
    "minify css",
    "compress css",
    "css optimizer",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSS Minifier & Beautifier",
  description:
    "Minify and beautify CSS instantly. Remove whitespace and comments to reduce file size, or format CSS for readability. 100% client-side processing.",
  url: "https://www.devtoolkit.cc/tools/css-minifier",
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
