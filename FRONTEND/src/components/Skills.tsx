'use client'

import { motion } from 'framer-motion'
import { skillsData } from '../lib/data'
import ParticleBackground from './ParticleBackground'
import FloatingBlobs from './FloatingBlobs'
import TiltHover, { TiltEffectType } from './TiltHover'

const Skills = () => {
  // Vibrant gradients corresponding to skills logically (just visual flair)
  const baseCardColors = [
    'rgba(59, 130, 246, 0.04)', // blueish
    'rgba(234, 179, 8, 0.04)',  // yellowish
    'rgba(16, 185, 129, 0.04)', // emerald
    'rgba(236, 72, 153, 0.04)', // pink
    'rgba(168, 85, 247, 0.04)', // purple
  ]

  const glareColors = [
    'rgba(59, 130, 246, 0.3)',
    'rgba(234, 179, 8, 0.3)',
    'rgba(16, 185, 129, 0.3)',
    'rgba(236, 72, 153, 0.3)',
    'rgba(168, 85, 247, 0.3)',
  ]

  const effectTypes: TiltEffectType[] = ['spotlight', 'borderGlow', 'glare']

  return (
    <section id="skills" className="py-20 sm:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <ParticleBackground color="#f59e0b" count={100} speed={0.4} size={0.06} />
      <FloatingBlobs colors={['purple', 'cyan', 'blue', 'pink']} />
      
      <div className="section-container relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-14"
        >
          <h2 className="section-heading mb-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => {
            const baseColor = baseCardColors[index % baseCardColors.length]
            const glowColor = glareColors[index % glareColors.length]
            const effectType = effectTypes[index % effectTypes.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 120, damping: 14 }}
                className="h-full"
              >
                <TiltHover className="h-full rounded-2xl" baseColor={baseColor} glareColor={glowColor} effectType={effectType}>
                  <div className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col items-center gap-3 h-full border border-gray-100/50 dark:border-gray-700/50 transition-all duration-300">
                    <motion.div 
                       initial={{ y: 0 }}
                       whileHover={{ y: -5 }}
                       className="w-full flex-1 flex flex-col items-center justify-center gap-2"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 text-center drop-shadow-sm">
                        {skill.name}
                      </div>
                      <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/50">
                        {skill.category}
                      </div>
                    </motion.div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700/80 rounded-full h-2 sm:h-2.5 mt-2 overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      />
                    </div>
                  </div>
                </TiltHover>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
