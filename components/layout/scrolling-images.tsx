"use client"

import { useState } from "react"

interface ScrollingImagesProps {
  upwardImages: string[];
  downwardImages: string[];
}

export default function ScrollingImages({ 
  upwardImages = [
    "/sc1.webp?height=600&width=400",
    "/sc2.webp?height=600&width=400",
    "/sc3.webp?height=600&width=400",
    "/sc4.webp?height=600&width=400",
  ],
  downwardImages = [
    "/sc5.webp?height=600&width=400",
    "/sc6.webp?height=600&width=400",
    "/sc7.webp?height=600&width=400",
    "/sc8.webp?height=600&width=400",
  ] 
}: ScrollingImagesProps) {
  const [hoveredColumn, setHoveredColumn] = useState<"left" | "right" | null>(null)

  return (
    <div className="flex w-full h-full overflow-hidden">
      <div
        className="w-1/2 relative overflow-hidden"
        onMouseEnter={() => setHoveredColumn("left")}
        onMouseLeave={() => setHoveredColumn(null)}
      >
        <div className={`flex flex-col ${hoveredColumn === "left" ? "animate-pause" : "animate-scroll-up"}`}>
          {[...upwardImages, ...upwardImages, ...upwardImages].map((src, index) => (
            <div
              key={`up-${index}`}
              className="relative w-full h-[300px] p-2 transition-opacity duration-700 opacity-100"
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-all duration-500 ${
                  hoveredColumn === "left" ? "scale-105 brightness-110" : ""
                }`}
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-1/2 relative overflow-hidden"
        onMouseEnter={() => setHoveredColumn("right")}
        onMouseLeave={() => setHoveredColumn(null)}
      >
        <div className={`flex flex-col ${hoveredColumn === "right" ? "animate-pause" : "animate-scroll-down"}`}>
          {[...downwardImages, ...downwardImages, ...downwardImages].map((src, index) => (
            <div
              key={`down-${index}`}
              className="relative w-full h-[300px] p-2 transition-opacity duration-700 opacity-100"
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-all duration-500 ${
                  hoveredColumn === "right" ? "scale-105 brightness-110" : ""
                }`}
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}