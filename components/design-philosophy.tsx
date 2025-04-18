"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function DesignPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: "url('/designphilo.webp?height=1080&width=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          className="bg-[#f3f0eb]/90 backdrop-blur-sm p-12 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="space-y-8">
            <motion.p
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2c2c2c] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              “Where we love is home - home that our feet may leave, but not our hearts.”
            </motion.p>
            <motion.p
              className="font-serif text-lg md:text-xl lg:text-2xl text-[#2c2c2c] leading-relaxed italic"
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
