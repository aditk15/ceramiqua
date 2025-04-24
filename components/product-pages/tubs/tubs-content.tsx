"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    type: "video",
    src: "/tubs-video.mp4",
    alt: "Luxury tubs and jacuzzis showcase",
  },
  {
    type: "image",
    src: "/tubs-1.webp",
    alt: "Designer bathtub",
  },
  {
    type: "image",
    src: "/tubs-2.webp",
    alt: "Modern jacuzzi",
  },
  {
    type: "image",
    src: "/tubs-3.webp",
    alt: "Premium spa bath",
  },
]

const features = [
  {
    title: "Freestanding Tubs",
    description: "Elegant centerpieces that transform your bathroom into a luxurious retreat",
    icon: "",
  },
  {
    title: "Whirlpool Jacuzzis",
    description: "Experience the ultimate relaxation with therapeutic water jets",
    icon: "",
  },
  {
    title: "Air Bath Systems",
    description: "Gentle bubbles provide a soothing, effervescent massage",
    icon: "",
  },
  {
    title: "Smart Controls",
    description: "Modern technology for personalized bathing experiences",
    icon: "",
  },
]

const products = [
  {
    name: "Freestanding Tubs",
    image: "/tubs-freestanding.webp",
    description: "Elegant centerpieces for your bathroom",
  },
  {
    name: "Whirlpool Jacuzzis",
    image: "/tubs-whirlpool.webp",
    description: "Therapeutic relaxation with water jets",
  },
  {
    name: "Corner Tubs",
    image: "/tubs-corner.webp",
    description: "Space-efficient designs for any bathroom",
  },
  {
    name: "Luxury Spa Baths",
    image: "/tubs-spa.webp",
    description: "Complete wellness experience at home",
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

  // Handle video playback when it becomes active
  useEffect(() => {
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((err) => console.error("Video play error:", err))
    }
  }, [currentSlide])

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
                {slides[currentSlide].type === "video" ? (
                  <motion.video
                    key={`video-${currentSlide}`}
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    muted
                    playsInline
                    loop
                  >
                    <source src={slides[currentSlide].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                ) : (
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
                )}
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
