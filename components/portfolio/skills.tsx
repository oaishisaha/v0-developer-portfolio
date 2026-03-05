import { Code2, Cpu, BrainCircuit, Database, GitBranch, Layers } from "lucide-react"

const skills = [
  {
    title: "Java",
    description:
      "Enterprise-grade applications, data structures, algorithms, and OOP design patterns. Experienced with Spring Boot and Maven.",
    icon: Code2,
    level: 90,
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Python",
    description:
      "Scientific computing, scripting, and ML pipelines. Proficient with NumPy, Pandas, Flask, and FastAPI.",
    icon: Cpu,
    level: 95,
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Machine Learning",
    description:
      "Neural networks, NLP, computer vision, and reinforcement learning. Hands-on with PyTorch, TensorFlow, and scikit-learn.",
    icon: BrainCircuit,
    level: 85,
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Data & Databases",
    description:
      "PostgreSQL, MongoDB, data modeling, and ETL pipeline design for scalable systems.",
    icon: Database,
    level: 80,
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Version Control & DevOps",
    description:
      "Git workflows, CI/CD pipelines, Docker containerization, and cloud deployment with AWS.",
    icon: GitBranch,
    level: 85,
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "System Design",
    description:
      "Distributed systems, microservices architecture, API design, and scalability patterns.",
    icon: Layers,
    level: 75,
    span: "lg:col-span-2 lg:row-span-1",
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <BrainCircuit className="h-5 w-5 text-neon" />
            <span className="text-sm font-mono text-neon uppercase tracking-widest">
              Skills
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-3 max-w-xl text-slate-400 leading-relaxed">
            The tools and technologies I work with to build intelligent,
            production-ready software.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className={`group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/40 p-6 card-hover ${skill.span}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10 border border-neon/20">
                    <Icon className="h-5 w-5 text-neon" />
                  </div>
                  <span className="font-mono text-xs text-neon">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon-dark to-neon-light transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.title} proficiency: ${skill.level}%`}
                  />
                </div>

                {/* Subtle corner accent */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
