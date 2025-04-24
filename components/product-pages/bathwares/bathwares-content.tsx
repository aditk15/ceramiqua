"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    src: "/bathwares/bathwares-1.png",
    alt: "Designer bathroom fixtures",
  },
  {
    src: "/bathwares/bathwares-2.png",
    alt: "Modern bathroom accessories",
  },
  {
    src: "/bathwares/bathwares-3.png",
    alt: "Premium bathroom collection",
  },
  {
    src: "/bathwares/bathwares-4.png",
    alt: "Luxury bathware",
  },
]

const categories = [
  {
    title: "Faucets & Taps",
    description: "Elegant designs with advanced functionality",
    image: "/bathwares/bathwares-faucets.png",
  },
  {
    title: "Sinks & Basins",
    description: "Statement pieces for your bathroom",
    image: "/bathwares/bathwares-sinks.png",
  },
  {
    title: "Shower Systems",
    description: "Immersive shower experiences",
    image: "/bathwares/bathwares-showers.png",
  },
  {
    title: "Bathroom Accessories",
    description: "Finishing touches for a complete look",
    image: "/bathwares/bathwares-accessories.png",
  },
  {
    title: "Toilets & Bidets",
    description: "Modern designs with water-saving technology",
    image: "/bathwares/bathwares-toilets.png",
  },
  {
    title: "Vanities",
    description: "Stylish storage solutions",
    image: "/bathwares/bathwares-vanities.png",
  },
]

export default function BathwaresContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="py-16 sm:py-20 md:py-24 bg-[#f7f5f0]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2c2c2c] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Bathwares
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-[#bfa77a] mx-auto mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="max-w-3xl mx-auto text-lg sm:text-xl text-[#444444] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transform your bathroom into a sanctuary of luxury and comfort with our premium bathware collection. From
              elegant faucets to designer sinks, we offer everything you need to create your dream bathroom.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main slideshow */}
            <motion.div
              className="md:col-span-2 relative aspect-video overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-[#bfa77a]" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl text-[#2c2c2c] mb-3">Premium Fixtures</h3>
                <p className="text-[#444444]">
                  Our collection features high-quality fixtures from renowned brands, combining functionality with
                  elegant design.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl text-[#2c2c2c] mb-3">Designer Faucets</h3>
                <p className="text-[#444444]">
                  Explore our range of designer faucets that add a touch of sophistication to any bathroom space.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl text-[#2c2c2c] mb-3">Luxury Sinks & Basins</h3>
                <p className="text-[#444444]">
                  From vessel sinks to undermount basins, our collection offers options for every style preference.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#101010] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mb-4">Product Categories</h2>
            <div className="w-20 h-1 bg-[#bfa77a] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/80">
              Browse our comprehensive range of bathroom products, each designed to enhance your bathroom experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="font-serif text-2xl text-white mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm max-w-xs">{category.description}</p>
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
