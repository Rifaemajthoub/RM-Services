import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam,
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data?.ok) {
        setStatus({
          state: 'error',
          message:
            data?.error === 'VALIDATION_ERROR'
              ? 'Please double-check the form fields and try again.'
              : 'Something went wrong. Please try again in a moment.',
        })
        return
      }

      setStatus({ state: 'success', message: 'Message sent. We will contact you soon.' })
      setFormData((prev) => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
      }))
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please check your connection and try again.' })
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <section className="container">
        <div className="text-center" style={{ paddingTop: '4rem' }}>
          <h1 className="neon-text">Let's Build Something Amazing</h1>
          <p className="holographic" style={{ marginTop: '2rem', fontSize: '1.5rem' }}>
            Get in touch with us today
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginTop: '4rem',
            maxWidth: '1200px',
            margin: '4rem auto',
          }}
        >
          {/* Contact Form */}
          <div className="glass" style={{ padding: '3rem', borderRadius: '8px' }}>
            <h2 className="neon-text" style={{ marginBottom: '2rem', fontSize: '2rem' }}>
              Send Us a Message
            </h2>

            {status.state !== 'idle' && (
              <div
                className="glass"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 255, 249, 0.15)',
                  marginBottom: '1.5rem',
                  color: status.state === 'error' ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    marginBottom: 0,
                    color: status.state === 'error' ? 'var(--magenta)' : 'var(--cyan)',
                  }}
                >
                  {status.state === 'loading'
                    ? 'SENDING…'
                    : status.state === 'success'
                    ? 'SENT'
                    : 'ERROR'}
                </p>
                {status.message && <p style={{ marginTop: '0.5rem' }}>{status.message}</p>}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--cyan)' }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--cyan)' }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--cyan)' }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--cyan)' }}>Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                    outline: 'none',
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="web-dev">Web Development</option>
                  <option value="web-design">Web Design</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="shopify">Shopify Development</option>
                  <option value="love-jar">Love Jar</option>
                  <option value="invitations">Online Invitations</option>
                  <option value="pos">POS System</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--cyan)' }}>Budget Range</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g., $5000 - $10000"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--cyan)' }}>Message *</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'var(--font-secondary)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn"
                style={{ width: '100%', opacity: status.state === 'loading' ? 0.7 : 1 }}
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="glass" style={{ padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 className="neon-text" style={{ marginBottom: '1.5rem' }}>
                Contact Information
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'var(--cyan)', marginBottom: '0.5rem' }}>Email</p>
                <p>rifae4@gmail.com</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'var(--cyan)', marginBottom: '0.5rem' }}>Phone / WhatsApp</p>
                <p>+961 71 437 066</p>
              </div>
              <div>
                <p style={{ color: 'var(--cyan)', marginBottom: '0.5rem' }}>Business Hours</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: Closed</p>
              </div>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
              <h3 className="neon-text" style={{ marginBottom: '1.5rem' }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Instagram', 'Facebook', 'X', 'LinkedIn'].map((label) => (
                  <a
                    key={label}
                    href="#"
                    style={{
                      padding: '0.5rem 0.9rem',
                      border: '1px solid rgba(0, 255, 249, 0.25)',
                      borderRadius: '999px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--text-tertiary)',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact