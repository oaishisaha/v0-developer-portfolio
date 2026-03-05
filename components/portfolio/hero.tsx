"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Sparkles, Heart, Star } from "lucide-react"

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
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1DC 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 right-10 h-60 w-60 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #FDFD96 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF91A4 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Scattered decorative icons */}
      <Heart className="pointer-events-none absolute top-32 left-[15%] h-6 w-6 text-rose/20 animate-pulse" aria-hidden="true" />
      <Star className="pointer-events-none absolute top-40 right-[20%] h-5 w-5 text-soft-gold/40 animate-pulse" style={{ animationDelay: "0.5s" }} aria-hidden="true" />
      <Sparkles className="pointer-events-none absolute bottom-32 left-[25%] h-5 w-5 text-rose/20 animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />
      <Heart className="pointer-events-none absolute bottom-40 right-[15%] h-4 w-4 text-pastel-pink/60 animate-pulse" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Sparkle chip */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pastel-pink/50 border-2 border-pastel-pink px-5 py-2 shadow-sm shadow-rose/10">
          <Sparkles className="h-4 w-4 text-rose" />
          <span className="text-xs font-extrabold text-rose-deep tracking-wide uppercase">
            Welcome to my world
          </span>
          <Sparkles className="h-4 w-4 text-rose" />
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-balance leading-tight">
          <span className="text-foreground">{"Hi, I'm "}</span>
          <span className="text-rose-deep relative">
            Oaishi Saha
            {/* Underline decoration */}
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" aria-hidden="true">
              <path d="M2 8 C 40 2, 80 12, 120 6 S 170 2, 198 8" stroke="#FF91A4" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>
        </h1>

        {/* Typing subtitle */}
        <div className="mt-6 h-9 flex items-center justify-center">
          <p className="text-xl font-bold text-muted-foreground sm:text-2xl">
            {displayed}
            <span
              className="ml-0.5 inline-block w-0.5 h-6 bg-rose align-middle rounded-full"
              style={{ animation: "typing-blink 0.8s step-end infinite" }}
            />
          </p>
        </div>

        {/* Academic heart-shaped badge area */}
        <div className="mt-10 inline-flex items-center gap-5 rounded-full bg-soft-gold/25 border-2 border-soft-gold/60 px-8 py-4 shadow-lg shadow-soft-gold/10 heart-glow">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-gold/40">
              <Star className="h-5 w-5 text-foreground fill-soft-gold" />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-foreground leading-none">9.03</p>
              <p className="text-xs font-bold text-muted-foreground">CGPA (1st Yr)</p>
            </div>
          </div>

          <div className="h-10 w-px bg-soft-gold/50" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-gold/40">
              <Star className="h-5 w-5 text-foreground fill-soft-gold" />
            </div>
            <div className="text-left">
              <p className="text-xl font-extrabold text-foreground leading-none">8.83</p>
              <p className="text-xs font-bold text-muted-foreground">SGPA (3rd Sem)</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#contact"
            className="bouncy inline-flex items-center gap-3 rounded-full bg-rose px-10 py-4 text-base font-extrabold text-primary-foreground shadow-xl shadow-rose/30 hover:shadow-2xl hover:shadow-rose/40 transition-shadow"
          >
            <Heart className="h-5 w-5 fill-current" />
            Connect With Me
            <Sparkles className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="animate-bounce flex flex-col items-center gap-1 text-rose/50 hover:text-rose transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
