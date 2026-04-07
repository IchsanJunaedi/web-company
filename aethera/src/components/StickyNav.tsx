import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Beranda', to: '/' },
  { label: 'Studio', to: '/studio' },
  { label: 'Tentang', to: '/about' },
  { label: 'Jurnal', to: '/journal' },
  { label: 'Hubungi Kami', to: '/reach-us' },
]

export default function StickyNav() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setVisible(true)
      return
    }
    const handleScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ backgroundColor: '#050505' }}
        >
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
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  animationDelay: `${i * 0.08}s`,
                  animationFillMode: 'both',
                }}
              >
                <span
                  className="text-xs w-6 shrink-0"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#444444' }}
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

      {/* Frosted glass sticky bar */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-transform duration-300"
        style={{
          backgroundColor: 'rgba(6,6,6,0.82)',
          backdropFilter: 'blur(22px) saturate(180%)',
          WebkitBackdropFilter: 'blur(22px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-xl tracking-tight"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
          >
            Aethera<sup className="text-xs">®</sup>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm transition-all duration-200 hover:text-white"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: location.pathname === link.to ? '#FFFFFF' : '#555555',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/reach-us"
              className="hidden md:inline-flex shimmer-btn rounded-full px-5 py-2 text-sm transition-opacity hover:opacity-90 border"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.18)',
                backgroundColor: 'rgba(255,255,255,0.06)',
              }}
            >
              Mulai Perjalanan
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden"
              style={{ color: '#FFFFFF' }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
