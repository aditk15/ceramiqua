import TilesHero from "@/components/product-pages/tiles/tiles-hero"
import TilesContent from "@/components/product-pages/tiles/tiles-content"
import ScrollToTop from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tiles Collection | The Ceramiqua",
  description: "Explore our exquisite range of imported ceramic and porcelain tiles, perfect for every space and style.",
}

export default function TilesPage() {
  return (
    <main>
      <ScrollToTop />
      <TilesHero />
      <TilesContent />
    </main>
  )
}
