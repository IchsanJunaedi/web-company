import { useEffect, useRef, useState } from 'react'
import { Building2, Cake, Megaphone, User, Heart, Check } from 'lucide-react'
import GrainOverlay from './GrainOverlay'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const ICON_COLOR = '#FFFFFF'

const services: Service[] = [
  {
    icon: <Building2 size={22} color={ICON_COLOR} />,
    title: 'Website Company Profile',
    description:
      'Wajah digital untuk brand Anda. Bersih, profesional, dan dirancang untuk mengubah pengunjung menjadi klien.',
    features: [
      'Layout multi-halaman responsif',
      'Seksi Tentang, Layanan, Tim, dan Kontak',
      'Scroll halus & animasi',
      'Formulir kontak (EmailJS atau Formspree)',
      'Integrasi Google Maps',
      'Struktur siap SEO',
    ],
  },
  {
    icon: <Cake size={22} color={ICON_COLOR} />,
    title: 'Website Ucapan Ulang Tahun',
    description:
      'Kejutan tak terlupakan, dibuat khusus untuk orang istimewa. Interaktif, menyentuh, dan abadi.',
    features: [
      'Hero animasi sinematik dengan confetti',
      'Galeri slideshow foto/video',
      'Animasi pesan ketik kustom',
      'Musik latar otomatis',
      'Buku tamu (localStorage)',
      'Tombol bagikan WhatsApp & Instagram',
      'Animasi tiup lilin interaktif',
    ],
  },
  {
    icon: <Megaphone size={22} color={ICON_COLOR} />,
    title: 'Landing Page / Halaman Promo',
    description: 'Satu halaman. Satu tujuan. Konversi maksimal.',
    features: [
      'Seksi hero + proposisi nilai',
      'Countdown timer untuk promo',
      'Slider testimoni',
      'Accordion FAQ',
      'Tombol CTA WhatsApp mengambang',
      'Responsif mobile-first',
    ],
  },
  {
    icon: <User size={22} color={ICON_COLOR} />,
    title: 'Portfolio / Personal Branding',
    description:
      'Karya Anda, tersaji dengan indah. Biarkan portfolio berbicara lebih keras dari CV.',
    features: [
      'Intro animasi dengan efek mengetik',
      'Tampilan proyek dengan filter',
      'Timeline keahlian & pengalaman',
      'Tombol unduh CV',
      'Toggle mode gelap/terang',
      'Formulir kontak',
    ],
  },
  {
    icon: <Heart size={22} color={ICON_COLOR} />,
    title: 'Undangan Acara / Pernikahan',
    description:
      'Undangan digital yang benar-benar disimpan tamu. Elegan, personal, dan mudah dibagikan.',
    features: [
      'Countdown menuju tanggal acara',
      'Formulir RSVP (Google Sheets atau Formspree)',
      'Embed peta lokasi',
      'Galeri foto',
      'Opening animasi romantis',
      'Mudah dibagikan via WhatsApp',
    ],
  },
]

const GLASS_BG     = 'rgba(255,255,255,0.04)'
const GLASS_BORDER = 'rgba(255,255,255,0.08)'
const GLASS_HOVER  = 'rgba(255,255,255,0.09)'
const GLASS_BORDER_HOVER = 'rgba(255,255,255,0.16)'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative flex flex-col p-8 cursor-default"
      style={{
        backgroundColor: hovered ? GLASS_HOVER : GLASS_BG,
        border: `1px solid ${hovered ? GLASS_BORDER_HOVER : GLASS_BORDER}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-5px)' : 'translateY(0)'
          : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background-color 0.25s, border-color 0.25s`,
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : '0 0 0 rgba(0,0,0,0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top-edge highlight line on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />

      <div className="mb-5">{service.icon}</div>
      <h3
        className="text-xl mb-3 font-normal"
        style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}
      >
        {service.description}
      </p>
      <ul className="space-y-2 mt-auto">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm"
            style={{ fontFamily: 'Inter, sans-serif', color: '#666666' }}
          >
            <Check size={13} className="mt-0.5 shrink-0" color="rgba(255,255,255,0.5)" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >
      <GrainOverlay />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal mb-4"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
          >
            Apa yang kami bangun.
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: 'Inter, sans-serif', color: '#555555' }}
          >
            Setiap proyek adalah semesta tersendiri. Kami bangun semuanya dari awal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
