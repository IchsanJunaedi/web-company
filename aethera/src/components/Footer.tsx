import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import GrainOverlay from './GrainOverlay'

export default function Footer() {
  return (
    <footer
      className="px-6 pt-16 pb-10 relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: '#050505',
      }}
    >
      <GrainOverlay />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16">
          {/* Left: logo + tagline */}
          <div>
            <Link
              to="/"
              className="text-2xl tracking-tight"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
            >
              Aethera<sup className="text-sm">®</sup>
            </Link>
            <p
              className="mt-3 text-sm"
              style={{ fontFamily: 'Inter, sans-serif', color: '#444444' }}
            >
              Membangun yang abadi.
            </p>
          </div>

          {/* Right: links + social */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Nav links */}
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Beranda', to: '/' },
                { label: 'Studio', to: '/studio' },
                { label: 'Tentang', to: '/about' },
                { label: 'Jurnal', to: '/journal' },
                { label: 'Hubungi Kami', to: '/reach-us' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm transition-colors hover:text-white"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#444444' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social */}
            <div className="flex flex-row sm:flex-col gap-4 items-start">
              <a
                href="#"
                aria-label="Aethera on Instagram"
                className="transition-opacity hover:opacity-100"
                style={{ color: '#444444' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Aethera on X"
                className="transition-opacity hover:opacity-100"
                style={{ color: '#444444' }}
              >
                <X size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <p
            className="text-xs"
            style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}
          >
            © 2026 Aethera. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
