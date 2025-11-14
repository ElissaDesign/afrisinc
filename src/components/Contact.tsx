'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle,
} from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@afrisinc.com',
      link: 'mailto:info@afrisinc.com',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+27 (0) 123 456 789',
      link: 'tel:+27123456789',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Johannesburg, South Africa',
      link: '#',
      color: 'from-orange-500 to-red-600',
    },
  ]

  const socialLinks = [
    { icon: Linkedin, link: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, link: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Facebook, link: '#', label: 'Facebook', color: 'hover:text-blue-700' },
    { icon: Instagram, link: '#', label: 'Instagram', color: 'hover:text-pink-600' },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey with Afrisinc? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{info.title}</h4>
                    <p className="text-slate-600">{info.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-800">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-slate-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-primary-50 to-accent-50"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                Business Inquiries
              </h3>
              <p className="text-slate-600 leading-relaxed">
                For partnerships, investment opportunities, or large-scale projects, please
                reach out to our business development team at{' '}
                <a
                  href="mailto:business@afrisinc.com"
                  className="text-primary-600 font-semibold hover:underline"
                >
                  business@afrisinc.com
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="glass-effect rounded-3xl p-8 md:p-10"
          >
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-primary-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
