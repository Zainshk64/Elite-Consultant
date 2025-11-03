"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500 to-blue-600 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts today and take the first step towards your international
            education journey.
          </p>

          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Book Free Consultation <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
