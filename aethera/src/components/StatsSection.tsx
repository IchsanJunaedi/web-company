import { useEffect, useRef, useState } from 'react'
import GrainOverlay from './GrainOverlay'

const STATS = [
  { value: 50,  suffix: '+',    label: 'Projects Delivered',       decimals: 0 },
  { value: 100, suffix: '%',    label: 'On-Time Delivery',          decimals: 0 },
  { value: 14,  suffix: ' hari',label: 'Rata-rata Turnaround',      decimals: 0 },
  { value: 4.9, suffix: '/5',   label: 'Rating Kepuasan Klien',     decimals: 1 },
]

function StatItem({
  value, suffix, label, decimals, animate,
}: {
  value: number; suffix: string; label: string; decimals: number; animate: boolean
}) {
  const [display, setDisplay] = useState(0)
  const rafRef    = useRef<number>(0)
  const startRef  = useRef<number | null>(null)
  const DURATION  = 1800

  useEffect(() => {
    if (!animate) return
    startRef.current = null
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed  = now - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setDisplay(parseFloat((eased * value).toFixed(decimals)))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animate, value, decimals])

  return (
    <div
      className="flex flex-col items-center text-center py-12 px-6 relative"
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {/* Inner top-edge shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
      }} />

      <span
        className="text-6xl md:text-7xl font-normal leading-none tabular-nums"
        style={{
          fontFamily: '"Instrument Serif", serif',
          color: '#FFFFFF',
          textShadow: '0 0 60px rgba(255,255,255,0.12)',
        }}
      >
        {decimals > 0 ? display.toFixed(decimals) : Math.floor(display)}{suffix}
      </span>
      <span
        className="mt-4 text-xs uppercase tracking-widest"
        style={{ fontFamily: 'Inter, sans-serif', color: '#555555' }}
      >
        {label}
      </span>
    </div>
  )
}

/* Ambient glow blob */
function Blob({ style }: { style: React.CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-4"
      style={{ backgroundColor: '#050505' }}
    >
      <GrainOverlay />

      {/* Ambient blobs */}
      <Blob style={{
        width: '500px', height: '500px',
        top: '-200px', left: '-100px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
        animation: 'blob-drift 12s ease-in-out infinite',
      }} />
      <Blob style={{
        width: '400px', height: '400px',
        bottom: '-150px', right: '-80px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
        animation: 'blob-drift 16s ease-in-out infinite reverse',
      }} />
      <Blob style={{
        width: '300px', height: '300px',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        animation: 'blob-pulse 8s ease-in-out infinite',
      }} />

      {/* Stats grid */}
      <div
        className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px"
        style={{ zIndex: 3 }}
      >
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} animate={animate} />
        ))}
      </div>
    </section>
  )
}
