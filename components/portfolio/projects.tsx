import {
  ExternalLink,
  Github,
  FolderOpen,
  BookOpen,
  Brain,
  Gamepad2,
} from "lucide-react"

const projects = [
  {
    title: "Interactive Story Engine",
    description:
      "A dynamic narrative engine powered by NLP that generates branching storylines based on player choices. Built with Python and React, featuring real-time text generation and emotional tone analysis.",
    tags: ["Python", "React", "NLP", "GPT-4"],
    icon: BookOpen,
    github: "https://github.com",
    demo: "https://demo.example.com",
    highlight: true,
  },
  {
    title: "AI/ML Lab",
    description:
      "A comprehensive collection of machine learning experiments including neural network architectures, reinforcement learning agents, and computer vision models. Documented with Jupyter notebooks and benchmarks.",
    tags: ["PyTorch", "TensorFlow", "Jupyter", "CUDA"],
    icon: Brain,
    github: "https://github.com",
    demo: null,
    highlight: true,
  },
  {
    title: "Procedural World Generator",
    description:
      "A Java-based procedural terrain generator using Perlin noise and cellular automata. Features biome classification, river systems, and real-time 3D rendering with OpenGL.",
    tags: ["Java", "OpenGL", "Algorithms"],
    icon: Gamepad2,
    github: "https://github.com",
    demo: "https://demo.example.com",
    highlight: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="h-5 w-5 text-neon" />
            <span className="text-sm font-mono text-neon uppercase tracking-widest">
              Projects
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 max-w-xl text-slate-400 leading-relaxed">
            A curated selection of personal projects and experiments in AI,
            interactive media, and systems programming.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="group relative flex flex-col rounded-xl border border-slate-700 bg-slate-800/40 p-6 card-hover"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10 border border-neon/20">
                    <Icon className="h-5 w-5 text-neon" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-neon transition-colors"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <Github className="h-4.5 w-4.5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-neon transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4.5 w-4.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
