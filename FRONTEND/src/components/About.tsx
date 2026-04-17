'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Lightbulb, Target } from 'lucide-react'
import TiltHover from './TiltHover'
import { useRef } from 'react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Passionate about tackling complex challenges and finding elegant solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "UI/UX Focus",
      description: "Creating intuitive and visually appealing user interfaces"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Consistency",
      description: "Maintaining clean, maintainable, and well-structured code"
    }
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="about" ref={containerRef} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative background circles */}
      <motion.div style={{ y: yParallax }} className="absolute -left-20 top-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: yParallax }} className="absolute right-0 bottom-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I'm <span className="gradient-text">Yesh Goyal</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate B.Tech CSE student with a strong focus on frontend development and building real-world projects. 
              I love creating modern web experiences that combine beautiful design with powerful functionality.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development started with a curiosity about how websites work, and it has evolved into a 
              passion for creating digital solutions that make a difference. I specialize in the MERN stack and enjoy 
              working with modern frontend technologies to build responsive and user-friendly applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or learning about the latest trends in web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <TiltHover>
                  <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white shadow-lg">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                </TiltHover>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
