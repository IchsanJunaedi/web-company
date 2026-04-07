import GrainOverlay from './GrainOverlay'

const testimonials = [
  {
    quote:
      'Bekerja dengan Aethera terasa bukan seperti menyewa developer, melainkan menemukan mitra kreatif. Hasilnya melampaui ekspektasi kami.',
    name: 'Sarah L.',
    title: 'Founder Ardent Co.',
    projectType: 'Company Profile',
    initials: 'SL',
  },
  {
    quote:
      'Mereka mengubah kejutan ulang tahun saya menjadi sesuatu yang sinematik. Pasangan saya sampai menangis bahagia.',
    name: 'Fariz M.',
    title: 'Klien Personal',
    projectType: 'Website Ulang Tahun',
    initials: 'FM',
  },
  {
    quote:
      'Cepat, presisi, dan hasilnya benar-benar indah. Landing page kami meningkatkan konversi tiga kali lipat.',
    name: 'Nadia R.',
    title: 'Direktur Marketing',
    projectType: 'Landing Page',
    initials: 'NR',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#060606' }}
    >
      <GrainOverlay />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        {/* Heading + urgency */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
          >
            Kata-kata mereka.
          </h2>
          {/* Urgency pill */}
          <div
            className="flex items-center gap-2 px-4 py-2 self-start md:self-auto"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse shrink-0"
              style={{ backgroundColor: '#4ade80' }}
            />
            <p
              className="text-xs"
              style={{ fontFamily: 'Inter, sans-serif', color: '#888888' }}
            >
              Kami terima{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}>3 project baru</span> /bulan —{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 500 }}>2 slot tersisa</span> bulan ini
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-x-visible">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col p-7 shrink-0 w-80 md:w-auto"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Top-edge highlight */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              }} />

              <Stars />
              <blockquote
                className="text-base leading-relaxed mb-6 flex-1"
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontStyle: 'italic',
                  color: '#FFFFFF',
                }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#FFFFFF' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#555555' }}
                  >
                    {t.title} · {t.projectType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
