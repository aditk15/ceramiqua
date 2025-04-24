"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import ScrollingImages from "./scrolling-images"
import Link from "next/link"

interface FullscreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuImageSets = {
  home: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  tiles: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  bathwares: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  tubs: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  ceilings: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  about: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  contact: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  default: {
    upward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    downward: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
}

const menuItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Tiles", href: "/tiles", id: "tiles" },
  { label: "Bathwares", href: "/bathwares", id: "bathwares" },
  { label: "Tubs & Jacuzzis", href: "/tubs-jacuzzis", id: "tubs" },
  { label: "Stretch Ceilings", href: "/stretch-ceilings", id: "ceilings" },
  { label: "About Us", href: "/about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
]

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)

  const currentImageSet =
    activeMenuItem && menuImageSets[activeMenuItem as keyof typeof menuImageSets]
      ? menuImageSets[activeMenuItem as keyof typeof menuImageSets]
      : menuImageSets.default

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div
      ref={menuRef}
      className={cn(
        "fixed inset-0 z-50 flex flex-col md:flex-row transition-all duration-500 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      style={{
        background: "linear-gradient(to bottom, #f3f0eb, #e9e6de)",
      }}
    >
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 text-[#2c2c2c] hover:text-[#c4a47a] transition-colors"
        aria-label="Close menu"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="flex flex-col justify-center p-12 md:w-1/2 md:p-24 bg-[#eae6df]">
        <nav className="space-y-6">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="block relative"
              onMouseEnter={() => setActiveMenuItem(item.id)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              <Link
                href={item.href}
                className={`block font-serif text-4xl md:text-4xl transition-colors duration-300 ${
                  activeMenuItem === item.id ? "text-[#c4a47a]" : "text-[#2c2c2c]"
                } hover:text-[#c4a47a]`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="hidden md:flex md:w-1/2">
        <ScrollingImages upwardImages={currentImageSet.upward} downwardImages={currentImageSet.downward} />
      </div>
    </div>
  )
}
