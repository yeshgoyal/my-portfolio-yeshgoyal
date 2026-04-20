'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleProps {
  color?: string
  count?: number
  speed?: number
  size?: number
}

function ParticleSwarm({ color = '#3b82f6', count = 400, speed = 1, size = 0.05 }: ParticleProps) {
  const ref = useRef<THREE.Points>(null)
  
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      coords[i] = (Math.random() - 0.5) * 15 // Spread across -7.5 to 7.5
    }
    return coords
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10 * speed
      ref.current.rotation.y -= delta / 15 * speed
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ParticleBackground({ color, count, speed, size }: ParticleProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleSwarm color={color} count={count} speed={speed} size={size} />
      </Canvas>
    </div>
  )
}
