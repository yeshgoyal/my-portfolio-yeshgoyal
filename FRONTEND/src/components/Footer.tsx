'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/yeshgoyal', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/yeshgoyal', label: 'LinkedIn' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:yeshgoyal656@gmail.com', label: 'Email' },
    { icon: <Phone className="w-4 h-4" />, href: 'tel:+917088706721', label: 'Phone' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-bold gradient-text mb-3">Yesh Goyal</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Frontend &amp; MERN Stack Developer building modern web experiences with clean code and beautiful designs.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.label === 'Email' || link.label === 'Phone' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400 truncate">yeshgoyal656@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91-7088706721</span>
              </div>
            </div>
            <div className="p-3.5 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 leading-relaxed">
                Open to freelance projects and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-400" />
            <span>by Yesh Goyal</span>
          </div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Yesh Goyal. All rights reserved.</p>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:shadow-lg transition-shadow"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
