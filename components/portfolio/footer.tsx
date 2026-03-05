import { Heart, Sparkles, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-2 border-pastel-pink py-10 bg-blush/50 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-20 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1DC 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-5 relative z-10">
        {/* Social icons row */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/oaishisaha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-pink/40 border-2 border-pastel-pink text-rose hover:bg-rose hover:text-primary-foreground transition-all bouncy"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/oaishisaha06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-pink/40 border-2 border-pastel-pink text-rose hover:bg-rose hover:text-primary-foreground transition-all bouncy"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:oaishisaha47@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-pink/40 border-2 border-pastel-pink text-rose hover:bg-rose hover:text-primary-foreground transition-all bouncy"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
          <Sparkles className="h-4 w-4 text-soft-gold" />
          <span>Designed & Built with</span>
          <Heart className="h-4 w-4 text-rose fill-rose animate-pulse" />
          <span>by</span>
          <span className="font-extrabold text-rose-deep">Oaishi Saha</span>
          <Sparkles className="h-4 w-4 text-soft-gold" />
        </div>
        <p className="text-xs font-semibold text-muted-foreground/60">
          {"\u00A9 2026 All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
