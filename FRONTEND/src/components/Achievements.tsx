'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Medal } from 'lucide-react'
import TiltHover from './TiltHover'

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "1st Position",
      description: "Treasure Hunt Competition",
      details: "Led team to victory in technical treasure hunt competition",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Project",
      description: "College Hackathon 2023",
      details: "Developed innovative solution for real-world problem",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Code-A-Nova Recognition",
      details: "Recognized for outstanding contribution to frontend development",
      color: "from-green-400 to-teal-400"
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center h-full"
            >
              <TiltHover className="h-full w-full">
                <div className="glass-morphism p-8 rounded-xl h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-white/40 dark:bg-gray-800/40 backdrop-blur-md">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} text-white mb-6 shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-3">
                    {achievement.description}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {achievement.details}
                  </p>
                </div>
              </TiltHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
