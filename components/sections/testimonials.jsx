"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      university: "Harvard University",
      image: "/student-testimonial.png",
      text: "Elite Consultant transformed my dream into reality. Their guidance was invaluable throughout the entire process.",
      rating: 5,
    },
    {
      name: "Fatima Ali",
      university: "Oxford University",
      image: "/student-testimonial-professional.jpg",
      text: "Professional, reliable, and results-oriented. I couldn't have asked for better support.",
      rating: 5,
    },
    {
      name: "Hassan Ahmed",
      university: "MIT",
      image: "/student-career-success.jpg",
      text: "The personalized attention and expertise made all the difference in my application journey.",
      rating: 5,
    },
  ]

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
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Students Say</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-card rounded-xl border border-border hover:border-cyan-600 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-400 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
