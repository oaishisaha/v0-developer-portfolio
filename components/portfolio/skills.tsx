"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, BrainCircuit, Terminal, Brain, Lightbulb, Calculator, Sparkles, Star, Heart, Cpu, Wifi, MessageCircle } from "lucide-react"

const technicalSkills = [
  { name: "Python", level: 95, icon: Code2, color: "bg-rose" },
  { name: "OOPs (Java)", level: 90, icon: Terminal, color: "bg-rose-deep" },
  { name: "C", level: 85, icon: Code2, color: "bg-rose/80" },
  { name: "DSA", level: 82, icon: BrainCircuit, color: "bg-rose/70" },
  { name: "AI / ML", level: 78, icon: Brain, color: "bg-rose-deep/80" },
]

const brainPowers = [
  { label: "Mathematics", icon: Calculator, bg: "bg-pastel-pink/40", ring: "border-pastel-pink" },
  { label: "Aptitude", icon: Lightbulb, bg: "bg-soft-gold/30", ring: "border-soft-gold/60" },
  { label: "Logical Reasoning", icon: Brain, bg: "bg-rose/10", ring: "border-rose/30" },
]

const hardwareSkills = [
  { label: "Raspberry Pi", icon: Cpu, bg: "bg-rose/10", ring: "border-rose/30" },
  { label: "Arduino UNO", icon: Wifi, bg: "bg-soft-gold/30", ring: "border-soft-gold/60" },
]

const softSkills = [
  "Communication",
  "Public Speaking",
  "Team Leadership",
  "Creative Thinking",
  "Time Management",
]

function AnimatedBar({ level, name, color }: { level: number; name: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-extrabold text-foreground">{name}</span>
        <span className="text-sm font-extrabold text-rose">{level}%</span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-pastel-pink/30 border border-pastel-pink/60">
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000 ease-out relative`}
          style={{
            width: visible ? `${level}%` : "0%",
            animation: visible ? `progress-fill 1.2s ease-out` : "none",
          }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${level}%`}
        >
          <div className="absolute inset-0 rounded-full opacity-30 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute top-20 right-10 h-52 w-52 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF91A4 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 left-10 h-40 w-40 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FDFD96 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pastel-pink/50 border-2 border-pastel-pink px-5 py-2 text-xs font-extrabold text-rose-deep uppercase tracking-widest mb-4 shadow-sm shadow-rose/10">
            <BrainCircuit className="h-3.5 w-3.5 text-rose" />
            Skills
            <BrainCircuit className="h-3.5 w-3.5 text-rose" />
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Skills & <span className="text-rose-deep">Strengths</span>
          </h2>
        </div>

        {/* Bento box grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Technical Stack - spans 2 rows */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute shadow-lg shadow-rose/5 md:row-span-2 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-pastel-pink/20 blur-2xl" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pastel-pink/40 border-2 border-pastel-pink shadow-sm">
                <BrainCircuit className="h-6 w-6 text-rose" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground">Technical Stack</h3>
            </div>

            <div className="flex flex-col gap-5">
              {technicalSkills.map((skill) => (
                <AnimatedBar key={skill.name} level={skill.level} name={skill.name} color={skill.color} />
              ))}
            </div>
          </div>

          {/* Brain Power Bubbles */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute shadow-lg shadow-rose/5 relative overflow-hidden">
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-soft-gold/20 blur-2xl" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-gold/30 border-2 border-soft-gold/60 shadow-sm">
                <Brain className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground">Special Brain Power</h3>
            </div>

            <div className="flex flex-col gap-4">
              {brainPowers.map((bp) => {
                const Icon = bp.icon
                return (
                  <div
                    key={bp.label}
                    className={`flex items-center gap-4 rounded-2xl ${bp.bg} border-2 ${bp.ring} px-5 py-4 jiggle bouncy cursor-default shadow-sm`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card border-2 border-pastel-pink/60 shadow-sm">
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <span className="text-sm font-extrabold text-foreground">{bp.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Hardware & IoT tile */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute shadow-lg shadow-rose/5 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-pastel-pink/20 blur-2xl" aria-hidden="true" />

            {/* Tiny LED blink decoration */}
            <div className="absolute top-5 right-5 h-2.5 w-2.5 rounded-full bg-rose animate-pulse shadow-sm shadow-rose/50" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/10 border-2 border-rose/30 shadow-sm">
                <Cpu className="h-6 w-6 text-rose" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground">Hardware & IoT</h3>
            </div>

            <div className="flex flex-col gap-4">
              {hardwareSkills.map((hw) => {
                const Icon = hw.icon
                return (
                  <div
                    key={hw.label}
                    className={`flex items-center gap-4 rounded-2xl ${hw.bg} border-2 ${hw.ring} px-5 py-4 jiggle bouncy cursor-default shadow-sm`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card border-2 border-pastel-pink/60 shadow-sm">
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <span className="text-sm font-extrabold text-foreground">{hw.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Cute circuit trace decoration */}
            <svg className="absolute bottom-3 right-3 h-16 w-16 text-pastel-pink/30" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M8 56 L8 32 L24 32 L24 16 L40 16 L40 8 L56 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
              <circle cx="8" cy="56" r="3" fill="currentColor" />
              <circle cx="56" cy="8" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* Soft Skills - highlighted as a core strength */}
          <div className="rounded-3xl border-2 border-rose/40 bg-gradient-to-br from-rose/5 to-pastel-pink/20 p-8 card-cute shadow-lg shadow-rose/10 md:col-span-2 relative overflow-hidden">
            <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-rose/10 blur-3xl" aria-hidden="true" />
            <Heart className="absolute top-4 right-4 h-5 w-5 text-rose/20 animate-pulse" aria-hidden="true" />
            <Sparkles className="absolute bottom-4 left-4 h-4 w-4 text-soft-gold/30 animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/15 border-2 border-rose/40 shadow-sm heart-glow">
                <MessageCircle className="h-6 w-6 text-rose" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground">Soft Skills</h3>
                <p className="text-xs font-bold text-rose">Core Strength</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-rose/15 border-2 border-rose/40 px-4 py-1.5 text-xs font-extrabold text-rose-deep">
                <Star className="h-3 w-3 fill-rose/40 text-rose" />
                Top Skill
              </span>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-card border-2 border-rose/30 px-5 py-2.5 text-sm font-bold text-foreground bouncy cursor-default shadow-sm hover:border-rose hover:bg-rose/5 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
