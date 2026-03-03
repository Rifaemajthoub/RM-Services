import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useApp } from '../../context/AppContext'

const Loader = () => {
  const progressRef = useRef(null)
  const percentRef = useRef(null)
  const { setIsLoading } = useApp()

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut',
    })

    // Animate percentage
    gsap.to(percentRef.current, {
      innerHTML: 100,
      duration: 2.5,
      snap: { innerHTML: 1 },
      ease: 'power2.inOut',
      onComplete: () => {
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      },
    })

    return () => tl.kill()
  }, [setIsLoading])

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--bg-darker)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        overflow: 'hidden',
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Logo */}
        <motion.div
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="neon-text"
            style={{
              fontSize: 'clamp(4rem, 15vw, 10rem)',
              fontFamily: 'var(--font-primary)',
              fontWeight: 900,
              letterSpacing: '0.1em',
            }}
          >
            RM
          </h1>
          <motion.p
            style={{
              fontSize: 'clamp(1rem, 3vw, 2rem)',
              fontFamily: 'var(--font-primary)',
              color: 'var(--magenta)',
              letterSpacing: '0.3em',
              marginTop: '1rem',
              textShadow: '0 0 10px var(--magenta)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SERVICES
          </motion.p>
        </motion.div>

        {/* Hexagon Loader */}
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            margin: '0 auto 3rem',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: `linear-gradient(135deg, ${
                  i === 0 ? 'var(--cyan)' : i === 1 ? 'var(--magenta)' : 'var(--yellow)'
                }, transparent)`,
                animation: `rotate 3s linear infinite ${i === 1 ? 'reverse' : ''}`,
                animationDelay: `${-i}s`,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div style={{ width: '400px', maxWidth: '90vw', margin: '0 auto 2rem' }}>
          <div
            style={{
              width: '100%',
              height: '3px',
              background: 'rgba(0, 255, 249, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'inset 0 0 10px rgba(0, 255, 249, 0.2), 0 0 10px rgba(0, 255, 249, 0.1)',
            }}
          >
            <div
              ref={progressRef}
              style={{
                width: '0%',
                height: '100%',
                background: 'linear-gradient(90deg, var(--cyan), var(--magenta), var(--yellow))',
                backgroundSize: '200% 100%',
                animation: 'progress-shimmer 2s linear infinite',
                boxShadow: '0 0 20px var(--cyan), 0 0 40px rgba(0, 255, 249, 0.5)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '20px',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.8)',
                  filter: 'blur(5px)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                }}
              />
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.5rem',
              color: 'var(--cyan)',
              marginTop: '1rem',
              textShadow: '0 0 10px var(--cyan)',
            }}
          >
            <span ref={percentRef}>0</span>%
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            letterSpacing: '0.2em',
            color: 'rgba(255, 255, 255, 0.6)',
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="glitch" data-text="INITIALIZING SYSTEM">
            INITIALIZING SYSTEM
          </span>
        </motion.div>
      </div>

      {/* Background Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(0, 255, 249, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 249, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes progress-shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </motion.div>
  )
}

export default Loader