import TubsHero from "@/components/product-pages/tubs/tubs-hero"
import TubsContent from "@/components/product-pages/tubs/tubs-content"
import ScrollToTop from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tubs & Jacuzzis | The Ceramiqua",
  description: "Indulge in ultimate relaxation with our premium tubs and jacuzzis, designed for comfort and style.",
}

export default function TubsJacuzzisPage() {
  return (
    <main>
      <ScrollToTop />
      <TubsHero />
      <TubsContent />
    </main>
  )
}
