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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
