import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CookieConsent from "@/components/layout/CookieConsent"
import ChatBot from "@/components/shared/ChatBot"
import { ThemeContextProvider } from "@/components/theme/theme-context"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Creating Opportunities International",
  description:
    "Where Impact Meets Innovation - Empowering individuals and institutions by providing access to strategic opportunities, practical tools and professional services.",
  openGraph: {
    title: "Creating Opportunities International",
    description:
      "Where Impact Meets Innovation - Empowering individuals and institutions with strategic opportunities and professional services.",
    url: "https://creatingopportunities.com",
    siteName: "Creating Opportunities International",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Creating Opportunities International",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <ChatBot />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
