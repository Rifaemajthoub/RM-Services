import { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Context
import { useApp } from './context/AppContext'

// Layout Components (we'll create these next)
import Cursor from './components/Layout/Cursor'
import Loader from './components/Layout/Loader'
import Navigation from './components/Layout/Navigation'
import PageTransition from './components/Layout/PageTransition'
import Footer from './components/Layout/Footer'

// Three.js Scene (we'll create this)
import Scene from './components/Three/Scene'

// Pages (we'll create these)
import Home from './pages/Home'
import Services from './pages/Services'
import LoveJar from './pages/LoveJar'
import Invitations from './pages/Invitations'
import POS from './pages/POS'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()
  const { isLoading } = useApp()

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      {/* Custom Cursor */}
      <Cursor />

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* Three.js Background */}
      <div className="three-container">
        <Suspense fallback={null}>
          <Scene currentPath={location.pathname} />
        </Suspense>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Page Routes with Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/love-jar"
            element={
              <PageTransition>
                <LoveJar />
              </PageTransition>
            }
          />
          <Route
            path="/invitations"
            element={
              <PageTransition>
                <Invitations />
              </PageTransition>
            }
          />
          <Route
            path="/pos"
            element={
              <PageTransition>
                <POS />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Scan Lines Effect */}
      <div className="scan-lines" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 249, 0.02) 51%)',
        backgroundSize: '100% 4px',
        zIndex: 9998,
        pointerEvents: 'none',
        animation: 'scanlines 10s linear infinite'
      }} />

      {/* Vignette */}
      <div className="vignette" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.7)',
        pointerEvents: 'none',
        zIndex: 9997
      }} />

      {/* Cyber Grid */}
      <div className="cyber-grid" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 249, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 249, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        zIndex: -1,
        pointerEvents: 'none',
        animation: 'grid-move 20s linear infinite'
      }} />
    </div>
  )
}

export default App