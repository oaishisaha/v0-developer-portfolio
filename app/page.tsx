import { Navbar } from "@/components/portfolio/navbar"
import { FloatingStickers } from "@/components/portfolio/floating-stickers"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cream text-foreground overflow-x-hidden">
      <FloatingStickers />
      <Navbar />
      <main className="relative z-10">
        <Hero />

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-pastel-pink to-transparent" />
        </div>

        <About />

        <div className="mx-auto max-w-4xl px-6">
          <div className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-pastel-pink to-transparent" />
        </div>

        <Experience />

        <div className="mx-auto max-w-4xl px-6">
          <div className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-pastel-pink to-transparent" />
        </div>

        <Skills />

        <div className="mx-auto max-w-4xl px-6">
          <div className="h-0.5 rounded-full bg-gradient-to-r from-transparent via-pastel-pink to-transparent" />
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
