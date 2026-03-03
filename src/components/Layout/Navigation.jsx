import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../../context/AppContext'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const { menuOpen, setMenuOpen, setCursorVariant } = useApp()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location, setMenuOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/love-jar', label: 'Love Jar' },
    { path: '/invitations', label: 'Online Invitations' },
    { path: '/pos', label: 'POS System' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: '1.5rem 0',
          zIndex: 9999,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 255, 249, 0.1)' : 'none',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span
                className="neon-text"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  lineHeight: 1,
                }}
              >
                RM
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--magenta)',
                  letterSpacing: '0.3em',
                  marginTop: '0.2rem',
                  textShadow: '0 0 5px var(--magenta)',
                }}
              >
                SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul
            style={{
              display: 'flex',
              gap: '3rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="desktop-menu"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: location.pathname === link.path ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'color 0.3s ease',
                    padding: '0.5rem 0',
                    display: 'inline-block',
                    textShadow: location.pathname === link.path ? '0 0 10px var(--cyan)' : 'none',
                  }}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {link.label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: location.pathname === link.path ? '100%' : 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--cyan), var(--magenta))',
                      transition: 'width 0.4s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
                      boxShadow: '0 0 10px var(--cyan)',
                    }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="desktop-only"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <button className="btn">Get Started</button>
          </Link>

          {/* Hamburger */}
          <button
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              background: 'transparent',
              border: 'none',
              padding: '0.5rem',
              zIndex: 10,
              position: 'relative',
            }}
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: '30px',
                  height: '2px',
                  background: menuOpen ? 'var(--magenta)' : 'var(--cyan)',
                  transition: 'all 0.3s ease',
                  boxShadow: menuOpen ? '0 0 10px var(--magenta)' : '0 0 5px var(--cyan)',
                  transform:
                    menuOpen && i === 0
                      ? 'rotate(45deg) translate(8px, 8px)'
                      : menuOpen && i === 1
                      ? 'scale(0)'
                      : menuOpen && i === 2
                      ? 'rotate(-45deg) translate(8px, -8px)'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              maxWidth: '500px',
              height: '100vh',
              background: 'rgba(10, 10, 15, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 9998,
              padding: '6rem 3rem',
              overflowY: 'auto',
            }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  style={{
                    marginBottom: '2rem',
                    borderBottom: '1px solid rgba(0, 255, 249, 0.1)',
                    paddingBottom: '1rem',
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      fontFamily: 'var(--font-primary)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: location.pathname === link.path ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.6)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'all 0.3s ease',
                      textShadow: location.pathname === link.path ? '0 0 10px var(--cyan)' : 'none',
                    }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        color: 'var(--magenta)',
                        textShadow: '0 0 5px var(--magenta)',
                      }}
                    >
                      0{index + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div
              style={{
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(0, 255, 249, 0.1)',
                textAlign: 'center',
              }}
            >
              <p className="neon-text" style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem' }}>
                Let's Build Something Amazing
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu, .desktop-only {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navigation