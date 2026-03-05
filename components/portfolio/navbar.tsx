"use client"

import { useState, useEffect } from "react"
import { Menu, X, Heart, Sparkles } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b-2 border-pastel-pink shadow-lg shadow-rose/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-foreground font-extrabold text-lg bouncy"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pastel-pink/50 border-2 border-pastel-pink">
            <Heart className="h-4 w-4 text-rose fill-rose/50" />
          </div>
          <span>Oaishi</span>
          <Sparkles className="h-3.5 w-3.5 text-soft-gold" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-muted-foreground hover:text-rose hover:bg-pastel-pink/30 px-4 py-2 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-pastel-pink/30 border-2 border-pastel-pink text-foreground hover:text-rose transition-colors"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-b-2 border-pastel-pink shadow-lg">
          <div className="px-6 py-5 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-muted-foreground hover:text-rose hover:bg-pastel-pink/30 px-4 py-3 rounded-2xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
