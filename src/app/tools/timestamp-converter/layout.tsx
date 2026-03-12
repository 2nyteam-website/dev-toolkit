import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter - Free Online Tool",
  description:
    "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds, milliseconds, ISO 8601, and relative time. 100% client-side processing.",
  keywords: [
    "unix timestamp converter",
    "epoch converter",
    "timestamp to date",
    "date to timestamp",
    "unix time",
    "epoch time converter",
    "timestamp converter online",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Timestamp Converter",
  description:
    "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds, milliseconds, ISO 8601, and relative time. 100% client-side processing.",
  url: "https://www.devtoolkit.cc/tools/timestamp-converter",
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
