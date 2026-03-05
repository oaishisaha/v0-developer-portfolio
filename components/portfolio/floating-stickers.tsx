"use client"

import { useEffect, useState } from "react"

const stickerTypes = [
  // Hiking boot
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose/30">
      <path d="M3 17h4l2-4h4l1 2h4l2-2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-0z" />
      <path d="M9 13V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  // Book
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-pastel-pink">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  // Star
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-soft-gold/50">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  // Sparkle
  (key: number, style: React.CSSProperties) => (
    <svg key={key} style={style} viewBox="0 0 24 24" fill="currentColor" className="text-rose/25">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
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
    const items: Sticker[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      type: i % stickerTypes.length,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 20,
      dx: (Math.random() - 0.5) * 200,
      dy: -(200 + Math.random() * 400),
      rot: Math.random() * 90 - 45,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 15,
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
        return stickerTypes[s.type](s.id, style)
      })}
    </div>
  )
}
