import type React from "react"
import type { Metadata } from "next"
import { Inter, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  metadataBase: new URL("https://candela11.vercel.app"),
  title: {
    default: "Candela | Real-Time Chatroom",
    template: "%s | Candela",
  },
  description:
    "Experience the next generation of real-time communication with Candela. A premium, high-performance chatroom application designed for seamless interaction with a beautiful glassmorphism UI.",
  keywords: [
    "Candela",
    "real-time chatroom",
    "glassmorphism chat",
    "messaging app",
    "premium UI design",
    "Next.js landing page",
    "Flask chat application",
    "Supabase real-time",
    "modern web design",
  ],
  authors: [{ name: "Candela Team" }],
  creator: "Candela",
  publisher: "Candela",
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
    url: "https://candela11.vercel.app",
    siteName: "Candela | Premium Chat Solutions",
    title: "Candela | Real-Time Chatroom & Premium Digital Experience",
    description:
      "Candela is a premium real-time chat application specialized in crafting high-performance interactions, bespoke designs, and strategic digital experiences.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Candela - Real-Time Chatroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@candela",
    title: "Candela | Bespoke Chat Experience",
    description:
      "We build premium digital experiences. From high-end chatroom design to custom development, Candela helps you connect in style.",
    images: ["/logo.png"],
    creator: "@candela",
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
              "@type": "SoftwareApplication",
              "name": "Candela",
              "url": "https://candela11.vercel.app",
              "logo": "https://candela11.vercel.app/logo.png",
              "image": "https://candela11.vercel.app/og-image.png",
              "description": "Candela is a premium real-time chat application with a polished glassmorphism interface, featuring instant guest access, media sharing, and profile customization.",
              "applicationCategory": "CommunicationApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
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
