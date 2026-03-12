import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - Free Online Tool",
  description:
    "Generate Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. 100% client-side — your data never leaves your browser. Free, no sign-up required.",
  keywords: [
    "lorem ipsum generator",
    "placeholder text",
    "dummy text generator",
    "lorem ipsum online",
    "filler text",
    "latin placeholder",
    "lipsum generator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lorem Ipsum Generator",
  description:
    "Generate Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. 100% client-side — your data never leaves your browser.",
  url: "https://www.devtoolkit.cc/tools/lorem-ipsum",
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
