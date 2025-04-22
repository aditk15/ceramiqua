"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function DesignPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/designphilo.webp"
            alt="Design Philosophy Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="bg-[#f3f0eb]/90 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="space-y-4 sm:space-y-8">
            <motion.p
              className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2c2c2c] leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              "Where we love is home - home that our feet may leave, but not our hearts."
            </motion.p>
            <motion.p
              className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-[#2c2c2c] leading-relaxed italic text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Oliver Wendell Holmes, Sr.
            </motion.p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
