"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const phrases = [
  "Wellness Zones",
  "Bathroom Furnitures",
  "Wall Coverings",
  "Luxury Tiles",
  "Immersive Interiors",
  "Curated Products",
  "Visual Storytelling",
  "Home Decor Boutique",
  "Your Design Destination",
]

export default function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null)

  const duplicatedPhrases = [...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases, ...phrases]

  return (
    <section className="relative overflow-hidden bg-[#101010] py-16">
      <div className="relative overflow-hidden py-6">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll-right 40s linear infinite',
            willChange: 'transform'
          }}
        >
          {duplicatedPhrases.map((phrase, i) => (
            <span
              key={`right-${i}`}
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mx-8 inline-block"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden py-6">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll-left 40s linear infinite',
            willChange: 'transform'
          }}
        >
          {duplicatedPhrases.map((phrase, i) => (
            <span
              key={`left-${i}`}
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#bfa77a] opacity-20 mx-8 inline-block"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}