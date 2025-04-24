"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function TubsJacuzzisSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      id="tubs-section"
      className="py-16 sm:py-20 md:py-24 bg-[#f7f5f0] text-[#2c2c2c]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Media */}
          <motion.div
            className="relative aspect-video overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/tubs/tubs-preview.png"
              alt="Luxury tubs and jacuzzis"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">Tubs & Jacuzzis</h2>
            <div className="w-20 h-1 bg-[#bfa77a] ml-auto"></div>
            <p className="text-lg sm:text-xl text-[#444444] leading-relaxed">
              Indulge in the ultimate relaxation experience with our premium collection of tubs and jacuzzis. Designed
              to provide both comfort and style, our selection offers the perfect centerpiece for your bathroom
              sanctuary.
            </p>
            <div className="text-right">
              <Link
                href="/tubs-jacuzzis"
                className="inline-block mt-4 border border-[#2c2c2c] bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-[#2c2c2c] transition-colors hover:bg-[#2c2c2c] hover:text-white"
              >
                Discover More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
