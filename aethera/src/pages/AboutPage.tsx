import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const VALUES = [
  {
    title: 'Craft',
    desc: "We care about the details — spacing, motion, hierarchy. The things you feel even when you can't name them.",
  },
  {
    title: 'Clarity',
    desc: "No jargon. No mystery. You'll always know where your project stands and what comes next.",
  },
  {
    title: 'Care',
    desc: 'We treat your project like our own. Your success is what makes this work meaningful.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — Aethera'
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
              About
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
              We Build Websites
              <br />
              <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>That Last.</em>
            </h1>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Aethera is a small, independent web studio. We don't do cookie-cutter. Every site we
              ship is thought through, designed with intention, and built to represent you well —
              for years, not months.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20 md:mb-28">
            <span
              className="text-xs uppercase tracking-widest mb-10 block"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              What We Stand For
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: '1px solid #E5E5E5' }}>
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="p-8 md:p-10"
                  style={{ borderRight: '1px solid #E5E5E5' }}
                >
                  <h2
                    className="text-3xl font-normal mb-4"
                    style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
                  >
                    {v.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Origin story */}
          <div className="mb-20 md:mb-28 max-w-2xl">
            <span
              className="text-xs uppercase tracking-widest mb-10 block"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Our Story
            </span>
            <h2
              className="text-3xl md:text-4xl font-normal mb-8"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#000000', lineHeight: 1.1 }}
            >
              How Aethera Started
            </h2>
            <div className="flex flex-col gap-5">
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
              >
                Aethera started as a side project with a simple belief: small businesses and
                individuals deserve websites that look and feel as good as the big players. We were
                tired of seeing great ideas buried under generic templates.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
              >
                Today we work with founders, creators, and families to build digital spaces that
                feel genuinely theirs. Every project is a collaboration — you bring the vision, we
                bring the craft.
              </p>
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
              Want to work with us?
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
              Start a conversation →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
