import { Link } from 'react-router-dom'

const LoveJar = () => {
  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <section className="container">
        <div className="text-center" style={{ paddingTop: '4rem' }}>
          <h1 className="neon-text">Love Jar</h1>
          <p className="holographic" style={{ marginTop: '2rem', fontSize: '1.8rem' }}>
            Gift memories, not flowers.
          </p>
          <p style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto' }}>
            Create a personalized digital gift filled with photos, music, games, and memories. 
            The perfect gift for birthdays, anniversaries, and special occasions.
          </p>
        </div>

        {/* Live Love Jar templates */}
        <div
          style={{
            marginTop: '4rem',
          }}
        >
          <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Live Love Jar Templates
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Proposal Love Jar',
                url: 'https://proposal.thelovejar.net',
                password: '00000000',
                tag: 'Romantic Proposal',
              },
              {
                title: 'Anniversary Love Jar',
                url: 'https://anniversary.thelovejar.net',
                tag: 'Anniversary Story',
              },
              {
                title: 'Valentine Love Jar',
                url: 'https://old.thelovejar.net/',
                tag: 'Valentine Special',
              },
              {
                title: 'Birthday Love Jar',
                url: 'https://tourmaline-bombolone-1cb886.netlify.app',
                password: '1999',
                tag: 'Birthday Experience',
              },
            ].map((tpl) => (
              <div
                key={tpl.title}
                className="glass glow-hover"
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {tpl.tag}
                  </p>
                  <h3 className="neon-text" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    {tpl.title}
                  </h3>
                </div>
                {tpl.password && (
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    Password:{' '}
                    <span style={{ color: 'var(--cyan)' }}>{tpl.password}</span>
                  </p>
                )}
                <a
                  href={tpl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
                >
                  <button className="btn">Open Template</button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginTop: '5rem' }}>
          <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            What’s Inside
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { title: 'Photo Gallery', desc: 'Curated memories with a cinematic feel.' },
              { title: 'Music Player', desc: 'Soundtrack your story with embedded audio.' },
              { title: 'Mini Games', desc: 'Interactive moments that feel personal.' },
              { title: 'Custom Themes', desc: 'Color, typography and vibe tailored to you.' },
              { title: 'Password Protected', desc: 'Private by design with optional access control.' },
              { title: 'Forever Link', desc: 'A timeless gift you can revisit anytime.' },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="glass glow-hover"
                style={{
                  padding: '2rem',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <h4 className="neon-text" style={{ fontSize: '1.15rem' }}>
                    {feature.title}
                  </h4>
                  <span
                    className="glass"
                    style={{
                      padding: '0.25rem 0.7rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(0, 255, 249, 0.25)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '4rem' }}>
          <Link to="/contact?service=love-jar">
            <button className="btn">Create Your Love Jar</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LoveJar