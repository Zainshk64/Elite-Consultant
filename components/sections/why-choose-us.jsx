"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Target, TrendingUp } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced consultants with 10+ years in international education",
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Customized solutions tailored to your unique goals and circumstances",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98% success rate with consistent track record of student placements",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "Complete guidance from application to visa approval and beyond",
    },
  ]

  return (
  <section className="py-16 md:py-24 bg-gradient-to-br from-white to-orange-50  transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-yellow-500">
        Why Choose H&H Consultant
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        We stand out because of our commitment to excellence and student success
      </p>
    </motion.div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reasons.map((reason, index) => {
        const Icon = reason.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white  rounded-xl shadow-lg hover:shadow-xl border border-orange-100 hover:border-orange-300 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#EE7A36] to-amber-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              {reason.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{reason.description}</p>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>

  )
}
