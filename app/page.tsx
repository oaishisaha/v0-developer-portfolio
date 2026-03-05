import { Navbar } from "@/components/portfolio/navbar"
import { FloatingStickers } from "@/components/portfolio/floating-stickers"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { Heart } from "lucide-react"

function CuteDivider() {
  return (
    <div className="mx-auto max-w-md px-6 flex items-center gap-4">
      <div className="flex-1 h-0.5 rounded-full bg-gradient-to-r from-transparent to-pastel-pink" />
      <Heart className="h-4 w-4 text-rose/40 fill-rose/20 shrink-0" />
      <div className="flex-1 h-0.5 rounded-full bg-gradient-to-l from-transparent to-pastel-pink" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cream text-foreground overflow-x-hidden">
      <FloatingStickers />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <CuteDivider />
        <About />
        <CuteDivider />
        <Experience />
        <CuteDivider />
        <Skills />
        <CuteDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
