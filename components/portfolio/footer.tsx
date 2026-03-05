import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-2 border-pastel-pink py-8 bg-blush/50">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
          <span>Designed & Built with</span>
          <Heart className="h-4 w-4 text-rose fill-rose" />
          <span>by Oaishi Saha</span>
        </div>
        <p className="text-xs text-muted-foreground/70">
          {"\u00A9 2026 All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
