import type { Metadata } from "next";
import { site, siteUrl } from "@/data/site";
import "./globals.css";
const url = siteUrl();
export const metadata: Metadata = {
  ...(url
    ? { metadataBase: new URL(url), alternates: { canonical: "/" } }
    : {}),
  title: "Adarsh Kumar — Software Engineer",
  description: site.description,
  openGraph: {
    title: "Adarsh Kumar — Software Engineer",
    description: site.description,
    type: "website",
    locale: "en_US",
    ...(url ? { url } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Kumar — Software Engineer",
    description: site.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
