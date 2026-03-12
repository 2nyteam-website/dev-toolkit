import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hash Generator - MD5, SHA-1, SHA-256 Online",
  description:
    "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly. 100% client-side using Web Crypto API — your data never leaves your browser.",
  keywords: [
    "hash generator",
    "md5 hash",
    "sha256 hash",
    "sha1 hash",
    "online hash",
    "hash calculator",
    "checksum generator",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hash Generator",
  description:
    "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly. 100% client-side using Web Crypto API — your data never leaves your browser.",
  url: "https://www.devtoolkit.cc/tools/hash-generator",
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
