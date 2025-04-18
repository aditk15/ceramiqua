"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import FullscreenMenu from "./fullscreen-menu"
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-1 transition-all duration-300",
          isScrolled ? "bg-[#f3f0eb]/90 backdrop-blur-sm" : "bg-transparent",
        )}
      >
        <div className="flex-1">
          <a href="/" className="inline-block">
            <Image 
              src="/mainlogo2.webp" 
              alt="The Ceramiqua" 
              width={200}
              height={80}
              priority
              className="h-auto"
            />
          </a>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center rounded-full p-2 text-[#ffffff] hover:text-[#c4a47a] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
