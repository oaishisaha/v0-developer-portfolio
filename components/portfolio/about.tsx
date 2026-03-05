import { Heart, Footprints, Palette, BookOpen, Leaf, PawPrint, Scale, Sparkles } from "lucide-react"

const values = [
  { label: "Human Rights", icon: Scale, bg: "bg-rose/10", ring: "border-rose/30" },
  { label: "Animals", icon: PawPrint, bg: "bg-pastel-pink/40", ring: "border-pastel-pink" },
  { label: "Politics", icon: Heart, bg: "bg-soft-gold/30", ring: "border-soft-gold/60" },
  { label: "The Environment", icon: Leaf, bg: "bg-rose/10", ring: "border-rose/30" },
]

const funFacts = [
  { text: "Love hiking the trails", icon: Footprints, accent: "bg-soft-gold/30" },
  { text: "Passion for drawing", icon: Palette, accent: "bg-pastel-pink/40" },
  { text: "Literature enthusiast", icon: BookOpen, accent: "bg-rose/10" },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute top-10 right-0 h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1DC 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pastel-pink/50 border-2 border-pastel-pink px-5 py-2 text-xs font-extrabold text-rose-deep uppercase tracking-widest mb-4 shadow-sm shadow-rose/10">
            <Sparkles className="h-3.5 w-3.5 text-rose" />
            About Me
            <Sparkles className="h-3.5 w-3.5 text-rose" />
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            What Makes Me, <span className="text-rose-deep">Me</span>
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Column A: Values */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute shadow-lg shadow-rose/5 relative overflow-hidden">
            {/* Corner decoration */}
            <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full bg-pastel-pink/30 blur-xl" aria-hidden="true" />
            <Heart className="absolute top-4 right-4 h-5 w-5 text-rose/20" aria-hidden="true" />

            <h3 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose fill-rose/30" />
              What I Care About
            </h3>
            <div className="flex flex-wrap gap-3">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <span
                    key={v.label}
                    className={`inline-flex items-center gap-2 rounded-full ${v.bg} border-2 ${v.ring} px-5 py-2.5 text-sm font-bold text-foreground bouncy cursor-default shadow-sm`}
                  >
                    <Icon className="h-4 w-4 text-rose" />
                    {v.label}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Column B: Fun facts */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute shadow-lg shadow-rose/5 relative overflow-hidden">
            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-soft-gold/30 blur-xl" aria-hidden="true" />
            <Sparkles className="absolute top-4 right-4 h-5 w-5 text-soft-gold/30" aria-hidden="true" />

            <h3 className="text-xl font-extrabold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-soft-gold" />
              Fun Facts
            </h3>
            <ul className="flex flex-col gap-5">
              {funFacts.map((fact) => {
                const Icon = fact.icon
                return (
                  <li
                    key={fact.text}
                    className="flex items-center gap-4 text-foreground bouncy cursor-default"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${fact.accent} border-2 border-pastel-pink shadow-sm`}>
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <span className="text-sm font-bold">{fact.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
