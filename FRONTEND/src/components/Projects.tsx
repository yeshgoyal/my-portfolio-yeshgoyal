'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import TiltHover from './TiltHover'

const Projects = () => {
  const projects = [
    {
      title: "Maa Ke Hath Khana",
      description: "A comprehensive MERN stack food ordering platform with seamless user experience and secure payment integration.",
      image: "/api/placeholder/600/400",
      features: [
        "Complete food ordering system",
        "Razorpay payment integration",
        "User authentication & authorization",
        "Responsive UI/UX design",
        "Real-time order tracking",
        "Admin dashboard"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Razorpay", "JWT", "Tailwind CSS"],
      liveDemo: "https://maakehathkhana.com",
      github: "https://github.com/yeshgoyal/maakehathkhana",
      featured: true
    },
    {
      title: "Doctor Appointment System",
      description: "A modern web application for booking doctor appointments with intuitive interface and form validation.",
      image: "/api/placeholder/600/400",
      features: [
        "Doctor appointment booking",
        "Patient management system",
        "Advanced form validation",
        "Responsive design",
        "Real-time availability"
      ],
      technologies: ["React", "JavaScript", "CSS", "Tailwind CSS", "REST APIs"],
      liveDemo: "https://doctor-appointments.com",
      github: "https://github.com/yeshgoyal/doctor-appointments",
      featured: false
    },
    {
      title: "Weather App",
      description: "A Python-based weather application that fetches real-time weather data from external APIs.",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time weather data",
        "Location-based search",
        "Weather forecasts",
        "Beautiful UI",
        "API integration"
      ],
      technologies: ["Python", "API Integration", "JSON", "Data Processing"],
      liveDemo: "https://weather-app-demo.com",
      github: "https://github.com/yeshgoyal/weather-app",
      featured: false
    },
    {
      title: "Interactive Chatbot",
      description: "An intelligent chatbot application built with Python that provides conversational AI capabilities.",
      image: "/api/placeholder/600/400",
      features: [
        "Natural language processing",
        "Interactive conversations",
        "Context awareness",
        "User-friendly interface",
        "Real-time responses"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "API Integration"],
      liveDemo: "https://chatbot-demo.com",
      github: "https://github.com/yeshgoyal/chatbot",
      featured: false
    },
    {
      title: "Calculator Application",
      description: "A feature-rich calculator application with advanced mathematical operations and clean interface.",
      image: "/api/placeholder/600/400",
      features: [
        "Basic & advanced operations",
        "History tracking",
        "Keyboard shortcuts",
        "Responsive design",
        "Error handling"
      ],
      technologies: ["Python", "Tkinter", "Mathematical Operations"],
      liveDemo: "https://calculator-demo.com",
      github: "https://github.com/yeshgoyal/calculator",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group h-full ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <TiltHover className="h-full w-full">
                <div className="glass-morphism rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-white/40 dark:bg-gray-800/40 backdrop-blur-md">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      <Star className="w-4 h-4" />
                      <span>Featured</span>
                    </motion.div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary text-center flex items-center justify-center space-x-2"
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
                      className="flex-1 btn-secondary text-center flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </TiltHover>
          </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yeshgoyal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
