import AboutHero from "@/components/about/about-hero"
import AboutContent from "@/components/about/about-content"
import ScrollToTop from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <main>
      <ScrollToTop />
      <AboutHero />
      <AboutContent />
    </main>
  )
}
