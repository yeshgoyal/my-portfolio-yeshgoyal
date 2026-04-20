'use client'

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { ReactNode, MouseEvent, useState } from 'react'

export type TiltEffectType = 'glare' | 'spotlight' | 'borderGlow' | 'none'

interface TiltHoverProps {
  children: ReactNode
  className?: string
  glareColor?: string
  baseColor?: string
  effectType?: TiltEffectType
}

export default function TiltHover({ 
  children, 
  className = '', 
  glareColor = 'rgba(255, 255, 255, 0.15)',
  baseColor = 'transparent',
  effectType = 'glare'
}: TiltHoverProps) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  // Mouse coords for gradient background (0 to 100%)
  const mouseXpct = useMotionValue(50)
  const mouseYpct = useMotionValue(50)

  // A smooth spring for the effect position
  const springX = useSpring(mouseXpct, { stiffness: 200, damping: 20 })
  const springY = useSpring(mouseYpct, { stiffness: 200, damping: 20 })

  // Define physics for different effects
  let backgroundOverlay = useMotionTemplate`radial-gradient(circle at ${springX}% ${springY}%, ${glareColor}, transparent 60%)`
  
  if (effectType === 'spotlight') {
    backgroundOverlay = useMotionTemplate`radial-gradient(400px circle at ${springX}% ${springY}%, ${glareColor}, transparent 40%)`
  } else if (effectType === 'borderGlow') {
    backgroundOverlay = useMotionTemplate`radial-gradient(200px at ${springX}% ${springY}%, ${glareColor}, transparent 100%)`
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top
    
    // For tilt (-0.5 to 0.5)
    x.set(clientX / width - 0.5)
    y.set(clientY / height - 0.5)

    // For glare (0 to 100)
    mouseXpct.set((clientX / width) * 100)
    mouseYpct.set((clientY / height) * 100)

    if (!isHovered) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
    mouseXpct.set(50)
    mouseYpct.set(50)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full relative rounded-[inherit]"
      >
        {/* Base background color injection */}
        {baseColor !== 'transparent' && (
          <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-[-1]" style={{ backgroundColor: baseColor }} />
        )}
        
        {children}
        
        {/* Dynamic Hover Effect Layer */}
        {effectType !== 'none' && (
          <motion.div 
            className={`pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300 ${effectType === 'borderGlow' ? 'mix-blend-color-dodge' : 'mix-blend-overlay'}`}
            style={{ 
              background: backgroundOverlay,
              opacity: isHovered ? 1 : 0
            }}
          />
        )}

      </motion.div>
    </motion.div>
  )
}
