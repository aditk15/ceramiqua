"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-[#f7f5f0]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-[#2c2c2c] mb-12 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Us
        </motion.h2>

        <motion.div
  className="space-y-6 text-lg md:text-xl lg:text-2xl text-[#444444] leading-relaxed text-justify max-w-3xl mx-auto"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <p>
    The Ceramiqua is a stellar lifestyle retail brand that brings to you Hospitality Supplies, quintessentially European luxurious bathroom design products, elegant and contemporary Home décor products & accessories, and an à la mode collection of the most beautiful eco-friendly products for bathrooms, house interiors & exteriors- all inside one parapet. The Ceramiqua can be aptly called the elixir of lifestyle products.
  </p>
  
  <p>
    With more than 25 years of expertise under its belt, The Ceramiqua has been a pioneer in introduction of Premium End Tiles & Sanwares. Having a dedicated 5000 sq ft store in Indore, it has a marketing presence in Bhopal and Nagpur markets too.
  </p>
  
  <p>
    The Ceramiqua brings the latest and finest European designs to our esteemed clients in Indore. We have redefined opulence for customers who seek high-end, contemporary, and luxurious designs.
  </p>
  
  <p>
    Our solutions are a perfect blend of exalted visual charm and utilitarianism. Home or hospitality, we aim to augment the interiors into beauteous living spaces, both in and out of the house.
  </p>
  
  <p>
    The directors at SS Ceramica Arch (Indore) Pvt Ltd are Mr. Sandeep Khandelwal and Mrs. Shruti Khandelwal.
  </p>
</motion.div>
      </div>
    </motion.section>
  )
}
