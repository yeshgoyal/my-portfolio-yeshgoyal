'use client'

import { motion } from 'framer-motion'
import { certificationsData } from '../lib/data'
import ParticleBackground from './ParticleBackground'
import FloatingBlobs from './FloatingBlobs'
import Image from 'next/image'
import TiltHover, { TiltEffectType } from './TiltHover'

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 sm:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <ParticleBackground color="#0ea5e9" count={120} speed={0.5} size={0.05} />
      <FloatingBlobs colors={['cyan', 'blue', 'emerald', 'purple']} />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-2">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((item, index) => {
            const effectTypes: TiltEffectType[] = ['spotlight', 'borderGlow']
            const baseColors = ['rgba(14,165,233,0.03)', 'rgba(59,130,246,0.03)']
            const glareColors = ['rgba(14,165,233,0.4)', 'rgba(59,130,246,0.4)']

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  <div className="glass-card p-5 h-full rounded-2xl glow-border bg-white/70 dark:bg-gray-800/80 transition-all duration-300 flex flex-col">
                    <div className="w-full h-40 relative overflow-hidden rounded-xl mb-4 shadow-md group-hover:scale-[1.02] transition-transform">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{item.title}</h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 flex-1">{item.issuer}</p>
                    <p className="text-xs font-bold text-blue-500 mt-3 uppercase tracking-wider">{item.date}</p>
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

export default Certifications
