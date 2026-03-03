import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page" style={{ paddingTop: '90px' }}>
      {/* HERO / CONTROL CENTER */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          padding: '4rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
          }}
        >
          {/* Top row: main message + side status panel */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '3rem',
              alignItems: 'stretch',
              flexWrap: 'wrap',
            }}
          >
            {/* Main hero copy */}
            <div style={{ flex: 2, minWidth: 'min(500px, 100%)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '1.5rem',
                }}
              >
                HIGH‑TECH WEB STUDIO • RM SERVICES
              </p>

              <h1
                className="neon-text glitch"
                data-text="We Engineer Digital Worlds."
                style={{
                  maxWidth: '18ch',
                  lineHeight: 1.05,
                }}
              >
                We Engineer Digital Worlds.
              </h1>

              <p
                style={{
                  marginTop: '2rem',
                  maxWidth: '40rem',
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                }}
              >
                RM Services is a boutique web lab crafting cinematic websites, immersive
                invitations and custom experiences like <span className="neon-text">Love Jar</span> —
                built with modern stacks, motion design and 3D.
              </p>

              {/* CTA Row */}
              <div
                style={{
                  marginTop: '3rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                <Link to="/services">
                  <button className="btn">Explore Services</button>
                </Link>

                <Link to="/contact">
                  <button
                    className="btn"
                    style={{
                      borderColor: 'var(--magenta)',
                      color: 'var(--magenta)',
                    }}
                  >
                    Start a Project
                  </button>
                </Link>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    minWidth: '220px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Signature Experiences
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {['Love Jar', 'Online Invitations', 'E‑Commerce', 'Shopify'].map((label) => (
                      <span
                        key={label}
                        className="glass"
                        style={{
                          padding: '0.35rem 0.9rem',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                          border: '1px solid rgba(0, 255, 249, 0.25)',
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: status glass panel */}
            <div
              className="glass glow-border"
              style={{
                flex: 1.3,
                minWidth: '260px',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 2.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.18,
                  backgroundImage: `
                    linear-gradient(rgba(0,255,249,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,249,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '26px 26px',
                  pointerEvents: 'none',
                }}
              />

              <header
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                  }}
                >
                  PROJECT CONSOLE
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '999px',
                      background: 'var(--neon-green)',
                      boxShadow: '0 0 12px var(--neon-green)',
                    }}
                  />
                  READY TO DEPLOY
                </span>
              </header>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    SPECIALTIES
                  </p>
                  <p style={{ fontSize: '0.95rem' }}>
                    Web apps, interactive stories, digital invitations and custom experiences that
                    behave like real products, not templates.
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { label: 'Web Development', value: '95%' },
                    { label: 'Creative Direction', value: '92%' },
                    { label: '3D & Motion', value: '88%' },
                  ].map((item) => (
                    <div key={item.label} style={{ flex: '1 1 120px' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-tertiary)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {item.label}
                      </p>
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '6px',
                          borderRadius: '999px',
                          background: 'rgba(255,255,255,0.06)',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: item.value,
                            height: '100%',
                            background:
                              'linear-gradient(90deg, var(--cyan), var(--magenta), var(--yellow))',
                            boxShadow: '0 0 12px rgba(0,255,249,0.7)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginTop: '0.5rem',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      FOCUS
                    </p>
                    <p style={{ fontSize: '0.95rem' }}>High-tech brands, events, & love stories.</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      LOCATION
                    </p>
                    <p style={{ fontSize: '0.95rem' }}>Remote • Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip: preview of key experiences */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              {
                title: 'Love Jar',
                desc: 'A digital jar of memories: photos, playlists, mini games & notes in one bespoke website.',
                to: '/love-jar',
              },
              {
                title: 'Online Invitations',
                desc: 'Interactive invitations for weddings, birthdays and events with RSVP and motion.',
                to: '/invitations',
              },
              {
                title: 'E‑Commerce & Shopify',
                desc: 'Custom storefronts that feel like products, not themes — optimized for story and sales.',
                to: '/services',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                style={{ flex: '1 1 260px', textDecoration: 'none' }}
              >
                <div
                  className="glass glow-hover"
                  style={{
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem 1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--text-tertiary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      FEATURED EXPERIENCE
                    </p>
                    <h3 className="neon-text" style={{ fontSize: '1.3rem' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.desc}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--cyan)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    View details <span>↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home