import type { Metadata } from "next"
import { SOCIALS } from "./constants"

export const siteMetadata: Metadata = {
  metadataBase: new URL(SOCIALS.url),

  title: {
    default: "ShreelaxmiHegde, Full Stack Developer",
    template: "%s | ShreelaxmiHegde",
  },

  description:
    "Full stack developer building scalable backend systems, AI-enabled workflows and production-ready web applications",

  keywords: [
    "Full Stack Engineer",
    "Node.js Developer",
    "React Developer",
    "Backend Engineer",
    "TypeScript",
    "Docker",
    "CI/CD",
    "Portfolio",
  ],

  authors: [{ name: "ShreelaxmiHegde" }],
  creator: "ShreelaxmiHegde",

  category: "technology",

  alternates: {
    canonical: SOCIALS.url,
  },

  openGraph: {
    title: "ShreelaxmiHegde, Full Stack Developer",
    description:
      "Building scalable backend systems, AI-enabled workflows and production-ready applications.",
    url: SOCIALS.url,
    siteName: "Shreelaxmi Hegde Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "ShreelaxmiHegde",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ShreelaxmiHegde, Full Stack Developer",
    description:
      "Backend systems, AI workflows and production-ready applications.",
    images: ["/me.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}