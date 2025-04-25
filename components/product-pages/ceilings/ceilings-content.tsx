"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    src: "/ceilings/ceilings-1.jpg",
    alt: "Modern stretch ceiling",
  },
  {
    src: "/ceilings/ceilings-2.jpg",
    alt: "Illuminated stretch ceiling",
  },
  {
    src: "/ceilings/ceilings-3.jpg",
    alt: "Designer ceiling installation",
  },
  {
    src: "/ceilings/ceilings-4.jpg",
    alt: "Elegant stretch ceiling",
  },
]

const applications = [
  {
    title: "Residential",
    image: "/ceilings-residential.webp",
    description: "Transform your home with elegant ceiling designs",
  },
  {
    title: "Commercial",
    image: "/ceilings-commercial.webp",
    description: "Create impressive spaces for your business",
  },
  {
    title: "Hospitality",
    image: "/ceilings-hospitality.webp",
    description: "Enhance guest experiences with stunning ceilings",
  },
  {
    title: "Healthcare",
    image: "/ceilings-healthcare.webp",
    description: "Hygienic and practical solutions for medical facilities",
  },
]

export default function CeilingsContent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const videoRef = useRef<HTMLVideoElement>(null)

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
        className="py-16 sm:py-20 md:py-24 bg-[#101010] text-white"
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
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">Stretch Ceilings</h2>
              <div className="w-20 h-1 bg-[#bfa77a]"></div>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Transform your spaces with our innovative stretch ceiling solutions. Combining aesthetics with
                functionality, our stretch ceilings offer endless design possibilities for any interior.
              </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-serif text-2xl text-[#2c2c2c] mb-4">Endless Design Options</h3>
              <p className="text-[#444444] mb-4">
                With over 100 colors and finishes, including matte, glossy, satin, metallic, and translucent options,
                our stretch ceilings can be customized to match any interior design concept.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-block px-3 py-1 bg-[#f0e9df] text-[#2c2c2c] text-sm rounded-full">Matte</span>
                <span className="inline-block px-3 py-1 bg-[#f0e9df] text-[#2c2c2c] text-sm rounded-full">Glossy</span>
                <span className="inline-block px-3 py-1 bg-[#f0e9df] text-[#2c2c2c] text-sm rounded-full">Satin</span>
                <span className="inline-block px-3 py-1 bg-[#f0e9df] text-[#2c2c2c] text-sm rounded-full">
                  Metallic
                </span>
                <span className="inline-block px-3 py-1 bg-[#f0e9df] text-[#2c2c2c] text-sm rounded-full">
                  Translucent
                </span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-serif text-2xl text-[#2c2c2c] mb-4">Practical Benefits</h3>
              <p className="text-[#444444] mb-4">
                Beyond aesthetics, our stretch ceilings offer practical advantages including water resistance, acoustic
                improvement, and easy maintenance. They're perfect for both residential and commercial spaces.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Water resistant</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Sound absorbing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#bfa77a] rounded-full mr-3"></span>
                  <span>Easy to clean</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-serif text-2xl text-[#2c2c2c] mb-4">Professional Installation</h3>
              <p className="text-[#444444] mb-4">
                Our team of certified professionals ensures flawless installation of your stretch ceiling. The process
                is quick, clean, and minimally invasive, with most installations completed in just one day.
              </p>
              <button className="mt-4 border border-[#2c2c2c] bg-transparent px-6 py-2 text-sm uppercase tracking-widest text-[#2c2c2c] transition-colors hover:bg-[#2c2c2c] hover:text-white" 
              onClick={() => (window.location.href = "mailto:sandeep@theceramiqua.com?subject=Consultation Request for Stretch Ceilings")}>
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 sm:py-20 md:py-24 bg-[#101010] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mb-4">Applications</h2>
            <div className="w-20 h-1 bg-[#bfa77a] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/80">
              Our stretch ceilings are versatile solutions for various environments and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-serif text-2xl text-white mb-2">{app.title}</h3>
                    <p className="text-white/90 max-w-xs">{app.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}
