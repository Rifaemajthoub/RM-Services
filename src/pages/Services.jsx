const Services = () => {
  return (
    <div className="page" style={{ paddingTop: '100px' }}>
      <section className="container">
        <div className="text-center" style={{ paddingTop: '4rem' }}>
          <h1 className="neon-text">Our Services</h1>
          <p style={{ marginTop: '2rem', fontSize: '1.5rem' }}>
            Cutting-edge solutions for your digital needs
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
          }}
        >
          {['Web Development', 'Web Design', 'E-Commerce', 'Shopify Development'].map((service, i) => (
            <div
              key={i}
              className="glass glow-hover"
              style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                borderRadius: '8px',
                boxSizing: 'border-box',
              }}
            >
              <h3 className="neon-text">{service}</h3>
              <p
                style={{
                  marginTop: '1rem',
                  maxWidth: '22rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  wordBreak: 'break-word',
                }}
              >
                Professional {service.toLowerCase()} services tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services