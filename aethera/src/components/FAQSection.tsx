import { useState } from 'react'
import { Plus } from 'lucide-react'
import GrainOverlay from './GrainOverlay'

const FAQS = [
  {
    q: 'Berapa lama proses pengerjaan website?',
    a: 'Tergantung jenis projectnya. Birthday website dan undangan nikah selesai dalam 3–7 hari. Company profile dan landing page biasanya 7–14 hari. Portfolio lebih kompleks bisa sampai 14 hari. Timeline pasti kami konfirmasi di awal sebelum mulai.',
  },
  {
    q: 'Apakah ada DP terlebih dahulu?',
    a: 'Ya. Kami minta 50% di awal sebagai tanda jadi dan biaya kickoff. Sisa 50% dibayar setelah website selesai dan siap diserahkan. Pembayaran via transfer bank.',
  },
  {
    q: 'Berapa kali saya bisa minta revisi?',
    a: 'Kami memberikan 2 putaran revisi gratis setelah preview pertama. Revisi di luar itu dikenakan biaya tambahan yang disepakati bersama. Kami transparan di awal soal ini.',
  },
  {
    q: 'Apakah bisa cicil?',
    a: 'Saat ini kami hanya menerima pembayaran 50/50 (DP + pelunasan). Untuk project di atas Rp 5 juta, silakan diskusikan opsi pembayaran saat discovery call.',
  },
  {
    q: 'Teknologi apa yang dipakai untuk membangun website?',
    a: 'Kami membangun dengan React atau HTML/CSS murni tergantung kebutuhan. Semua website kami mobile-first, fast loading, dan dihosting di platform yang reliable. Kamu tidak perlu paham teknisnya — kami yang handle semuanya.',
  },
  {
    q: 'Apakah saya bisa edit konten sendiri setelah selesai?',
    a: 'Untuk website yang butuh update rutin (blog, produk), kami bisa integrasikan CMS sederhana. Untuk website statis seperti undangan atau landing page, kami yang handle perubahan minor secara gratis selama 30 hari pertama.',
  },
  {
    q: 'Bagaimana kalau saya tidak puas dengan hasilnya?',
    a: 'Kami mulai dengan discovery call yang mendetail untuk memastikan kami aligned sebelum mulai. Preview diberikan sebelum launch. Tapi kalau memang ada yang tidak sesuai, kami akan revisi sampai kamu puas dalam scope yang disepakati.',
  },
  {
    q: 'Apakah domain dan hosting sudah termasuk?',
    a: 'Belum termasuk. Domain dan hosting adalah biaya terpisah yang kamu bayar langsung ke provider (Niagahoster, Hostinger, Vercel, dll). Kami bantu setup dan konfigurasinya — gratis.',
  },
]

function FAQItem({
  q, a, isOpen, onToggle,
}: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backgroundColor: isOpen ? 'rgba(255,255,255,0.03)' : 'transparent',
        transition: 'background-color 0.2s',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 px-2 text-left"
      >
        <span
          className="text-base md:text-lg font-normal leading-snug"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#FFFFFF' }}
        >
          {q}
        </span>
        <span
          className="shrink-0 mt-1 transition-transform duration-300"
          style={{
            color: 'rgba(255,255,255,0.5)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
        >
          <Plus size={18} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <p
          className="pb-6 px-2 text-sm leading-relaxed max-w-2xl"
          style={{ fontFamily: 'Inter, sans-serif', color: '#666666' }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#060606' }}
    >
      <GrainOverlay />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 3 }}>
        <div className="flex flex-col md:flex-row md:gap-24">
          {/* Left: heading */}
          <div className="md:w-72 shrink-0 mb-12 md:mb-0">
            <span
              className="text-xs uppercase tracking-widest block mb-4"
              style={{ fontFamily: 'Inter, sans-serif', color: '#444444' }}
            >
              FAQ
            </span>
            <h2
              className="text-4xl md:text-5xl font-normal"
              style={{
                fontFamily: '"Instrument Serif", serif',
                color: '#FFFFFF',
                lineHeight: 1.05,
              }}
            >
              Pertanyaan yang sering ditanya.
            </h2>
            <p
              className="mt-6 text-sm leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#555555' }}
            >
              Masih ada yang belum terjawab?{' '}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-opacity hover:opacity-60"
                style={{ color: '#FFFFFF' }}
              >
                Chat kami langsung.
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <div
            className="flex-1"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
