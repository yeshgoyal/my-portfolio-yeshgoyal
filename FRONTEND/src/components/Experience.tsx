'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react'
import TiltHover from './TiltHover'

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Code-A-Nova",
      period: "2023 - Present",
      description: "Building modern web applications with React and improving user experiences.",
      achievements: [
        "Built doctor appointment website using React",
        "Improved UI/UX and form validation",
        "Implemented responsive design patterns",
        "Collaborated with backend team for API integration"
      ],
      technologies: ["React", "JavaScript", "CSS", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Python Developer",
      company: "CodeAlpha",
      period: "2023",
      description: "Developed Python applications and integrated various APIs.",
      achievements: [
        "Built Weather App with real-time data",
        "Created interactive Chatbot application",
        "Developed Calculator application",
        "Integrated third-party APIs for data fetching"
      ],
      technologies: ["Python", "API Integration", "JSON", "Data Processing"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block" />
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden lg:block" />

              <div className="lg:ml-20">
                <TiltHover>
                  <div className="glass-morphism p-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-white/40 dark:bg-gray-800/40 backdrop-blur-md">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                          <Briefcase className="w-5 h-5 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm" />
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm backdrop-blur-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltHover>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
