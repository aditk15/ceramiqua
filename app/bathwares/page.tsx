import BathwaresHero from "@/components/product-pages/bathwares/bathwares-hero"
import BathwaresContent from "@/components/product-pages/bathwares/bathwares-content"
import ScrollToTop from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bathwares | The Ceramiqua",
  description: "Transform your bathroom with our luxury bathware collection – faucets, sinks, showers, vanities, and more.",
}

export default function BathwaresPage() {
  return (
    <main>
      <ScrollToTop />
      <BathwaresHero />
      <BathwaresContent />
    </main>
  )
}
