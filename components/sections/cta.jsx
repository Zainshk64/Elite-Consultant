"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3230122/pexels-photo-3230122.jpeg')", // 🗽 Statue of Liberty with sky background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EE7A36]/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts today and take the first step toward your international
            education journey.
          </p>

          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#EE7A36] rounded-xl font-bold hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Book Free Consultation <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
