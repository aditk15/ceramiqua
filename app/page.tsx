import Hero from "@/components/hero"
import ScrollingText from "@/components/scrolling-text"
import TilesSection from "@/components/sections/tiles-section"
import BathwaresSection from "@/components/sections/bathwares-section"
import TubsJacuzzisSection from "@/components/sections/tubs-jacuzzis-section"
import StretchCeilingsSection from "@/components/sections/stretch-ceilings-section"
import DesignPhilosophy from "@/components/design-philosophy"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollingText />
      <TilesSection />
      <BathwaresSection />
      <TubsJacuzzisSection />
      <StretchCeilingsSection />
      <DesignPhilosophy />
      <Gallery />
      <Contact />
    </main>
  )
}
