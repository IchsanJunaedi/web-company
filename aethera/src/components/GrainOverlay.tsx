/**
 * Subtle animated film-grain texture overlay for dark sections.
 * Uses mix-blend-mode overlay so it blends without blocking interactions.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: '-50%',
        width: '200%',
        height: '200%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.038,
        mixBlendMode: 'overlay' as const,
        pointerEvents: 'none',
        zIndex: 2,
        animation: 'grain-shift 8s steps(10) infinite',
      }}
    />
  )
}
