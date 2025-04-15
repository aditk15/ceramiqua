"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const collections = [
  {
    title: "Sienna Series",
    description: "Earth-inspired matte",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Lustre Collection",
    description: "Glossy marbled surfaces",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Urban Stone",
    description: "Minimalist concrete tones",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Coastal Palette",
    description: "Ocean-inspired textures",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-serif text-3xl md:text-4xl text-center mb-16 text-[#2c2c2c]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Featured Collections
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            className="group relative aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${collection.image})` }}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="font-serif text-2xl text-white mb-2">{collection.title}</h3>
              <p className="text-white/80">{collection.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
