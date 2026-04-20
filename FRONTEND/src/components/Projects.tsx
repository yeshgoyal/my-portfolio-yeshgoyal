'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import TiltHover, { TiltEffectType } from './TiltHover'
import Image from 'next/image'
import { projectsData } from '../lib/data'
import ParticleBackground from './ParticleBackground'
import FloatingBlobs from './FloatingBlobs'

const Projects = () => {
  // Array of dynamic glare colors
  const glareColors = [
    'rgba(59, 130, 246, 0.4)', // blue-500
    'rgba(168, 85, 247, 0.4)', // purple-500
    'rgba(34, 197, 94, 0.4)',  // green-500
    'rgba(249, 115, 22, 0.4)', // orange-500
    'rgba(236, 72, 153, 0.4)', // pink-500
  ]
  
  // Base overlay colors to give each card a distinct physical look
  const baseCardColors = [
    'rgba(59, 130, 246, 0.03)', // subtle blue
    'rgba(168, 85, 247, 0.03)', // subtle purple 
    'rgba(34, 197, 94, 0.03)',  // subtle green
  ]

  // Various hover mechanics
  const effectTypes: TiltEffectType[] = ['glare', 'spotlight', 'borderGlow']

  return (
    <section id="projects" className="py-20 sm:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background layer */}
      <ParticleBackground color="#8b5cf6" count={150} speed={0.5} size={0.06} />
      <FloatingBlobs colors={['emerald', 'blue', 'cyan', 'purple']} />

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
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-lg mx-auto text-sm sm:text-base px-4">
            A selection of projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        {/* Grid: 2 columns for Desktop/Tablet/Laptop, 1 for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const glowColor = glareColors[index % glareColors.length]
            const baseColor = baseCardColors[index % baseCardColors.length]
            const effectType = effectTypes[index % effectTypes.length]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="group flex flex-col h-full"
              >
                <TiltHover 
                  className="h-full w-full rounded-2xl" 
                  glareColor={glowColor}
                  baseColor={baseColor}
                  effectType={effectType}
                >
                  <div className="flex flex-col h-full glass-card rounded-2xl glow-border overflow-hidden transition-all duration-300">
                    
                    {/* Project Image placeholder */}
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          FEATURED
                        </div>
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 sm:p-8 relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-3 group-hover:dark:to-gray-100 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-shrink-0">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 3).map((f, fi) => (
                          <span key={fi} className="text-[10px] font-bold tracking-wider uppercase bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8 flex-1 content-start">
                        {project.technologies.map((tech, ti) => (
                          <span key={ti} className="text-[10px] font-bold tracking-wider uppercase bg-blue-50/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-700/30 shadow-[inset_0_1px_rgba(255,255,255,0.2)]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4 mt-auto">
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 rounded-xl"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 btn-secondary flex items-center justify-center gap-2 py-3 rounded-xl"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </TiltHover>
              </motion.div>
            )
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yeshgoyal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-[1.5px]"
          >
            <Github className="w-5 h-5" />
            <span className="font-bold">View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
