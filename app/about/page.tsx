import AboutHero from "@/components/about/about-hero"
import AboutContent from "@/components/about/about-content"
import ScrollToTop from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | The Ceramiqua",
  description:
    "Learn about The Ceramiqua – our story, vision, and commitment to luxury ceramic and bathroom design. Discover our journey and leadership.",
}

export default function AboutPage() {
  return (
    <main>
      <ScrollToTop />
      <AboutHero />
      <AboutContent />
    </main>
  )
}