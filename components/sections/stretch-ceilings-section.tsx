"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function StretchCeilingsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      id="ceilings-section"
      className="py-16 sm:py-20 md:py-24 bg-[#101010] text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light">Stretch Ceilings</h2>
            <div className="w-20 h-1 bg-[#bfa77a]"></div>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Transform your spaces with our innovative stretch ceiling solutions. Combining aesthetics with
              functionality, our stretch ceilings offer endless design possibilities for any interior.
            </p>
            <Link
              href="/stretch-ceilings"
              className="inline-block border border-[#bfa77a] bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-[#bfa77a] transition-colors hover:bg-[#bfa77a] hover:text-black"
            >
              Explore Options
            </Link>
          </motion.div>

          {/* Media */}
          <motion.div
            className="relative aspect-video overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/ceilings/ceilings-preview.png"
              alt="Stretch ceilings showcase"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
