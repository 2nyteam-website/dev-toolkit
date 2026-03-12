import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Formatter & Beautifier - Free Online Tool",
  description:
    "Format, beautify, and minify SQL queries with proper indentation. Supports SELECT, INSERT, UPDATE, DELETE, CREATE, and more. 100% client-side.",
  keywords: [
    "sql formatter",
    "sql beautifier",
    "sql pretty print",
    "format sql online",
    "sql minifier",
    "sql query formatter",
    "sql indent",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SQL Formatter",
  description:
    "Format, beautify, and minify SQL queries with proper indentation. Supports SELECT, INSERT, UPDATE, DELETE, CREATE, and more. 100% client-side.",
  url: "https://www.devtoolkit.cc/tools/sql-formatter",
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
