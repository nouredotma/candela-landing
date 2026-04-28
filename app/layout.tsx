import type React from "react"
import type { Metadata } from "next"
import { Inter, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusdweb.com"),
  title: {
    default: "NexusdWeb",
    template: "%s | NexusdWeb",
  },
  description:
    "Elevate your digital presence with NexusdWeb. We specialize in premium web design, high-performance development, UI/UX strategy, and bespoke SEO solutions for ambitious brands.",
  keywords: [
    "premium web design",
    "custom web development",
    "UI/UX strategy",
    "SEO optimization",
    "brand transformation",
    "Next.js agency",
    "high-performance websites",
    "digital growth agency",
    "NexusdWeb",
  ],
  authors: [{ name: "NexusdWeb" }],
  creator: "NexusdWeb",
  publisher: "NexusdWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusdweb.com",
    siteName: "NexusdWeb | Premium Web Solutions",
    title: "NexusdWeb | Premium Web Design & Development Agency",
    description:
      "NexusdWeb is a premium digital agency specialized in crafting high-performance websites, bespoke designs, and strategic digital experiences.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NexusdWeb - Premium Web Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexusdweb",
    title: "NexusdWeb | Bespoke Web Design & Tech Agency",
    description:
      "We build premium digital experiences. From high-end web design to custom development, NexusdWeb helps brands dominate the digital landscape.",
    images: ["/logo.png"],
    creator: "@nexusdweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="relative" data-scroll-behavior="smooth">
      <body className={`${inter.className} ${caveat.variable} antialiased relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NexusdWeb",
              "url": "https://nexusdweb.com",
              "logo": "https://nexusdweb.com/logo.png",
              "image": "https://nexusdweb.com/og-image.png",
              "description": "NexusdWeb is a premium digital agency specializing in high-end web design, custom development, and SEO optimization for ambitious brands.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "priceRange": "$$$",
              "sameAs": [
                "https://twitter.com/nexusdweb"
              ]
            }),
          }}
        />
        {children}
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
