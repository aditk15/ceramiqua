import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"
import Script from "next/script"

export const metadata: Metadata = {
  title: "The Ceramiqua | Tiles & Bathwares",
  description: "Tiles, Baths & Beyond",
  generator: "Adit Khandelwal",
  icons: {
    icon: "/logo.ico",
    apple: "/applelogo.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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
            link.href = '/bg.jpg';
            link.as = 'image';
            document.head.appendChild(link);
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
