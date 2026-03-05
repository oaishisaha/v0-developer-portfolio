"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Sparkles } from "lucide-react"

const roles = [
  "2nd Year CSE AI Student @ IEM",
  "Logical Thinker",
  "Creative Leader",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1))
      }, 60)
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1))
      }, 35)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,209,220,0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Sparkle chip */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pastel-pink/40 border border-pastel-pink px-4 py-1.5">
          <Sparkles className="h-4 w-4 text-rose" />
          <span className="text-xs font-semibold text-rose-deep">
            Welcome to my world
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
          <span className="text-foreground">{"Hi, I'm "}</span>
          <span className="text-rose-deep">Oaishi Saha</span>
        </h1>

        {/* Typing subtitle */}
        <div className="mt-5 h-8 flex items-center justify-center">
          <p className="text-lg font-semibold text-muted-foreground sm:text-xl">
            {displayed}
            <span
              className="ml-0.5 inline-block w-0.5 h-5 bg-rose align-middle"
              style={{ animation: "typing-blink 0.8s step-end infinite" }}
            />
          </p>
        </div>

        {/* Academic heart badge */}
        <div className="mt-8 inline-flex items-center gap-4 rounded-3xl bg-soft-gold/30 border-2 border-soft-gold/60 px-6 py-3 heart-glow">
          <div className="text-center">
            <p className="text-lg font-extrabold text-foreground">9.03</p>
            <p className="text-xs font-semibold text-muted-foreground">CGPA (1st Yr)</p>
          </div>
          <div className="h-8 w-px bg-soft-gold/60" />
          <div className="text-center">
            <p className="text-lg font-extrabold text-foreground">8.83</p>
            <p className="text-xs font-semibold text-muted-foreground">SGPA (3rd Sem)</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contact"
            className="bouncy inline-flex items-center gap-2 rounded-full bg-rose px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-rose/25"
          >
            Connect With Me
            <Sparkles className="h-4 w-4" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="animate-bounce text-rose/60 hover:text-rose transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
