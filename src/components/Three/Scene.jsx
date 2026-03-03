import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField({ color }) {
  const ref = useRef()
  const count = 3000

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
      ref.current.rotation.x += delta * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function GeometricShape({ position, geometry, rotationSpeed, color }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * rotationSpeed[0]
      ref.current.rotation.y += delta * rotationSpeed[1]
      ref.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <primitive object={geometry} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  )
}

function Scene({ currentPath = '/' }) {
  const mode = useMemo(() => {
    if (currentPath.startsWith('/love-jar')) return 'love-jar'
    if (currentPath.startsWith('/invitations')) return 'invitations'
    if (currentPath.startsWith('/services')) return 'services'
    if (currentPath.startsWith('/pos')) return 'pos'
    if (currentPath.startsWith('/contact')) return 'contact'
    return 'home'
  }, [currentPath])

  const config = useMemo(() => {
    switch (mode) {
      case 'love-jar':
        return {
          background: '#0c0710',
          particleColor: '#ff00ff',
          shapeColor: '#ff9bd6',
          autoRotateSpeed: 0.15,
        }
      case 'invitations':
        return {
          background: '#100b06',
          particleColor: '#fffc00',
          shapeColor: '#ffb347',
          autoRotateSpeed: 0.22,
        }
      case 'services':
        return {
          background: '#05060c',
          particleColor: '#00fff9',
          shapeColor: '#00d9ff',
          autoRotateSpeed: 0.18,
        }
      case 'pos':
        return {
          background: '#020914',
          particleColor: '#39ff14',
          shapeColor: '#00fff9',
          autoRotateSpeed: 0.25,
        }
      case 'contact':
        return {
          background: '#05060a',
          particleColor: '#b026ff',
          shapeColor: '#00fff9',
          autoRotateSpeed: 0.17,
        }
      case 'home':
      default:
        return {
          background: '#0a0a0f',
          particleColor: '#00fff9',
          shapeColor: '#00fff9',
          autoRotateSpeed: 0.2,
        }
    }
  }, [mode])

  const shapes = useMemo(() => {
    const geometries = [
      new THREE.OctahedronGeometry(2),
      new THREE.IcosahedronGeometry(2),
      new THREE.TetrahedronGeometry(2),
    ]

    return Array.from({ length: 5 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30],
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      rotationSpeed: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
    }))
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <color attach="background" args={[config.background]} />
      <ParticleField color={config.particleColor} />
      {shapes.map((shape, i) => (
        <GeometricShape key={i} color={config.shapeColor} {...shape} />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={config.autoRotateSpeed}
      />
    </Canvas>
  )
}

export default Scene