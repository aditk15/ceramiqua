import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"
import Script from "next/script"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "The Ceramiqua | Tiles, Bathwares & Beyond",
  description:
    "Premium tiles, luxury bathwares, tubs, jacuzzis and stretch ceilings for your dream spaces. Visit our showroom in Indore.",
  generator: "Adit Khandelwal",
  keywords: ["tiles", "bathwares", "sanitarywares", "tubs", "jacuzzis", "stretch ceilings", "luxury", "Indore"],
  openGraph: {
    title: "The Ceramiqua | Tiles, Bathwares & Beyond",
    description:
      "Premium tiles, luxury bathwares, tubs, jacuzzis and stretch ceilings for your dream spaces. Visit our showroom in Indore.",
    url: "https://theceramiqua.com",
    siteName: "The Ceramiqua",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo/logo.ico",
    apple: "/logo/applelogo.png",
  },
}

const jost = localFont({
  src: [
    {
      path: "../styles/Jost/Jost.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-jost",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="GlhM0W_Naf34GvNR26nr6l0FC50BzFtW2aS3iJMzqPw" />
        <Script id="preload-bg" strategy="beforeInteractive">
          {`
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = '/background/bg.webp';
            link.as = 'image';
            document.head.appendChild(link);
          `}
        </Script>
        <Script id="scroll-to-top" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0);
            }
          `}
        </Script>
      </head>
      <body className={`${jost.variable} font-sans bg-[#f3f0eb]`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
