import { Metadata } from "next";

export const siteConfig = {
  name: "FreightBooks",
  description:
    "Comprehensive transportation service accounting system for brokers, dispatchers, and repair shops. Manage loads, invoicing, customers, and financial reporting in one platform.",
  url: "https://freightbooks.com",
  ogImage: "https://freightbooks.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/freightbooks",
    linkedin: "https://linkedin.com/company/freightbooks",
    github: "https://github.com/freightbooks",
  },
  contact: {
    email: "support@freightbooks.com",
    phone: "+1 (555) 123-4567",
    address: "123 Logistics Way, Transport City, TC 12345",
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "freight management",
    "transportation software",
    "logistics software",
    "broker software",
    "dispatch software",
    "load management",
    "invoicing",
    "accounting",
    "freight brokerage",
    "truck dispatch",
  ],
  authors: [
    {
      name: "FreightBooks Team",
    },
  ],
  creator: "FreightBooks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@freightbooks",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
