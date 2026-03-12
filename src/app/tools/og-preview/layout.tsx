import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Graph Preview - Facebook, Twitter & LinkedIn Card Preview",
  description:
    "Preview how your webpage looks when shared on Facebook, Twitter, and LinkedIn. Test Open Graph tags with real-time social card previews.",
  keywords: [
    "open graph preview",
    "og preview",
    "social media preview",
    "facebook link preview",
    "twitter card preview",
    "linkedin preview",
    "og image preview",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Open Graph Preview",
  description:
    "Preview how your webpage looks when shared on Facebook, Twitter, and LinkedIn. Test Open Graph tags with real-time social card previews.",
  url: "https://www.devtoolkit.cc/tools/og-preview",
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
