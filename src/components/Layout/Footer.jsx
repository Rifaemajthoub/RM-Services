import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'

const Footer = () => {
  const { setCursorVariant } = useApp()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Web Development', path: '/services' },
      { label: 'Web Design', path: '/services' },
      { label: 'E-Commerce', path: '/services' },
      { label: 'Shopify Development', path: '/services' },
    ],
    Products: [
      { label: 'Love Jar', path: '/love-jar' },
      { label: 'Online Invitations', path: '/invitations' },
      { label: 'POS System', path: '/pos' },
    ],
    Company: [
      { label: 'About Us', path: '/' },
      { label: 'Contact', path: '/contact' },
    ],
  }

  const socialLinks = [
    { name: 'Instagram', label: 'IG', url: '#' },
    { name: 'Facebook', label: 'FB', url: '#' },
    { name: 'X', label: 'X', url: '#' },
    { name: 'LinkedIn', label: 'IN', url: '#' },
  ]

  return (
    <footer
      style={{
        position: 'relative',
        background: 'var(--bg-darker)',
        borderTop: '1px solid rgba(0, 255, 249, 0.2)',
        padding: '4rem 2rem 2rem',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Section */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                RM
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--magenta)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.3em',
                  textShadow: '0 0 5px var(--magenta)',
                }}
              >
                SERVICES
              </p>
            </div>
            <p style={{ color: 'var(--text-tertiary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Building cutting-edge digital experiences that push the boundaries of web technology.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    minWidth: '44px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--bg-glass)',
                    border: '1px solid rgba(0, 255, 249, 0.2)',
                    borderRadius: '50%',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    setCursorVariant('hover')
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 249, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    setCursorVariant('default')
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 249, 0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  title={social.name}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: 'var(--font-primary)',
                  color: 'var(--cyan)',
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: '0.8rem' }}>
                    <Link
                      to={link.path}
                      style={{
                        color: 'var(--text-tertiary)',
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        setCursorVariant('hover')
                        e.currentTarget.style.color = 'var(--cyan)'
                        e.currentTarget.style.transform = 'translateX(5px)'
                        e.currentTarget.style.textShadow = '0 0 10px var(--cyan)'
                      }}
                      onMouseLeave={(e) => {
                        setCursorVariant('default')
                        e.currentTarget.style.color = 'var(--text-tertiary)'
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.textShadow = 'none'
                      }}
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-primary)',
                color: 'var(--cyan)',
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Newsletter
            </h4>
            <p style={{ color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
              Subscribe to get updates on our latest projects and offers.
            </p>
            <form
              style={{ display: 'flex', gap: '0.5rem' }}
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks for subscribing!')
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                required
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  background: 'var(--bg-glass)',
                  border: '1px solid rgba(0, 255, 249, 0.2)',
                  borderRadius: '4px',
                  color: 'white',
                  fontFamily: 'var(--font-secondary)',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)'
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 249, 0.3)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 249, 0.2)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.8rem 1.5rem',
                  background: 'transparent',
                  border: '2px solid var(--cyan)',
                  color: 'var(--cyan)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  setCursorVariant('hover')
                  e.currentTarget.style.background = 'var(--cyan)'
                  e.currentTarget.style.color = 'var(--bg-dark)'
                  e.currentTarget.style.boxShadow = '0 0 20px var(--cyan)'
                }}
                onMouseLeave={(e) => {
                  setCursorVariant('default')
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--cyan)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
            marginBottom: '2rem',
            opacity: 0.3,
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            © {currentYear} <span className="neon-text">RM SERVICES</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link
              to="#"
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                setCursorVariant('hover')
                e.currentTarget.style.color = 'var(--cyan)'
              }}
              onMouseLeave={(e) => {
                setCursorVariant('default')
                e.currentTarget.style.color = 'var(--text-tertiary)'
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                setCursorVariant('hover')
                e.currentTarget.style.color = 'var(--cyan)'
              }}
              onMouseLeave={(e) => {
                setCursorVariant('default')
                e.currentTarget.style.color = 'var(--text-tertiary)'
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, var(--cyan), var(--magenta), var(--yellow), var(--cyan))',
          backgroundSize: '200% 100%',
          animation: 'holographic 3s ease infinite',
        }}
      />
    </footer>
  )
}

export default Footer