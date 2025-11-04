"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Briefcase, Award, CheckCircle } from "lucide-react"

export default function ServicesDetail() {
  const serviceDetails = [
    {
      icon: GraduationCap,
      title: "Education Visa Processing",
      description: "Complete visa assistance for all major study destinations",
      features: [
        "Document preparation and verification",
        "Interview coaching and mock tests",
        "Visa application tracking",
        "Post-visa support",
      ],
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "Intensive coaching programs for international tests",
      features: [
        "Personalized study plans",
        "Mock tests and practice materials",
        "One-on-one tutoring sessions",
        "Progress tracking",
      ],
    },
    {
      icon: Briefcase,
      title: "Career Counseling",
      description: "Professional guidance for career development",
      features: [
        "Career assessment and planning",
        "Resume and CV review",
        "Interview preparation",
        "Job placement assistance",
      ],
    },
    {
      icon: Award,
      title: "University Placement",
      description: "Direct partnerships with top global universities",
      features: [
        "Access to 500+ universities",
        "Scholarship opportunities",
        "Fast-track admissions",
        "Application strategy",
      ],
    },
  ]

  return (
    <section className="py-42 pb-16 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions designed to support every step of your international education journey
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#EE7A36] to-orange-400  rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                      <p className="text-gray-400 mt-1">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={`/helpful-service.png?height=400&width=400&query=service ${service.title}`}
                    alt={service.title}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
