"use client"

import { useEffect, useState } from "react"

const stickerRenderers = [
  // Heart
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-rose/40">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  // Star
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-soft-gold/60">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  // Sparkle (4-point)
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-rose/30">
      <path d="M12 1l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
    </svg>
  ),
  // Flower / Daisy
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-pastel-pink/70">
      <circle cx="12" cy="12" r="3" fill="#FF91A4" opacity="0.5" />
      <ellipse cx="12" cy="5" rx="2.5" ry="4" fill="currentColor" />
      <ellipse cx="12" cy="19" rx="2.5" ry="4" fill="currentColor" />
      <ellipse cx="5" cy="12" rx="4" ry="2.5" fill="currentColor" />
      <ellipse cx="19" cy="12" rx="4" ry="2.5" fill="currentColor" />
      <ellipse cx="7.1" cy="7.1" rx="2.5" ry="4" transform="rotate(45 7.1 7.1)" fill="currentColor" />
      <ellipse cx="16.9" cy="16.9" rx="2.5" ry="4" transform="rotate(45 16.9 16.9)" fill="currentColor" />
      <ellipse cx="16.9" cy="7.1" rx="2.5" ry="4" transform="rotate(-45 16.9 7.1)" fill="currentColor" />
      <ellipse cx="7.1" cy="16.9" rx="2.5" ry="4" transform="rotate(-45 7.1 16.9)" fill="currentColor" />
    </svg>
  ),
  // Book
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-deep/25">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  // Tiny bow
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-rose/35">
      <path d="M12 12C8 8 3 9 3 12s5 4 9 0z" />
      <path d="M12 12c4-4 9-3 9 0s-5 4-9 0z" />
      <circle cx="12" cy="12" r="1.5" fill="#FF91A4" />
    </svg>
  ),
]

interface Sticker {
  id: number
  type: number
  x: number
  y: number
  size: number
  dx: number
  dy: number
  rot: number
  duration: number
  delay: number
}

export function FloatingStickers() {
  const [stickers, setStickers] = useState<Sticker[]>([])

  useEffect(() => {
    const items: Sticker[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: i % stickerRenderers.length,
      x: Math.random() * 100,
      y: 60 + Math.random() * 60,
      size: 18 + Math.random() * 28,
      dx: (Math.random() - 0.5) * 300,
      dy: -(300 + Math.random() * 500),
      rot: Math.random() * 120 - 60,
      duration: 18 + Math.random() * 25,
      delay: Math.random() * 20,
    }))
    setStickers(items)
  }, [])

  if (stickers.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stickers.map((s) => {
        const style: React.CSSProperties = {
          position: "absolute",
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: s.size,
          height: s.size,
          // @ts-expect-error CSS custom properties
          "--dx": `${s.dx}px`,
          "--dy": `${s.dy}px`,
          "--rot": `${s.rot}deg`,
          animation: `float-drift ${s.duration}s ${s.delay}s linear infinite`,
          opacity: 0,
        }
        return stickerRenderers[s.type](s.id, style)
      })}
    </div>
  )
}
