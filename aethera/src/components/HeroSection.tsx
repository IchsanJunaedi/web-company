import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const NAV_LINKS = [
  { label: 'Beranda', to: '/' },
  { label: 'Studio', to: '/studio' },
  { label: 'Tentang', to: '/about' },
  { label: 'Jurnal', to: '/journal' },
  { label: 'Hubungi Kami', to: '/reach-us' },
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE_DURATION = 0.5

    const tick = () => {
      if (!video.duration) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      const t = video.currentTime
      const d = video.duration

      if (t < FADE_DURATION) {
        video.style.opacity = String(t / FADE_DURATION)
      } else if (t > d - FADE_DURATION) {
        video.style.opacity = String((d - t) / FADE_DURATION)
      } else {
        video.style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    video.style.opacity = '0'
    video.play().catch(() => {})
    rafRef.current = requestAnimationFrame(tick)
    video.addEventListener('ended', handleEnded)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: '#000000' }}>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 transition-opacity hover:opacity-60"
            style={{ color: '#FFFFFF' }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col items-start justify-center h-full px-10">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-baseline gap-5 py-5 animate-fade-rise"
                style={{
                  borderBottom: '1px solid #222222',
                  animationDelay: `${i * 0.08}s`,
                  animationFillMode: 'both',
                }}
              >
                <span
                  className="text-xs w-6 shrink-0"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                >
                  0{i + 1}
                </span>
                <span
                  className="text-5xl uppercase tracking-widest"
                  style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Video background */}
      <div className="absolute z-0" style={{ top: '300px', inset: 'auto 0 0 0', position: 'absolute' }}>
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          loop={false}
          className="w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
        {/* Gradient overlay on video */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-3xl tracking-tight" style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}>
            Aethera<sup className="text-base">®</sup>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif', color: '#000000' }}>
              Beranda
            </Link>
            <Link to="/studio" className="text-sm transition-colors hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}>
              Studio
            </Link>
            <Link to="/about" className="text-sm transition-colors hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}>
              Tentang
            </Link>
            <Link to="/journal" className="text-sm transition-colors hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}>
              Jurnal
            </Link>
            <Link to="/reach-us" className="text-sm transition-colors hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}>
              Hubungi Kami
            </Link>
          </div>

          {/* Desktop CTA + Mobile burger */}
          <div className="flex items-center gap-4">
            <Link
              to="/reach-us"
              className="hidden md:inline-flex rounded-full px-6 py-2.5 text-sm transition-transform hover:scale-[1.03]"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#000000',
                color: '#FFFFFF',
              }}
            >
              Mulai Perjalanan
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden transition-opacity hover:opacity-60"
              style={{ color: '#000000' }}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl animate-fade-rise"
          style={{
            fontFamily: '"Instrument Serif", serif',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000000',
          }}
        >
          Beyond{' '}
          <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>silence,</em>{' '}
          we build{' '}
          <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>the eternal.</em>
        </h1>

        <p
          className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
          style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
        >
          Membangun platform untuk pikiran-pikiran brilian, para pembuat yang berani, dan jiwa-jiwa
          penuh makna. Di tengah kebisingan, kami ciptakan ruang digital untuk kerja mendalam dan aliran yang murni.
        </p>

        <Link
          to="/reach-us"
          className="rounded-full px-14 py-5 text-base mt-12 transition-transform hover:scale-[1.03] animate-fade-rise-delay-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            backgroundColor: '#000000',
            color: '#FFFFFF',
          }}
        >
          Mulai Perjalanan
        </Link>
      </div>
    </div>
  )
}
