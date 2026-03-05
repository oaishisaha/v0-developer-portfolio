"use client"

import { useCallback, useRef } from "react"

export function useClickSound() {
  const audioCtxRef = useRef<AudioContext | null>(null)

  const playPop = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext()
      }
      const ctx = audioCtxRef.current
      const now = ctx.currentTime

      // Create a cute "pop" / bubble sound
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = "sine"
      osc.frequency.setValueAtTime(800, now)
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.04)
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.08)

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.12)
    } catch {
      // Silently fail if AudioContext is unavailable
    }
  }, [])

  return playPop
}
