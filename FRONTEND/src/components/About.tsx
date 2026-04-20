'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Lightbulb, Target } from 'lucide-react'
import TiltHover, { TiltEffectType } from './TiltHover'
import FloatingBlobs from './FloatingBlobs'
import Image from 'next/image'
import profileImg from '../assets/profile.jpg'
import ParticleBackground from './ParticleBackground'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex challenges and finding elegant solutions.',
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'UI/UX Focus',
      description: 'Creating intuitive and visually appealing user interfaces.',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Consistency',
      description: 'Maintaining clean, maintainable, and well-structured code.',
    },
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ['start end', 'end start'] 
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40])
  const imageParallax = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="about" ref={containerRef} className="py-20 sm:py-24 bg-gray-50/50 dark:bg-gray-900 relative overflow-hidden">
      
      {/* Background elements */}
      <ParticleBackground color="#ec4899" count={100} speed={0.4} size={0.06} />
      <FloatingBlobs colors={['pink', 'purple', 'emerald', 'blue']} />
      
      {/* Decorative blobs */}
      <motion.div style={{ y: yParallax }} className="absolute -left-16 top-16 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: yParallax }} className="absolute right-0 bottom-16 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Profile Picture Side */}
          <motion.div
            style={{ y: imageParallax }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end lg:order-2"
          >
             <div className="relative group">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-green-400 to-blue-500 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
              <TiltHover className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[2rem]" glareColor="rgba(16, 185, 129, 0.3)">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-800">
                  <Image
                    src={profileImg}
                    alt="Yesh Goyal"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </TiltHover>
            </div>
          </motion.div>

          {/* Bio text & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:order-1"
          >
            <h3 className="section-subheading mb-4">
              Hi, I'm <span className="gradient-text">Yesh Goyal</span>
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-[15px] mb-8 glass-card p-6 rounded-2xl dark:bg-gray-900/50">
              <p>
                I'm a passionate B.Tech CSE student with a strong focus on frontend development and
                building real-world projects. I love creating modern web experiences that combine
                beautiful design with powerful functionality.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, and
                it has evolved into a passion for creating digital solutions that make a difference.
                I specialize in the MERN stack and enjoy working with modern frontend technologies
                to build responsive and user-friendly applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or learning about the latest trends in web development.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid gap-4">
              {highlights.map((h, i) => {
              const effectTypes: TiltEffectType[] = ['spotlight', 'borderGlow', 'glare']
              const baseColors = ['rgba(59,130,246,0.03)', 'rgba(234,179,8,0.03)', 'rgba(236,72,153,0.03)']
              const glareColors = ['rgba(59,130,246,0.3)', 'rgba(234,179,8,0.3)', 'rgba(236,72,153,0.3)']
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 * i, type: 'spring' }}
                >
                  <TiltHover 
                    glareColor={glareColors[i % glareColors.length]}
                    baseColor={baseColors[i % baseColors.length]}
                    effectType={effectTypes[i % effectTypes.length]}
                  >
                    <div className="flex items-start gap-4 p-5 sm:p-6 glass-card glow-border rounded-xl transition-all duration-300 dark:bg-gray-800/80">
                      <div className="flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg shadow-blue-500/30 transform transition-transform group-hover:scale-110">
                        {h.icon}
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base sm:text-lg font-bold mb-1.5 text-gray-900 dark:text-white drop-shadow-sm">{h.title}</h4>
                        <p className="text-[13px] sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{h.description}</p>
                      </div>
                    </div>
                  </TiltHover>
                </motion.div>
              )
            })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
