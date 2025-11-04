  "use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, Heart } from "lucide-react"

export default function About() {
  const values = [
    { icon: Users, title: "Student-Centric", description: "Your success is our priority" },
    { icon: Award, title: "Excellence", description: "We maintain highest standards" },
    { icon: Globe, title: "Global Reach", description: "Connections worldwide" },
    { icon: Heart, title: "Integrity", description: "Honest and ethical service" },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">About HnH Consultant</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Leading the way in international education consultancy since 2014
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 text-lg mb-4">
              Founded in 2014, HnH Consultant has been committed to transforming dreams into reality for thousands of
              students seeking global education opportunities.
            </p>
            <p className="text-gray-400 text-lg mb-4">
              With a team of experienced consultants and partnerships with over 500 universities worldwide, we provide
              comprehensive guidance that goes beyond just paperwork.
            </p>
            <p className="text-gray-400 text-lg">
              Our mission is to make international education accessible and achievable for everyone, regardless of their
              background or circumstances.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <img src="/professional-team-consulting.jpg" alt="Our Team" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-card rounded-xl border border-orange-300/40 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EE7A36] to-orange-400  rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#EE7A36] to-orange-300  rounded-xl p-12 text-white">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5000+", label: "Students Guided" },
            { number: "500+", label: "Partner Universities" },
            { number: "98%", label: "Success Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
