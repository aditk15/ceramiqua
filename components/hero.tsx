"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setShowVideo(true)
  }, [])

  return (
    <section className="relative flex h-[100svh] items-center justify-center overflow-hidden">

    {/* <div className="absolute inset-0">
        <Image
          src="/background/bg.webp"
          alt="The Ceramiqua background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div> */}

      <div className="absolute inset-0">
        {showVideo ? (
          <video
            src="/background/bg.mov"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center w-full h-full"
          />
        ) : (
          <div className="absolute inset-0">
             <Image
              src="/background/bg.webp"
              alt="The Ceramiqua background"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
        </div>         
          )}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Ceramiqua
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Tiles, Baths and Beyond
        </motion.p>
      </div>
    </section>
  )
}
