import TilesHero from "@/components/product-pages/tiles/tiles-hero"
import TilesContent from "@/components/product-pages/tiles/tiles-content"
import ScrollToTop from "@/components/scroll-to-top"

export default function TilesPage() {
  return (
    <main>
      <ScrollToTop />
      <TilesHero />
      <TilesContent />
    </main>
  )
}
