import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder - Decode JSON Web Tokens Securely",
  description:
    "Decode and inspect JWT tokens securely. 100% client-side — your tokens never leave your browser. Safe for production tokens.",
  keywords: [
    "jwt decoder",
    "jwt debugger",
    "decode jwt",
    "json web token decoder",
    "jwt parser",
    "jwt inspector",
    "jwt online",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JWT Decoder",
  description:
    "Decode and inspect JWT tokens securely. 100% client-side — your tokens never leave your browser. Safe for production tokens.",
  url: "https://www.devtoolkit.cc/tools/jwt-decoder",
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
