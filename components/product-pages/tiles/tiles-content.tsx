"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    src: "/tiles/tiles-1.png",
    alt: "Designer tiles collection",
  },
  {
    src: "/tiles/tiles-2.png",
    alt: "Modern tile patterns",
  },
  {
    src: "/tiles/tiles-3.png",
    alt: "Ceramic tile designs",
  },
  {
    src: "/tiles/tiles-4.png",
    alt: "Classic tile styles",
  },
]

const categories = [
  {
    title: "Extruded Porcelain Elegance",
    description: "Unique textures and durable finishes ideal for feature walls and artistic spaces.",
    image: "/tiles/tiles-extruded.png",
  },
  {
    title: "Italian Designer Tiles",
    description: "Imported ceramic and porcelain tiles from Italy with exquisite surface treatments and patterns.",
    image: "/tiles/tiles-italian.png",
  },
  {
    title: "Spanish Signature Series",
    description: "Premium wall tiles with decorative grooves and matte/gloss blends from Spain.",
    image: "/tiles/tiles-spanish.png",
  },
  {
    title: "Contemporary Art & Decor",
    description: "Artistic tiles featuring murals, 3D structures, and multi-tone finishes for accent walls.",
    image: "/tiles/tiles-decorative.png",
  },
]


export default function TilesContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="py-16 sm:py-20 md:py-24 bg-[#101010] text-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Media Slideshow */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${currentSlide}`}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src || "/placeholder.svg"}
                        alt={slides[currentSlide].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">Tiles</h2>
              <div className="w-20 h-1 bg-[#bfa77a]"></div>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Discover our exclusive collection of imported tiles — sourced from Italy and Spain, and crafted with architectural elegance in mind. From textured porcelain to large-format wall solutions, every tile is a blend of design and durability.
              </p>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Whether you’re redefining luxury in a residential space or adding artistic identity to a commercial project, our tiles offer timeless expression with unmatched finish and strength.
              </p>

              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Extruded & Full-body Porcelain Options</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Imported Italian & Spanish Collections</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Matt, Gloss, and Textured Finishes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Decorative Murals & 3D Wall Concepts</span>
                </li>
              </ul>

            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2c2c2c] mb-4">
            Curated Tile Categories
          </h2>

            <div className="w-20 h-1 bg-[#bfa77a] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-[#444444]">
              Explore our diverse range of tile collections, each offering unique aesthetics and practical benefits for
              your spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-serif text-xl text-white mb-1">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
