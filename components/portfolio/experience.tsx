import { Star, Users, Trophy, Sparkles } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-pastel-pink/40 px-4 py-1 text-xs font-bold text-rose-deep uppercase tracking-widest mb-3">
            Experience & Projects
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Achievements & Leadership
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured project */}
          <div className="relative rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute overflow-hidden">
            {/* Gold star sticker */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-soft-gold/40 border border-soft-gold/70 px-3 py-1">
              <Star className="h-4 w-4 text-foreground fill-soft-gold" />
              <span className="text-xs font-bold text-foreground">SUCCESSFULLY COMPLETED</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pastel-pink/40 border border-pastel-pink">
                <Sparkles className="h-6 w-6 text-rose" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Pet Language Translator
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">3rd Semester Project</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Led a team of 10 members as Team Leader to successful delivery of an NLP-based
              pet language translation system. The project focused on specialized dataset integration
              and natural language processing techniques to interpret pet vocalizations and behaviors.
            </p>

            <div className="flex items-center gap-2 mb-5">
              <Users className="h-4 w-4 text-rose" />
              <span className="text-sm font-bold text-foreground">
                Led a team of 10 members as Team Leader
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Python", "NLP", "Team Leadership", "Completed"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pastel-pink/50 border border-pastel-pink px-3 py-1 text-xs font-bold text-rose-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hackathon card */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 card-cute">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-gold/30 border border-soft-gold/60">
                <Trophy className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Hackathon Finalist
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">HackSnippet 2025</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Competed among hundreds of teams and reached the finals at HackSnippet 2025,
              showcasing innovative problem-solving skills and rapid prototyping abilities
              under time pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
