import { Users, Calendar, ExternalLink, Briefcase } from "lucide-react"

const experiences = [
  {
    role: "AI Project Team Lead",
    org: "University AI Research Lab",
    period: "2024 - Present",
    description:
      "Leading a 10-person cross-functional team developing novel AI/ML solutions. Coordinating research sprints, code reviews, and model deployment pipelines. Spearheaded a sentiment analysis project achieving 94% accuracy on benchmark datasets.",
    highlights: [
      "Led team of 10 engineers and researchers",
      "Deployed 3 ML models to production",
      "Published research on NLP techniques",
    ],
    tags: ["Python", "PyTorch", "Transformers", "Docker"],
  },
  {
    role: "Software Engineering Intern",
    org: "TechCorp Inc.",
    period: "Summer 2024",
    description:
      "Built internal tools and data pipelines for the machine learning infrastructure team. Optimized ETL processes resulting in 40% faster data ingestion. Contributed to the open-source ML monitoring framework.",
    highlights: [
      "Optimized data pipelines by 40%",
      "Contributed to open-source tooling",
      "Automated CI/CD workflows",
    ],
    tags: ["Java", "Python", "AWS", "PostgreSQL"],
  },
  {
    role: "Teaching Assistant",
    org: "CS Department",
    period: "2023 - 2024",
    description:
      "Assisted in teaching Introduction to Machine Learning and Data Structures courses. Held weekly office hours, graded assignments, and developed supplementary learning materials for 200+ students.",
    highlights: [
      "Mentored 200+ students",
      "Created automated grading scripts",
      "Designed practice problem sets",
    ],
    tags: ["Java", "Python", "Scikit-learn"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-5 w-5 text-neon" />
            <span className="text-sm font-mono text-neon uppercase tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve Worked
          </h2>
          <p className="mt-3 max-w-xl text-slate-400 leading-relaxed">
            From research labs to production systems, here&apos;s my journey building
            impactful software.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-slate-700 hidden md:block md:left-8"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-neon bg-slate-950 md:flex"
                  aria-hidden="true"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-neon" />
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6 card-hover">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-neon-light flex items-center gap-1.5">
                        {exp.org}
                        <ExternalLink className="h-3 w-3" />
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 sm:mt-0">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neon/10 px-2.5 py-1 text-xs font-medium text-neon-light border border-neon/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
