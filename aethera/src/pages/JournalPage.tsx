import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const ARTICLES = [
  {
    date: 'March 2026',
    category: 'Design',
    title: 'Why Your Website Is Losing You Clients',
    excerpt:
      "First impressions happen in 0.05 seconds. Most websites waste them. Here's what we fix first when we audit a site.",
  },
  {
    date: 'February 2026',
    category: 'Process',
    title: 'How We Run a Website Sprint in 14 Days',
    excerpt:
      'From discovery call to live URL in two weeks. We break down our full process so you know exactly what to expect.',
  },
  {
    date: 'January 2026',
    category: 'Craft',
    title: 'The Fonts That Make a Site Feel Premium',
    excerpt:
      'Typography is 95% of web design. The right font pairing can make a Rp 2 juta site look like it cost ten times more.',
  },
  {
    date: 'December 2025',
    category: 'Thoughts',
    title: "Why We Don't Use Templates",
    excerpt:
      "Templates are fast. They're also why most websites look the same. We explain our no-template policy and what it means for you.",
  },
]

export default function JournalPage() {
  useEffect(() => {
    document.title = 'Journal — Aethera'
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
              Journal
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
              Thoughts &
              <br />
              <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>Ideas.</em>
            </h1>
            <p
              className="text-base max-w-md leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Notes on design, craft, and building things for the web.
            </p>
          </div>

          {/* Article list */}
          <div className="flex flex-col" style={{ borderTop: '1px solid #E5E5E5' }}>
            {ARTICLES.map((article) => (
              <div
                key={article.title}
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-10 cursor-default group"
                style={{ borderBottom: '1px solid #E5E5E5' }}
              >
                {/* Meta */}
                <div className="flex md:flex-col gap-3 md:gap-2 shrink-0 md:w-36">
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {article.date}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#6F6F6F',
                      borderColor: '#E5E5E5',
                    }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2
                    className="text-2xl md:text-3xl font-normal mb-3 transition-colors"
                    style={{ fontFamily: '"Instrument Serif", serif', color: '#000000', lineHeight: 1.1 }}
                  >
                    {article.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                {/* Read indicator */}
                <div
                  className="shrink-0 text-sm md:pt-1"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                >
                  Read →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
