"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import ScrollingImages from "./scrolling-images"

interface FullscreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

// Define image sets for each menu item
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
  // Default images when no menu item is hovered
  default: {
    upward: [
      "/sc1.jpg?height=600&width=400",
      "/sc2.jpg?height=600&width=400",
      "/sc3.jpg?height=600&width=400",
      "/sc4.jpg?height=600&width=400",
    ],
    downward: [
      "/sc5.jpg?height=600&width=400",
      "/sc6.jpg?height=600&width=400",
      "/sc7.jpg?height=600&width=400",
      "/sc8.jpg?height=600&width=400",
    ]
  }
};

const menuItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Collections", href: "/collections", id: "collections" },
  { label: "Bathroom Spaces", href: "/bathroom-spaces", id: "bathroom" },
  { label: "Wellness", href: "/wellness", id: "wellness" },
  { label: "Showroom", href: "/showroom", id: "showroom" },
  { label: "Design Studio", href: "/design-studio", id: "design" },
  { label: "Contact", href: "/contact", id: "contact" },
]

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)
  
  // Get current image set based on hovered menu item
  const currentImageSet = activeMenuItem ? 
    menuImageSets[activeMenuItem as keyof typeof menuImageSets] : 
    menuImageSets.default;

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
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url('data:image/png;base64,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')",
          backgroundRepeat: "repeat",
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
            <a
              key={item.label}
              href={item.href}
              className="block font-serif text-4xl md:text-5xl text-[#2c2c2c] hover:text-[#c4a47a] transition-colors duration-300"
              onClick={onClose}
              onMouseEnter={() => setActiveMenuItem(item.id)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              {item.label}
            </a>
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