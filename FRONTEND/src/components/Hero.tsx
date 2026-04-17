'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import TiltHover from './TiltHover';

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    'I build modern web experiences',
    'I create beautiful interfaces',
    'I solve complex problems',
    'I love clean code'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500" />
      
      {/* Dynamic Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeOut' }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-400/30 dark:bg-blue-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[80px] lg:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeOut' }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-purple-400/30 dark:bg-purple-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[80px] lg:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeOut' }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-pink-400/30 dark:bg-pink-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[80px] lg:blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 z-10 w-full max-w-7xl pt-20 lg:pt-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left w-full lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Yesh Goyal</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Frontend Developer | MERN Stack Developer
            </h2>

            <div className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 h-8">
              <span className="gradient-text font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex text-sm sm:text-base flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all text-center"
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-semibold shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all text-center"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://github.com/yeshgoyal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/yesh-goyal/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="mailto:yeshgoyal656@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Download className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Image with Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 flex justify-center lg:justify-end w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <TiltHover className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px]">
              <div className="w-full h-full rounded-full lg:rounded-3xl overflow-hidden border-4 border-white/50 backdrop-blur-sm dark:border-gray-800/50 shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] relative z-10 transition-transform duration-300">
                <img 
                  src={profileImg.src} 
                  alt="Yesh Goyal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Dynamic Glow effect */}
              <div className="absolute inset-0 rounded-full lg:rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 group-hover:opacity-40 blur-2xl lg:blur-3xl scale-105 group-hover:scale-110 transition-all duration-500 -z-0" />
            </TiltHover>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
