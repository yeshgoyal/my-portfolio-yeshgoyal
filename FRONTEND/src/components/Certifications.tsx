'use client'

import { motion } from 'framer-motion'
import { FileBadge, Award, Star } from 'lucide-react'
import TiltHover from './TiltHover'

const Certifications = () => {
  const certifications = [
    {
      icon: <FileBadge className="w-8 h-8" />,
      title: "Python Developer",
      issuer: "CodeAlpha",
      date: "2023",
      description: "Completed comprehensive Python development course covering advanced concepts and practical applications.",
      skills: ["Python Basics", "Data Structures", "API Integration", "Web Development"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Frontend Development",
      issuer: "Code-A-Nova",
      date: "2023",
      description: "Specialized in modern frontend technologies including React, responsive design, and UI/UX principles.",
      skills: ["React", "JavaScript", "CSS", "Tailwind CSS", "UI/UX"],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "GenAI Mastermind",
      issuer: "Tech Innovation Lab",
      date: "2023",
      description: "Advanced certification in Generative AI and machine learning applications for modern web development.",
      skills: ["AI Integration", "Machine Learning", "NLP", "AI Tools"],
      color: "from-green-400 to-teal-400"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltHover className="h-full w-full">
                <div className="glass-morphism p-6 rounded-xl h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-white/40 dark:bg-gray-800/40 backdrop-blur-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
                      {cert.icon}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{cert.issuer}</p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltHover>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my knowledge and staying up-to-date with the latest technologies and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Advanced React", "Next.js", "TypeScript", "Node.js", 
                "MongoDB", "GraphQL", "Docker", "AWS", "UI/UX Design"
              ].map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
