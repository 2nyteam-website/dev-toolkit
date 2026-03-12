import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown Preview - Free Online Markdown Editor",
  description:
    "Write and preview Markdown in real-time with a split editor view. Supports headers, bold, italic, links, code blocks, tables, and more. 100% client-side processing.",
  keywords: [
    "markdown preview",
    "markdown editor",
    "markdown to html",
    "markdown viewer",
    "online markdown editor",
    "markdown renderer",
    "markdown live preview",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Markdown Preview",
  description:
    "Write and preview Markdown in real-time with a split editor view. Supports headers, bold, italic, links, code blocks, tables, and more. 100% client-side processing.",
  url: "https://www.devtoolkit.cc/tools/markdown-preview",
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
