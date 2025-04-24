"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    type: "image",
    src: "/tubs/tubs-1.png",
    alt: "Designer bathtub",
  },
  {
    type: "image",
    src: "/tubs/tubs-2.png",
    alt: "Modern jacuzzi",
  },
  {
    type: "image",
    src: "/tubs/tubs-3.png",
    alt: "Premium spa bath",
  },
  {
    type: "image",
    src: "/tubs/tubs-4.png",
    alt: "Luxury freestanding tub",
  }
]

const features = [
  {
    title: "Smart Hydrotherapy",
    description: "Integrated temperature control, automatic water level sensors, and full HD smart displays enhance your soak.",
    icon: "", // Add relevant icons if needed
  },
  {
    title: "Sensory Wellness",
    description: "Bluetooth audio, underwater mood lighting, and ambient color rings create a serene escape.",
    icon: "",
  },
  {
    title: "Effortless Hygiene",
    description: "Ozone sterilization, UV nozzle cleaning, and antibacterial surfaces ensure a clean and safe bathing experience.",
    icon: "",
  },
  {
    title: "Modular Controls",
    description: "Touch-sensitive interfaces with customizable programs let you tune your bath the way you want.",
    icon: "",
  },
]


const products = [
  {
    name: "Wellness Tubs",
    image: "/tubs/tubs-cascade.png",
    description: "Sleek forms with cascading waterfalls and smart display tech for an immersive spa-like feel.",
  },
  {
    name: "Integrated Bathing Systems",
    image: "/tubs/tubs-integrated.jpg",  
    description: "Stylish bathtubs with built-in basins, storage, and customizable faucets—perfect for compact and luxury settings alike.",
  },  
  {
    name: "Luxury Freestanding Baths",
    image: "/tubs/tubs-freestanding.png",
    description: "Artfully sculpted with ergonomic comfort and tactile elegance in surfex and fineceramic finishes.",
  },
  {
    name: "Compact Designer Tubs",
    image: "/tubs/tubs-compact.png",
    description: "Ideal for urban homes, these space-efficient units don’t compromise on performance or style.",
  },
]


export default function TubsContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const videoRef = useRef<HTMLVideoElement>(null)

  // Auto-advance slides
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
        className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#101010] to-[#1c1c1c] text-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Content */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">Tubs & Jacuzzis</h2>
              <div className="w-20 h-1 bg-[#bfa77a]"></div>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Indulge in the ultimate relaxation experience with our premium collection of tubs and jacuzzis. Designed
                to provide both comfort and style, our selection offers the perfect centerpiece for your bathroom
                sanctuary.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Media Slideshow */}
            <motion.div
              className="lg:col-span-7 relative aspect-video overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
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
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
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
          </div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2c2c2c] mb-4">
              Our Collection
            </h2>
            <div className="w-20 h-1 bg-[#bfa77a] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-[#444444]">
              Explore our range of premium tubs and jacuzzis, each designed to provide the ultimate bathing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="group relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-serif text-2xl text-white mb-2">{product.name}</h3>
                    <p className="text-white/80">{product.description}</p>
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
