'use client'

import { motion } from 'framer-motion'
import { achievementsData } from '../lib/data'
import ParticleBackground from './ParticleBackground'
import FloatingBlobs from './FloatingBlobs'
import Image from 'next/image'
import TiltHover, { TiltEffectType } from './TiltHover'

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 sm:py-24 bg-gray-50/50 dark:bg-gray-950 relative overflow-hidden">
      <ParticleBackground color="#ec4899" count={80} speed={0.4} size={0.06} />
      <FloatingBlobs colors={['orange', 'red', 'yellow', 'pink']} />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-2">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => {
            const effectTypes: TiltEffectType[] = ['spotlight', 'borderGlow']
            const baseColors = ['rgba(236,72,153,0.03)', 'rgba(59,130,246,0.03)']
            const glareColors = ['rgba(236,72,153,0.4)', 'rgba(59,130,246,0.4)']

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                className="h-full"
              >
                <TiltHover
                  className="h-full rounded-2xl"
                  glareColor={glareColors[index % glareColors.length]}
                  baseColor={baseColors[index % baseColors.length]}
                  effectType={effectTypes[index % effectTypes.length]}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6 glass-card p-6 h-full rounded-2xl bg-white/70 dark:bg-gray-800/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-pink-500 dark:text-pink-400 font-bold mb-3">{item.date}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
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

export default Achievements
