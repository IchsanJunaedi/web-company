import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const services = [
  'Company Profile',
  'Birthday Website',
  'Landing Page',
  'Portfolio',
  'Wedding Invitation',
  'Other',
]

export default function ReachUsPage() {
  useEffect(() => {
    document.title = 'Reach Us — Aethera'
    return () => {
      document.title = 'Aethera — Web Studio Indonesia'
    }
  }, [])

  const [formState, setFormState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const res = await fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, service, message }),
      })
      if (res.ok) {
        setFormState('success')
        setName('')
        setEmail('')
        setService('')
        setMessage('')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    color: '#000000',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E5E5',
    borderRadius: 0,
    padding: '0.875rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div className="min-h-screen px-6 py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-60"
          style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Availability banner */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 text-xs"
          style={{ backgroundColor: '#000000', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse shrink-0"
            style={{ backgroundColor: '#4ade80' }}
          />
          Kami terima 3 project baru/bulan — 2 slot tersisa bulan ini
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl font-normal mb-4"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#000000', lineHeight: 0.95 }}
        >
          Let's talk.
        </h1>
        <p
          className="text-base mb-16 mt-6"
          style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
        >
          Tell us about your project. We'll respond within 24 hours.
        </p>

        {/* Success message */}
        {formState === 'success' && (
          <div
            className="mb-8 p-5 border"
            style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif', color: '#000000', fontSize: '0.875rem' }}
          >
            Message sent. We'll be in touch soon.
          </div>
        )}

        {/* Error message */}
        {formState === 'error' && (
          <div
            className="mb-8 p-5 border"
            style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif', color: '#6F6F6F', fontSize: '0.875rem' }}
          >
            Something went wrong. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs mb-2 uppercase tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#000000')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E5E5')}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs mb-2 uppercase tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#000000')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E5E5')}
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs mb-2 uppercase tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Service needed
            </label>
            <select
              id="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#000000')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E5E5')}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs mb-2 uppercase tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif', color: '#6F6F6F' }}
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '7rem' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#000000')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E5E5')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="self-start rounded-full px-10 py-4 text-sm transition-all hover:scale-[1.03] disabled:opacity-50"
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              marginTop: '0.5rem',
              cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
            }}
          >
            {formState === 'submitting' ? 'Sending…' : 'Send Message →'}
          </button>
        </form>
      </div>
    </div>
  )
}
