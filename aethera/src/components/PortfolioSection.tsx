import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GrainOverlay from './GrainOverlay'

const projects = [
  {
    name: 'Ardent Studio',
    category: 'Company Profile',
    year: '2025',
    slug: 'ardent-studio',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    name: "Luna's 25th",
    category: 'Website Ulang Tahun',
    year: '2025',
    slug: 'lunas-25th',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  {
    name: 'Bloom Launch',
    category: 'Landing Page',
    year: '2025',
    slug: 'bloom-launch',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },
  {
    name: 'Rafi & Dira',
    category: 'Undangan Nikah',
    year: '2025',
    slug: 'rafi-dira',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref     = useRef<HTMLDivElement>(null)
  const [visible, setVisible]   = useState(false)
  const [hovered, setHovered]   = useState(false)

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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '16/9',
            backgroundColor: '#111111',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)', opacity: hovered ? 0.85 : 1, transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease' }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)', opacity: hovered ? 1 : 0 }}
          >
            <span
              className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm shimmer-btn"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#000000',
                backdropFilter: 'blur(8px)',
              }}
            >
              Lihat Proyek <ArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Project info */}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3
              className="text-lg font-normal transition-colors duration-200"
              style={{
                fontFamily: '"Instrument Serif", serif',
                color: hovered ? '#FFFFFF' : '#CCCCCC',
              }}
            >
              {project.name}
            </h3>
            <span
              className="text-xs mt-1 inline-block"
              style={{ fontFamily: 'Inter, sans-serif', color: '#555555' }}
            >
              {project.category}
            </span>
          </div>
          <span
            className="text-xs"
            style={{ fontFamily: 'Inter, sans-serif', color: '#444444' }}
          >
            {project.year}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function PortfolioSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >
      <GrainOverlay />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
          >
            Karya terpilih.
          </h2>
          <p
            className="text-base mt-3"
            style={{ fontFamily: 'Inter, sans-serif', color: '#555555' }}
          >
            Sekilas karya-karya yang telah kami bangun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
