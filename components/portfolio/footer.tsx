import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Terminal className="h-4 w-4 text-neon" />
          <span className="font-mono">
            {"Designed & Built by Alex Chen"}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          {"\u00A9 2026 All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
