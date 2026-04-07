import { useEffect, useRef, useState } from 'react'
import GrainOverlay from './GrainOverlay'

const steps = [
  {
    number: '01',
    title: 'Sesi Diskusi Awal',
    description: 'Kami mengenal brand, tujuan, dan visi Anda.',
  },
  {
    number: '02',
    title: 'Perencanaan Fitur',
    subtitle: 'Sprint 1',
    description: 'Kami menentukan dengan tepat halaman dan fitur apa yang dibutuhkan situs Anda.',
  },
  {
    number: '03',
    title: 'Desain & Pembangunan',
    subtitle: 'Sprint 2',
    description: 'Kami mengembangkan situs Anda dengan animasi, responsivitas, dan sentuhan akhir.',
  },
  {
    number: '04',
    title: 'Pengiriman & Serah Terima',
    subtitle: 'Sprint 3',
    description: 'Kami menguji di berbagai perangkat dan menyerahkan situs live beserta file sumber.',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative flex-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Large ghost number */}
      <div
        className="absolute -top-4 left-0 text-8xl font-normal select-none pointer-events-none"
        style={{
          fontFamily: '"Instrument Serif", serif',
          color: 'rgba(255,255,255,0.04)',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        {step.number}
      </div>

      {/* Content */}
      <div className="relative pt-10" style={{ zIndex: 1 }}>
        <div className="mb-3">
          <span
            className="text-lg font-normal"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
          >
            {step.title}
          </span>
          {step.subtitle && (
            <span
              className="ml-2 text-sm"
              style={{ fontFamily: 'Inter, sans-serif', color: '#444444' }}
            >
              — {step.subtitle}
            </span>
          )}
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: '#666666' }}
        >
          {step.description}
        </p>
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >
      <GrainOverlay />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="mb-20">
          <h2
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
          >
            Cara kami bekerja.
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          <div
            className="absolute left-0 right-0 h-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.07)', top: '28px', zIndex: 0 }}
          />
          {steps.map((step, i) => (
            <div key={step.number} className="flex-1 relative px-6 first:pl-0 last:pr-0">
              <StepCard step={step} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col gap-12 md:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative pl-4"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}
            >
              <StepCard step={step} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
