import Hero from "@/components/hero"
import ScrollingText from "@/components/scrolling-text"
import FeaturedCollections from "@/components/featured-collections"
import AboutUs from "@/components/about-us"
import DesignPhilosophy from "@/components/design-philosophy"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollingText />
      <FeaturedCollections />
      <AboutUs />
      <DesignPhilosophy />
      <Gallery />
      <Contact />
    </main>
  )
}
