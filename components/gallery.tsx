"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  const duplicatedImages = [...galleryImages, ...galleryImages]

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2c2c2c]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h2>

      <div className="relative overflow-hidden">
        <div
          className={`gallery-scroll-container ${isHovered ? "paused" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="gallery-scroll-track">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="gallery-image-wrapper">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${(index % galleryImages.length) + 1}`}
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .gallery-scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        
        .gallery-scroll-track {
          display: flex;
          gap: 24px;
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        
        .gallery-scroll-container.paused .gallery-scroll-track {
          animation-play-state: paused;
        }
        
        .gallery-item {
          flex-shrink: 0;
          position: relative;
          height: 300px;
          width: 400px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-image-wrapper {
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease, filter 0.5s ease;
        }
        
        .gallery-item:hover .gallery-image-wrapper {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 12px)); /* 50% + half of the gap */
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .gallery-item {
            height: 250px;
            width: 330px;
          }
        }
        
        @media (max-width: 640px) {
          .gallery-item {
            height: 200px;
            width: 260px;
          }
          
          .gallery-scroll-track {
            gap: 16px;
          }
        }
      `}</style>
    </motion.section>
  )
}
