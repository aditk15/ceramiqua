"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function AboutContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f7f5f0]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/about-image-1.webp"
                alt="The Ceramiqua showroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2c2c2c]">Our Story</h2>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              The Ceramiqua is a stellar lifestyle retail brand that brings to you Hospitality Supplies,
              quintessentially European luxurious bathroom design products, elegant and contemporary Home décor products
              & accessories, and an à la mode collection of the most beautiful eco-friendly products for bathrooms,
              house interiors & exteriors- all inside one parapet. The Ceramiqua can be aptly called the elixir of
              lifestyle products.
            </p>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              With more than 25 years of expertise under its belt, The Ceramiqua has been a pioneer in introduction of
              Premium End Tiles & Sanwares. Having a dedicated 5000 sq ft store in Indore, it has a marketing presence
              in Bhopal and Nagpur markets too.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 md:order-1"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2c2c2c]">Our Vision</h2>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              The Ceramiqua brings the latest and finest European designs to our esteemed clients in Indore. We have
              redefined opulence for customers who seek high-end, contemporary, and luxurious designs.
            </p>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              Our solutions are a perfect blend of exalted visual charm and utilitarianism. Home or hospitality, we aim
              to augment the interiors into beauteous living spaces, both in and out of the house.
            </p>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/about-image-2.webp"
                alt="The Ceramiqua products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2c2c2c]">Our Leadership</h2>
          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            The directors at SS Ceramica Arch (Indore) Pvt Ltd are Mr. Sandeep Khandelwal and Mrs. Shruti Khandelwal.
            With their vision and leadership, The Ceramiqua continues to set new standards in luxury ceramic and
            bathroom design.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
