import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder - Free Online Tool",
  description:
    "Encode and decode URLs and query strings instantly. 100% client-side — your data never leaves your browser.",
  keywords: [
    "url encoder",
    "url decoder",
    "url encode online",
    "url decode online",
    "percent encoding",
    "uri encoder",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "URL Encoder & Decoder",
  description:
    "Encode and decode URLs and query strings instantly. 100% client-side — your data never leaves your browser.",
  url: "https://www.devtoolkit.cc/tools/url-encoder",
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
