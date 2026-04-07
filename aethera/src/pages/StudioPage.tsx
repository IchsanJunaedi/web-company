import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const SERVICES = [
  {
    name: 'Company Profile',
    price: 'Rp 3–6 juta',
    timeline: '7–14 hari',
    description:
      'Represent your business with authority. Clean, credible, built to convert visitors into clients.',
  },
  {
    name: 'Birthday Website',
    price: 'Rp 1.5–3 juta',
    timeline: '3–5 hari',
    description:
      "A moment worth a URL. Personal, animated, shareable — the gift they'll actually keep.",
  },
  {
    name: 'Landing Page',
    price: 'Rp 2–5 juta',
    timeline: '5–10 hari',
    description: 'One goal. One page. Maximum impact. Designed to convert.',
  },
  {
    name: 'Portfolio',
    price: 'Rp 2.5–5 juta',
    timeline: '7–14 hari',
    description:
      'Show your work the way it deserves. A portfolio that feels like an experience.',
  },
  {
    name: 'Wedding Invitation',
    price: 'Rp 1.5–3 juta',
    timeline: '3–7 hari',
    description:
      'Because paper is temporary. Your digital invitation, forever accessible.',
  },
]

const HOW = [
  { step: '01', label: 'Discovery Call', desc: 'We understand your vision, goals, and audience.' },
  { step: '02', label: 'Design & Plan', desc: 'We map out the structure and visual direction together.' },
  { step: '03', label: 'Build', desc: 'We craft every detail — no templates, no shortcuts.' },
]

export default function StudioPage() {
  useEffect(() => {
    document.title = 'Studio — Aethera'
    return () => {
      document.title = 'Aethera — Web Studio Indonesia'
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="flex-1 px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-16 transition-opacity hover:opacity-60"
            style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          {/* Hero */}
          <div className="flex flex-col items-start mb-20 md:mb-28">
            <span
              className="text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Our Services
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8"
              style={{
                fontFamily: '"Instrument Serif", serif',
                color: '#000000',
                lineHeight: 0.95,
                letterSpacing: '-2px',
              }}
            >
              What We
              <br />
              <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>Build.</em>
            </h1>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Every project starts with a conversation. We turn your vision into a living,
              breathing website — crafted by hand, never templated.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-20 md:mb-28" style={{ border: '1px solid #E5E5E5' }}>
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex flex-col gap-4 p-8 md:p-10"
                style={{ borderBottom: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2
                    className="text-xl font-normal"
                    style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
                  >
                    {s.name}
                  </h2>
                  <span
                    className="text-xs shrink-0 mt-1"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {s.timeline}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                >
                  {s.description}
                </p>
                <span
                  className="text-sm font-medium mt-auto"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#000000' }}
                >
                  {s.price}
                </span>
              </div>
            ))}
          </div>

          {/* How we work */}
          <div className="mb-20 md:mb-28">
            <span
              className="text-xs uppercase tracking-widest mb-10 block"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              How It Works
            </span>
            <div className="flex flex-col md:flex-row gap-0">
              {HOW.map((h, i) => (
                <div
                  key={h.step}
                  className="flex-1 py-8 md:py-0 md:pr-10"
                  style={{
                    borderTop: '1px solid #E5E5E5',
                    borderLeft: i > 0 ? '1px solid #E5E5E5' : undefined,
                    paddingLeft: i > 0 ? '2.5rem' : undefined,
                  }}
                >
                  <span
                    className="text-xs block mb-4"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {h.step}
                  </span>
                  <h3
                    className="text-2xl font-normal mb-3"
                    style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
                  >
                    {h.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 px-10"
            style={{ backgroundColor: '#000000' }}
          >
            <p
              className="text-2xl md:text-3xl font-normal"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
            >
              Ready to start?
            </p>
            <Link
              to="/reach-us"
              className="inline-flex items-center gap-2 text-sm rounded-full px-8 py-3 transition-transform hover:scale-[1.03]"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#FFFFFF',
                color: '#000000',
              }}
            >
              Let's talk →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
