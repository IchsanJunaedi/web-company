import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const PROJECTS: Record<
  string,
  {
    title: string
    category: string
    year: string
    image: string
    tagline: string
    challenge: string
    solution: string
    result: string
    stats: { label: string; value: string }[]
  }
> = {
  'ardent-studio': {
    title: 'Ardent Studio',
    category: 'Company Profile',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    tagline: 'A creative agency that needed a digital presence as bold as their work.',
    challenge:
      'Ardent Studio adalah creative agency berbasis di Jakarta dengan portofolio klien besar, tapi website lama mereka terlihat generik dan tidak mencerminkan kualitas kerjanya. Mereka butuh presens digital yang bisa berbicara sendiri.',
    solution:
      'Kami membangun company profile dengan desain editorial, tipografi besar, dan animasi subtle yang mempertegas identitas kreatif mereka. Fokus pada storytelling visual — bukan sekadar listing layanan.',
    result:
      'Website live dalam 12 hari. Dalam 30 hari pertama, inquiry klien baru meningkat 3x dibanding periode sebelumnya.',
    stats: [
      { label: 'Waktu Pengerjaan', value: '12 hari' },
      { label: 'Peningkatan Inquiry', value: '3×' },
      { label: 'Putaran Revisi', value: '1×' },
    ],
  },
  'lunas-25th': {
    title: "Luna's 25th",
    category: 'Birthday Website',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80',
    tagline: 'A birthday surprise turned into a digital experience she will never forget.',
    challenge:
      'Klien ingin memberikan kejutan ulang tahun ke-25 untuk pasangannya. Bukan hadiah biasa — dia ingin sesuatu yang personal, berkesan, dan bisa dibagikan ke seluruh keluarga dan teman.',
    solution:
      'Kami membuat birthday website dengan animasi confetti, pesan personal dari orang-orang tersayang, galeri foto, dan playlist Spotify embed. Semua dengan estetika warm dan intim.',
    result:
      'Diterima dengan air mata bahagia. Link dibagikan ke 200+ orang di hari H. Sekarang jadi kenangan digital permanen.',
    stats: [
      { label: 'Waktu Pengerjaan', value: '5 hari' },
      { label: 'Tamu Berkunjung', value: '200+' },
      { label: 'Rating Klien', value: '5/5' },
    ],
  },
  'bloom-launch': {
    title: 'Bloom Launch',
    category: 'Landing Page',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
    tagline: 'One page. One goal. A product launch that actually converted.',
    challenge:
      'Bloom adalah brand skincare lokal yang akan meluncurkan produk baru. Mereka punya budget terbatas tapi butuh landing page yang bisa mengkonversi traffic dari iklan Instagram menjadi pre-order.',
    solution:
      'Kami fokus pada satu halaman yang bersih dan persuasif. Hero yang kuat, social proof, benefit yang jelas, dan CTA yang agresif. Tidak ada distraksi — semuanya mengarah ke satu tombol.',
    result:
      'Conversion rate 8.3% dari traffic iklan — jauh di atas rata-rata industri 2–3%. Pre-order habis dalam 4 hari setelah launch.',
    stats: [
      { label: 'Conversion Rate', value: '8.3%' },
      { label: 'Pre-order Habis', value: '4 hari' },
      { label: 'Waktu Pengerjaan', value: '8 hari' },
    ],
  },
  'rafi-dira': {
    title: 'Rafi & Dira',
    category: 'Wedding Invitation',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    tagline: 'A love story told through a digital invitation that guests actually saved.',
    challenge:
      'Rafi dan Dira ingin undangan pernikahan yang berbeda — bukan PDF atau kartu fisik biasa. Mereka ingin sesuatu yang bisa memuat cerita mereka, galeri foto, dan RSVP digital untuk 300+ tamu.',
    solution:
      'Kami membuat undangan digital dengan animasi halus, cerita perjalanan cinta mereka, galeri foto, countdown hari H, peta venue embed, dan form RSVP yang tersambung ke Google Sheets.',
    result:
      'Response rate RSVP 94% — rekor terbaik di circle mereka. Banyak tamu minta dibuatkan hal serupa untuk event mereka.',
    stats: [
      { label: 'Response Rate RSVP', value: '94%' },
      { label: 'Total Tamu', value: '312' },
      { label: 'Waktu Pengerjaan', value: '6 hari' },
    ],
  },
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? PROJECTS[slug] : undefined

  useEffect(() => {
    if (project) document.title = `${project.title} — Aethera`
    return () => {
      document.title = 'Aethera — Web Studio Indonesia'
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="flex-1">
        {/* Hero image */}
        <div
          className="w-full overflow-hidden"
          style={{ height: 'min(70vh, 600px)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-60"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>

            {/* Title block */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <span
                  className="text-xs uppercase tracking-widest block mb-4"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                >
                  {project.category} · {project.year}
                </span>
                <h1
                  className="text-5xl md:text-7xl font-normal"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    color: '#000000',
                    lineHeight: 0.95,
                    letterSpacing: '-2px',
                  }}
                >
                  {project.title}
                </h1>
              </div>
              <p
                className="text-base max-w-sm leading-relaxed md:text-right"
                style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
              >
                {project.tagline}
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 mb-20"
              style={{ borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5' }}
            >
              {project.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="py-8 px-4 md:px-8 text-center"
                  style={{
                    borderRight:
                      i < project.stats.length - 1 ? '1px solid #E5E5E5' : undefined,
                  }}
                >
                  <p
                    className="text-3xl md:text-4xl font-normal mb-2"
                    style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Content: Challenge / Solution / Result */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-20">
              {[
                { heading: 'Challenge', body: project.challenge },
                { heading: 'Solution', body: project.solution },
                { heading: 'Result', body: project.result },
              ].map(({ heading, body }) => (
                <div key={heading}>
                  <h2
                    className="text-xs uppercase tracking-widest mb-4"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
                  >
                    {heading}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#000000' }}
                  >
                    {body}
                  </p>
                </div>
              ))}
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
                Mau hasil seperti ini?
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
                Ceritakan projekmu →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
