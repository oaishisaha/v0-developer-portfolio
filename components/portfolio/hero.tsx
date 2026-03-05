"use client"

import { ArrowDown, Download, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="text-xs font-medium text-slate-300">
            Open to opportunities
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="text-neon text-glow">Alex Chen</span>
        </h1>

        <p className="mt-4 text-lg text-slate-400 sm:text-xl lg:text-2xl font-mono">
          CS Student & AI/ML Enthusiast
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 text-pretty">
          Passionate about building intelligent systems and crafting elegant
          software. Currently leading a 10-person AI project team and exploring
          the intersection of machine learning and interactive storytelling.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-neon px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon/25 transition-all hover:bg-neon-light hover:shadow-neon/40"
          >
            Get in Touch
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-neon/50 hover:text-neon"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#experience"
            className="animate-bounce text-slate-400 hover:text-neon transition-colors"
            aria-label="Scroll to experience section"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
