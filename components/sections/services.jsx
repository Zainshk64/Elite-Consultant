"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, BookOpen, Award } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Education Visa",
      description: "Expert guidance through the entire visa process with proven success rates for top destinations.",
      features: ["USA", "UK", "Canada", "Australia"],
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "Comprehensive coaching for IELTS, TOEFL, SAT, GRE with personalized study plans.",
      features: ["IELTS", "TOEFL", "SAT", "GRE"],
    },
    {
      icon: Briefcase,
      title: "Career Counseling",
      description: "Professional guidance to shape your career path and achieve your professional goals.",
      features: ["Resume Review", "Interview Prep", "Career Planning"],
    },
    {
      icon: Award,
      title: "University Placement",
      description: "Direct access to partnerships with world-renowned universities and scholarship opportunities.",
      features: ["Top 100 Universities", "Scholarships", "Fast Track"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Comprehensive Solutions for Your Success</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer a complete range of services designed to support your educational and career aspirations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group p-6 bg-card rounded-xl border border-border hover:border-blue-600 transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
