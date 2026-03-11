import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder - Free Online Tool",
  description:
    "Encode and decode Base64 strings instantly. 100% client-side processing — your data never leaves your browser.",
  keywords: [
    "base64 encoder",
    "base64 decoder",
    "base64 encode online",
    "base64 decode online",
    "base64 converter",
    "text to base64",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
