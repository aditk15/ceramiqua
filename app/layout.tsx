import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"
import Script from "next/script"
import { Analytics } from '@vercel/analytics/next';

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "The Ceramiqua | Tiles & Bathwares",
  description: "Tiles, Baths & Beyond",
  generator: "Adit Khandelwal",
  icons: {
    icon: "/logo.ico",
    apple: "/applelogo.png",
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
