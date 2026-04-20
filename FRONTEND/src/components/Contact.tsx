'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1800))
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'yeshgoyal656@gmail.com', href: 'mailto:yeshgoyal656@gmail.com' },
    { icon: <Phone className="w-4 h-4" />, label: 'Phone', value: '+91-7088706721', href: 'tel:+917088706721' },
    { icon: <Github className="w-4 h-4" />, label: 'GitHub', value: 'github.com/yeshgoyal', href: 'https://github.com/yeshgoyal' },
    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', value: 'linkedin.com/in/yeshgoyal', href: 'https://linkedin.com/in/yeshgoyal' },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            I'm always interested in new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/60 shadow-sm flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.label === 'Email' || info.label === 'Phone' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-4 p-3.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-transparent hover:border-blue-100 dark:hover:border-blue-800/40 transition-all duration-200"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 dark:text-gray-500">{info.label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700/60">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
              <p>Available for remote work worldwide. Open to freelance and full-time opportunities.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/60 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="p-4 bg-green-100 dark:bg-green-900/40 rounded-full">
                  <Send className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-1">Message Sent!</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      {field.label} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
