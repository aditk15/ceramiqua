import CeilingsHero from "@/components/product-pages/ceilings/ceilings-hero"
import CeilingsContent from "@/components/product-pages/ceilings/ceilings-content"
import ScrollToTop from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stretch Ceilings | The Ceramiqua",
  description: "Innovative stretch ceiling solutions for modern interiors. Endless design possibilities for homes and businesses.",
}

export default function StretchCeilingsPage() {
  return (
    <main>
      <ScrollToTop />
      <CeilingsHero />
      <CeilingsContent />
    </main>
  )
}
