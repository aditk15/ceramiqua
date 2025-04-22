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
      "/home-1.jpg?height=600&width=400",
      "/home-2.jpg?height=600&width=400", 
      "/home-3.jpg?height=600&width=400",
      "/home-4.jpg?height=600&width=400",
    ],
    downward: [
      "/home-5.jpg?height=600&width=400",
      "/home-6.jpg?height=600&width=400",
      "/home-7.jpg?height=600&width=400",
      "/home-8.jpg?height=600&width=400",
    ]
  },
  collections: {
    upward: [
      "/collections-1.jpg?height=600&width=400",
      "/collections-2.jpg?height=600&width=400",
      "/collections-3.jpg?height=600&width=400",
      "/collections-4.jpg?height=600&width=400",
    ],
    downward: [
      "/collections-5.jpg?height=600&width=400",
      "/collections-6.jpg?height=600&width=400",
      "/collections-7.jpg?height=600&width=400",
      "/collections-8.jpg?height=600&width=400",
    ]
  },
  bathroom: {
    upward: [
      "/bathroom-1.jpg?height=600&width=400",
      "/bathroom-2.jpg?height=600&width=400",
      "/bathroom-3.jpg?height=600&width=400",
      "/bathroom-4.jpg?height=600&width=400",
    ],
    downward: [
      "/bathroom-5.jpg?height=600&width=400",
      "/bathroom-6.jpg?height=600&width=400",
      "/bathroom-7.jpg?height=600&width=400",
      "/bathroom-8.jpg?height=600&width=400",
    ]
  },
  wellness: {
    upward: [
      "/wellness-1.jpg?height=600&width=400",
      "/wellness-2.jpg?height=600&width=400",
      "/wellness-3.jpg?height=600&width=400",
      "/wellness-4.jpg?height=600&width=400",
    ],
    downward: [
      "/wellness-5.jpg?height=600&width=400",
      "/wellness-6.jpg?height=600&width=400",
      "/wellness-7.jpg?height=600&width=400",
      "/wellness-8.jpg?height=600&width=400",
    ]
  },
  showroom: {
    upward: [
      "/showroom-1.jpg?height=600&width=400",
      "/showroom-2.jpg?height=600&width=400",
      "/showroom-3.jpg?height=600&width=400",
      "/showroom-4.jpg?height=600&width=400",
    ],
    downward: [
      "/showroom-5.jpg?height=600&width=400",
      "/showroom-6.jpg?height=600&width=400",
      "/showroom-7.jpg?height=600&width=400",
      "/showroom-8.jpg?height=600&width=400",
    ]
  },
  design: {
    upward: [
      "/design-1.jpg?height=600&width=400",
      "/design-2.jpg?height=600&width=400",
      "/design-3.jpg?height=600&width=400",
      "/design-4.jpg?height=600&width=400",
    ],
    downward: [
      "/design-5.jpg?height=600&width=400",
      "/design-6.jpg?height=600&width=400",
      "/design-7.jpg?height=600&width=400",
      "/design-8.jpg?height=600&width=400",
    ]
  },
  contact: {
    upward: [
      "/contact-1.jpg?height=600&width=400",
      "/contact-2.jpg?height=600&width=400",
      "/contact-3.jpg?height=600&width=400",
      "/contact-4.jpg?height=600&width=400",
    ],
    downward: [
      "/contact-5.jpg?height=600&width=400",
      "/contact-6.jpg?height=600&width=400",
      "/contact-7.jpg?height=600&width=400",
      "/contact-8.jpg?height=600&width=400",
    ]
  },
  default: {
    upward: [
      "/sc1.webp?height=600&width=400",
      "/sc2.webp?height=600&width=400",
      "/sc3.webp?height=600&width=400",
      "/sc4.webp?height=600&width=400",
    ],
    downward: [
      "/sc5.webp?height=600&width=400",
      "/sc6.webp?height=600&width=400",
      "/sc7.webp?height=600&width=400",
      "/sc8.webp?height=600&width=400",
    ]
  }
};

const menuItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Tiles", href: "/", id: "tiles" },
  { label: "Bathwares", href: "/", id: "bathwares" },
  { label: "Tubs & Jacuzzis", href: "/", id: "tubs" },
  { label: "Stretch Ceilings", href: "/", id: "ceilings" },
  { label: "Showroom", href: "/", id: "showroom" },
  { label: "Contact", href: "/", id: "contact" },
]

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)
  
  const currentImageSet = activeMenuItem && menuImageSets[activeMenuItem as keyof typeof menuImageSets] 
    ? menuImageSets[activeMenuItem as keyof typeof menuImageSets] 
    : menuImageSets.default;

  useEffect(() => {
    console.log("Active menu item:", activeMenuItem);
    console.log("Current image set:", currentImageSet);
  }, [activeMenuItem, currentImageSet]);
  
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
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
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
              onMouseEnter={() => {
                console.log("Mouse enter:", item.id);
                setActiveMenuItem(item.id);
              }}
              onMouseLeave={() => {
                console.log("Mouse leave:", item.id);
                setActiveMenuItem(null);
              }}
            >
              <Link 
                href={item.href}
                className={`block font-serif text-4xl md:text-4xl transition-colors duration-300 ${
                  activeMenuItem === item.id ? 'text-[#c4a47a]' : 'text-[#2c2c2c]'
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
        <ScrollingImages 
          upwardImages={currentImageSet.upward}
          downwardImages={currentImageSet.downward}
        />
      </div>
    </div>
  )
}