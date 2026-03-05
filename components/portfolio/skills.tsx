"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, BrainCircuit, Terminal, Brain, Lightbulb, Calculator } from "lucide-react"

const technicalSkills = [
  { name: "Python", level: 95, icon: Code2 },
  { name: "OOPs (Java)", level: 90, icon: Terminal },
  { name: "C", level: 85, icon: Code2 },
]

const brainPowers = [
  { label: "Mathematics", icon: Calculator },
  { label: "Aptitude", icon: Lightbulb },
  { label: "Logical Reasoning", icon: Brain },
]

function AnimatedBar({ level, name }: { level: number; name: string }) {
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
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-bold text-foreground">{name}</span>
        <span className="text-xs font-bold text-rose">{level}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-pastel-pink/40">
        <div
          className="h-full rounded-full bg-rose transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            animation: visible ? `progress-fill 1.2s ease-out` : "none",
          }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${level}%`}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-pastel-pink/40 px-4 py-1 text-xs font-bold text-rose-deep uppercase tracking-widest mb-3">
            Skills
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Skills & Strengths
          </h2>
        </div>

        {/* Bento box */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Technical Stack */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-6 card-cute md:row-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pastel-pink/40">
                <BrainCircuit className="h-5 w-5 text-rose" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Technical Stack</h3>
            </div>

            <div className="flex flex-col gap-5">
              {technicalSkills.map((skill) => (
                <AnimatedBar key={skill.name} level={skill.level} name={skill.name} />
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-pastel-pink/60">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {["Soft Skills", "Communication", "Public Speaking"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-blush border border-pastel-pink/60 px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Brain Power Bubbles */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-6 card-cute">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-soft-gold/30">
                <Brain className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Special Brain Power</h3>
            </div>

            <div className="flex flex-col gap-4">
              {brainPowers.map((bp) => {
                const Icon = bp.icon
                return (
                  <div
                    key={bp.label}
                    className="flex items-center gap-3 rounded-2xl bg-pastel-pink/30 border border-pastel-pink px-5 py-4 jiggle bouncy cursor-default"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose/10 border border-rose/30">
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <span className="text-sm font-bold text-foreground">{bp.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Extra bento tile: personal touch */}
          <div className="rounded-3xl border-2 border-soft-gold/60 bg-soft-gold/15 p-6 card-cute flex items-center justify-center text-center">
            <div>
              <p className="text-2xl font-extrabold text-foreground">CGPA 9.03</p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">
                Consistently in the top of the class
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
