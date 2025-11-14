'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Film,
  Code2,
  ShoppingCart,
  Users,
  Youtube,
  Newspaper,
  Mic,
  Smartphone,
  Globe,
  Package,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'

export default function Departments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const departments = [
    {
      icon: Film,
      title: 'Media & Entertainment',
      description:
        'Creating captivating content that informs, entertains, and inspires audiences worldwide.',
      gradient: 'from-red-500 via-pink-500 to-purple-600',
      services: [
        { icon: Youtube, text: 'YouTube Channels' },
        { icon: Newspaper, text: 'News & Blogs' },
        { icon: Mic, text: 'Podcasts' },
        { icon: Film, text: 'Film Production' },
      ],
    },
    {
      icon: Code2,
      title: 'Technology & Software Engineering',
      description:
        'Building cutting-edge software solutions that drive digital transformation and innovation.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-600',
      services: [
        { icon: Smartphone, text: 'Mobile Apps' },
        { icon: Globe, text: 'Web Applications' },
        { icon: Code2, text: 'SaaS Solutions' },
        { icon: Globe, text: 'API Development' },
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Product Sales & E-commerce',
      description:
        'Delivering quality products through innovative e-commerce platforms and digital marketplaces.',
      gradient: 'from-orange-500 via-amber-500 to-yellow-600',
      services: [
        { icon: Package, text: 'Digital Products' },
        { icon: ShoppingCart, text: 'Physical Products' },
        { icon: Globe, text: 'Online Platforms' },
        { icon: TrendingUp, text: 'Market Analytics' },
      ],
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description:
        'Providing expert guidance and strategic insights to help businesses scale and succeed.',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      services: [
        { icon: Code2, text: 'Tech Consulting' },
        { icon: Film, text: 'Media Consulting' },
        { icon: TrendingUp, text: 'Brand Strategy' },
        { icon: Lightbulb, text: 'Innovation Consulting' },
      ],
    },
  ]

  return (
    <section id="departments" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Departments</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Four powerful departments working in synergy to deliver exceptional value across
            multiple industries.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative glass-effect rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <dept.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-500 transition-all duration-300">
                  {dept.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {dept.description}
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {dept.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/50 group-hover:bg-white/80 transition-all duration-300"
                    >
                      <service.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700">
                        {service.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${dept.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Future Expansion Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-2xl px-8 py-4">
            <Lightbulb className="w-6 h-6 text-accent-500" />
            <span className="text-slate-700 font-medium">
              <span className="font-bold text-primary-600">Coming Soon:</span> Industrial
              Manufacturing & International Trade Expansion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
