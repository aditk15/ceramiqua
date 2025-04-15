import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: "The Ceramiqua | Tiles & Bathwares",
  description: "Tiles, Baths & Beyond",
  generator: 'Adit Khandelwal'
}

const jost = localFont({
  src: [
    {
      path: '../styles/Jost/Jost.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-jost',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.variable} font-sans bg-[#f3f0eb]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}