'use client'

import { motion } from 'framer-motion'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import FloatingBlobs from './FloatingBlobs'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-gray-950">
      
      {/* 3D Particles layer (deepest) */}
      <ParticleBackground color="#3b82f6" count={120} speed={0.6} size={0.07} />
      
      {/* The massive floating blurs layer (above particles, under content) */}
      <FloatingBlobs colors={['purple', 'blue', 'pink', 'cyan', 'emerald']} />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 dark:text-cyan-400 font-bold tracking-widest uppercase text-sm sm:text-base mb-3 lg:mb-4 animate-pulse">
              Welcome to my portfolio
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] sm:leading-[1.1] mb-4 sm:mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 animate-text-shimmer bg-[length:200%_200%]">
              Yesh Goyal
            </span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6"
          >
            Software Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-medium"
          >
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, fully responsive, and animated user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a href="mailto:yesh.goyal.750@gmail.com" className="btn-secondary w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5 sm:gap-6 mt-10 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/yeshgoyal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yeshgoyal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:yesh.goyal.750@gmail.com"
              className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors p-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors p-3 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              title="Resume"
            >
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right side floating element */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="order-1 lg:order-2 flex justify-center items-center relative"
        >
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-3xl opacity-50 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow"></div>
          <div className="relative text-[100px] sm:text-[140px] md:text-[180px] drop-shadow-2xl animate-float-slow transform transition-all duration-700 hover:scale-105">
            👨‍💻
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Scroll</span>
        <div className="w-[1px] h-10 sm:h-12 bg-gray-300 dark:bg-gray-700 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 50] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-full h-1/2 bg-blue-600 dark:bg-blue-400"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
