"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

const collections = [
  {
    title: "Tiles",
    description: "Chic Designs from Around the World",
    image: "/tiles.webp?height=600&width=800",
  },
  {
    title: "Bathwares",
    description: "Essential Fixtures for Everyday Comfort",
    image: "/bathwares.webp?height=600&width=800",
  },
  {
    title: "Tubs & Jacuzzis",
    description: "Soak in Style and Comfort",
    image: "/tubs.webp?height=600&width=800",
  },
  {
    title: "Stretch Ceilings",
    description: "To Brighten Up Your Living Spaces",
    image: "/stretchceiling.webp?height=600&width=800",
  },
]

export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2c2c2c]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Our Offerings
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">{collection.title}</h3>
              <p className="text-white/80 text-sm sm:text-base px-4 text-center">{collection.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
