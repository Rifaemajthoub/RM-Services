import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useApp } from '../../context/AppContext'

const Cursor = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const { cursorVariant } = useApp()

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current

    if (cursorVariant === 'hover') {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: 'rgba(255, 0, 255, 0.3)',
        duration: 0.3,
      })
    } else {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.3,
      })
    }
  }, [cursorVariant])

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid var(--cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid var(--magenta)',
            opacity: 0.5,
            animation: 'pulse-ring 2s infinite',
          }}
        />
      </div>
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: 'var(--cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px var(--cyan), 0 0 20px var(--cyan)',
        }}
      />
      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }
        @media (max-width: 768px) {
          [ref="cursorRef"], [ref="cursorDotRef"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Cursor