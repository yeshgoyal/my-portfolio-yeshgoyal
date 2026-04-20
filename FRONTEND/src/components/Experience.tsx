'use client'

import { motion } from 'framer-motion'
import { qualificationsData } from '../lib/data'
import ParticleBackground from './ParticleBackground'
import FloatingBlobs from './FloatingBlobs'

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <ParticleBackground color="#10b981" count={100} speed={0.5} size={0.06} />
      <FloatingBlobs colors={['emerald', 'cyan', 'blue', 'purple']} />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-2">
            My <span className="gradient-text">Qualifications</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-blue-200 dark:border-blue-900/50 pl-6 sm:pl-8 ml-4 sm:ml-6">
          {qualificationsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-white dark:ring-gray-900" />
              
              <div className="glass-card p-6 rounded-2xl bg-white/70 dark:bg-gray-800/80 hover:shadow-lg transition-shadow duration-300">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40 rounded-full">
                  {item.duration}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.degree}</h3>
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{item.institution}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
