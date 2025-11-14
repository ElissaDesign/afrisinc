'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Award } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="section-padding bg-white/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Afrisinc</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mb-8" />
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are an international parent company headquartered in Africa, dedicated to
              driving innovation and excellence across multiple industries.
            </p>
          </motion.div>

          {/* Story */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-3xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
              Our Story
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Afrisinc was born from a vision to position Africa at the forefront of global
              innovation. We recognized the continent&apos;s untapped potential and decided to create
              a multi-sector powerhouse that bridges the gap between African excellence and
              international standards.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we operate across four core departments—Media & Entertainment, Technology &
              Software Engineering, Product Sales & E-commerce, and Consulting Services—each
              designed to deliver world-class solutions while empowering African talent and
              businesses to thrive on the global stage.
            </p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'To empower Africa through cutting-edge technology, world-class media, and innovative business solutions that create lasting global impact.',
                color: 'from-blue-500 to-primary-600',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description:
                  "To become Africa's leading international parent company, setting the benchmark for innovation, excellence, and sustainable growth across all sectors.",
                color: 'from-primary-500 to-purple-600',
              },
              {
                icon: Award,
                title: 'Our Values',
                description:
                  'Innovation, excellence, integrity, and African pride. We believe in pushing boundaries while maintaining the highest ethical standards.',
                color: 'from-accent-500 to-red-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
