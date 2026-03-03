import { Link } from 'react-router-dom'

const Invitations = () => {
  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <section className="container">
        <div className="text-center" style={{ paddingTop: '4rem' }}>
          <h1 className="neon-text">Online Invitations</h1>
          <p className="holographic" style={{ marginTop: '2rem', fontSize: '1.8rem' }}>
            Digital invitations for every occasion.
          </p>
          <p style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto' }}>
            Create stunning, interactive digital invitations for weddings, birthdays, 
            corporate events, and all special occasions.
          </p>
        </div>

        {/* Live invitation templates */}
        <div style={{ marginTop: '4rem' }} id="templates">
          <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Live Invitation Templates
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
                title: 'Invitation Template',
                url: 'https://invitation.thelovejar.net',
                tag: 'Interactive Invite',
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
                <a href={tpl.url} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>
                  <button className="btn">Open Template</button>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
          }}
        >
          {[
            { title: 'Weddings', label: '01', desc: 'Elegant wedding invitations with RSVP tracking' },
            { title: 'Birthdays', label: '02', desc: 'Fun and colorful birthday party invites' },
            { title: 'Corporate Events', label: '03', desc: 'Professional event invitations' },
            { title: 'Baby Showers', label: '04', desc: 'Adorable baby shower announcements' },
          ].map((category, i) => (
            <div
              key={i}
              className="glass glow-hover"
              style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                borderRadius: '8px',
              }}
            >
              <div
                className="glass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 255, 249, 0.25)',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan)',
                  boxShadow: '0 0 25px rgba(0, 255, 249, 0.12)',
                }}
              >
                {category.label}
              </div>
              <h3 className="neon-text">{category.title}</h3>
              <p style={{ marginTop: '1rem', color: 'var(--text-tertiary)' }}>{category.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="glass"
          style={{
            marginTop: '4rem',
            padding: '3rem',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h3 className="neon-text" style={{ marginBottom: '2rem' }}>
            Features
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {['RSVP Tracking', 'Guest Management', 'Custom Animations', 'QR Codes', 'Music Integration', 'Mobile Friendly'].map((feat, i) => (
              <div key={i}>
                <p className="neon-text-yellow">✓ {feat}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '4rem' }}>
          <a href="#templates">
            <button className="btn">Browse Templates</button>
          </a>
          <div style={{ marginTop: '1.25rem' }}>
            <Link to="/contact?service=invitations" style={{ color: 'var(--text-tertiary)' }}>
              Need a custom invitation? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Invitations