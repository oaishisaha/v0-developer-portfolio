"use client"

import { useEffect } from "react"
import { useClickSound } from "@/hooks/use-click-sound"

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const playPop = useClickSound()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, [role='button'], .bouncy, .card-cute, .jiggle")
      if (interactive) {
        playPop()
      }
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [playPop])

  return <>{children}</>
}
