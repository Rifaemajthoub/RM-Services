const POS = () => {
  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <section className="container flex-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <h1 className="neon-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            POS System
          </h1>
          <p className="holographic" style={{ marginTop: '2rem', fontSize: '2rem' }}>
            Coming Soon...
          </p>
          <p style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
            We're building a revolutionary Point of Sale system. 
            Stay tuned for something amazing!
          </p>

          <div
            className="glass"
            style={{
              marginTop: '4rem',
              padding: '3rem',
              borderRadius: '8px',
              maxWidth: '500px',
              margin: '4rem auto',
            }}
          >
            <h3 className="neon-text" style={{ marginBottom: '2rem' }}>
              Get Early Access
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! We\'ll notify you when we launch!')
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  marginBottom: '1rem',
                  background: 'var(--bg-glass)',
                  border: '1px solid rgba(0, 255, 249, 0.3)',
                  borderRadius: '4px',
                  color: 'white',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn" style={{ width: '100%' }}>
                Notify Me
              </button>
            </form>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <div
              className="glass glow-border floating"
              style={{
                width: '180px',
                height: '110px',
                margin: '0 auto',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.18em',
                  color: 'var(--cyan)',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                }}
              >
                POS LAB
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default POS