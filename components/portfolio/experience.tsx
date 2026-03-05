import { Star, Users, Trophy, Sparkles, Heart } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute bottom-10 left-0 h-52 w-52 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FDFD96 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pastel-pink/50 border-2 border-pastel-pink px-5 py-2 text-xs font-extrabold text-rose-deep uppercase tracking-widest mb-4 shadow-sm shadow-rose/10">
            <Star className="h-3.5 w-3.5 text-soft-gold fill-soft-gold" />
            Experience & Projects
            <Star className="h-3.5 w-3.5 text-soft-gold fill-soft-gold" />
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Achievements & <span className="text-rose-deep">Leadership</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured project */}
          <div className="relative rounded-3xl border-2 border-pastel-pink bg-card p-8 lg:p-10 card-cute overflow-hidden shadow-xl shadow-rose/5">
            {/* Background glow inside card */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-soft-gold/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-pastel-pink/30 blur-3xl" aria-hidden="true" />

            {/* Completed badge */}
            <div className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-soft-gold/40 border-2 border-soft-gold/70 px-4 py-1.5 shadow-sm">
              <Star className="h-4 w-4 text-foreground fill-soft-gold" />
              <span className="text-xs font-extrabold text-foreground uppercase tracking-wide">Completed</span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-pink/40 border-2 border-pastel-pink shadow-sm">
                <Sparkles className="h-7 w-7 text-rose" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  Pet Language Translator
                </h3>
                <p className="text-sm font-bold text-muted-foreground">3rd Semester Project</p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-2xl">
              Led a team of 10 members as Team Leader to successful delivery of an NLP-based
              pet language translation system. The project focused on specialized dataset integration
              and natural language processing techniques to interpret pet vocalizations and behaviors.
            </p>

            <div className="flex items-center gap-3 mb-6 rounded-2xl bg-pastel-pink/30 border-2 border-pastel-pink/60 px-5 py-3 inline-flex">
              <Users className="h-5 w-5 text-rose" />
              <span className="text-sm font-extrabold text-foreground">
                Led a team of 10 members as Team Leader
              </span>
              <Heart className="h-4 w-4 text-rose fill-rose/30" />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Python", "NLP", "Team Leadership", "Completed"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pastel-pink/50 border-2 border-pastel-pink px-4 py-1.5 text-xs font-extrabold text-rose-deep shadow-sm bouncy cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hackathon card */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute shadow-lg shadow-rose/5 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-soft-gold/15 blur-2xl" aria-hidden="true" />

            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-gold/30 border-2 border-soft-gold/60 shadow-sm">
                <Trophy className="h-7 w-7 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  Hackathon Finalist
                </h3>
                <p className="text-sm font-bold text-muted-foreground">HackSnippet 2025</p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Competed among hundreds of teams and reached the finals at HackSnippet 2025,
              showcasing innovative problem-solving skills and rapid prototyping abilities
              under time pressure.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Hackathon", "Problem Solving", "Rapid Prototyping"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-soft-gold/30 border-2 border-soft-gold/50 px-4 py-1.5 text-xs font-extrabold text-foreground bouncy cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
