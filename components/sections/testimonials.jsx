"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      university: "Harvard University",
      image: "/student-testimonial.png",
      text: "HnH Consultant transformed my dream into reality. Their guidance was invaluable throughout the entire process.",
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
    <section className="py-16 md:py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 border border-orange-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-semibold tracking-wider">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear from students who achieved their dreams with HnH Consultant’s expert guidance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl border border-orange-100 hover:border-[#EE7A36] hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#EE7A36] text-[#EE7A36]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
