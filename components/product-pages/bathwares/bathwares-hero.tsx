"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BathwaresHero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bathwares/bathwares-hero.jpg"
          alt="Premium Bathwares Collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-serif text-4xl font-light tracking-wider text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Bathwares
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg font-light tracking-wide text-white/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Transform your bathroom into a sanctuary of luxury and comfort
        </motion.p>
      </div>
    </section>
  )
}
