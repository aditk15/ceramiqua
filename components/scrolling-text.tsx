"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const phrases = ["Bathroom Spaces", "Wellness Zones", "Design Studio", "Showroom", "Collections"]

export default function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Duplicate phrases for seamless looping
  const duplicatedPhrases = [...phrases, ...phrases, ...phrases]

  return (
    <section className="relative overflow-hidden bg-[#101010] py-16">
      {/* Top row - left to right */}
      <div className="relative overflow-hidden py-6">
        <div className="animate-scroll-right flex whitespace-nowrap">
          {duplicatedPhrases.map((phrase, i) => (
            <motion.span
              key={`right-${i}`}
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mx-8 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -2, 0, 2, 0] }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
            >
              {phrase}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom row - right to left */}
      <div className="relative overflow-hidden py-6">
        <div className="animate-scroll-left flex whitespace-nowrap">
          {duplicatedPhrases.map((phrase, i) => (
            <motion.span
              key={`left-${i}`}
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#bfa77a] opacity-20 mx-8 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, 2, 0, -2, 0] }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                  delay: (i * 0.1) % 0.5,
                },
              }}
            >
              {phrase}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
