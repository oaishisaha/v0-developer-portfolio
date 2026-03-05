import { Heart, Footprints, Palette, BookOpen, Leaf, PawPrint, Scale } from "lucide-react"

const values = [
  { label: "Human Rights", icon: Scale },
  { label: "Animals", icon: PawPrint },
  { label: "Politics", icon: Heart },
  { label: "The Environment", icon: Leaf },
]

const funFacts = [
  { text: "Love hiking the trails", icon: Footprints },
  { text: "Passion for drawing", icon: Palette },
  { text: "Literature enthusiast", icon: BookOpen },
]

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-pastel-pink/40 px-4 py-1 text-xs font-bold text-rose-deep uppercase tracking-widest mb-3">
            About Me
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            What Makes Me, Me
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Column A: Values */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-6 card-cute">
            <h3 className="text-lg font-bold text-foreground mb-5">
              What I Care About
            </h3>
            <div className="flex flex-wrap gap-3">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <span
                    key={v.label}
                    className="inline-flex items-center gap-2 rounded-full bg-pastel-pink/50 px-4 py-2 text-sm font-semibold text-foreground bouncy"
                  >
                    <Icon className="h-4 w-4 text-rose" />
                    {v.label}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Column B: Fun facts */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-6 card-cute">
            <h3 className="text-lg font-bold text-foreground mb-5">
              Fun Facts
            </h3>
            <ul className="flex flex-col gap-4">
              {funFacts.map((fact) => {
                const Icon = fact.icon
                return (
                  <li
                    key={fact.text}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-pastel-pink/40">
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <span className="text-sm font-semibold">{fact.text}</span>
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
