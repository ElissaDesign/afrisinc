'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Globe2,
  Zap,
  Shield,
  Rocket,
  Users2,
  Award,
  TrendingUp,
  Heart,
} from 'lucide-react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const reasons = [
    {
      icon: Globe2,
      title: 'Global Vision',
      description:
        'We operate with an international mindset while staying rooted in African values and innovation.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description:
        'Cutting-edge technology and creative solutions are at the core of everything we do.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Strong Leadership',
      description:
        'Experienced leadership team driving strategic growth and sustainable success.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Rocket,
      title: 'Future-Driven',
      description:
        'We don\'t just adapt to the future—we build it with forward-thinking strategies.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Users2,
      title: 'Expert Team',
      description:
        'World-class professionals across media, technology, commerce, and consulting.',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description:
        'Uncompromising commitment to quality and excellence in every project we undertake.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Proven Growth',
      description:
        'Track record of sustainable growth and successful project delivery across sectors.',
      color: 'from-teal-500 to-green-600',
    },
    {
      icon: Heart,
      title: 'African Pride',
      description:
        'Showcasing African excellence on the global stage while empowering local talent.',
      color: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-white/50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Afrisinc</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine African excellence with global standards to deliver unparalleled value
            across all our sectors.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {reason.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work with <span className="gradient-text">Africa&apos;s Future</span>?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join us in building innovative solutions that make a global impact while
              celebrating African excellence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
