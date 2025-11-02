"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-blue-50 dark:to-slate-900 transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"
          animate={{ y: scrollY * 0.5 }}
          transition={{ type: "spring", damping: 100, stiffness: 100 }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl opacity-30"
          animate={{ y: -scrollY * 0.5 }}
          transition={{ type: "spring", damping: 100, stiffness: 100 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
            >
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Welcome to Elite Consultant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance"
            >
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Global Opportunities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-md"
            >
              We guide students and professionals through their international education and career journey with
              expertise, dedication, and proven strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/appointment"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                Book Consultation <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center justify-center"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: "5000+", label: "Students Guided" },
                { number: "50+", label: "Partner Universities" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600">{stat.number}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="relative"
            >
              <img src="/professional-consultant-student-success.jpg" alt="Student Success" className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-2xl" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              className="absolute bottom-10 left-5 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            >
              <div className="text-sm font-semibold text-blue-600 mb-1">Success Story</div>
              <p className="text-sm text-muted-foreground">Helped 500+ students achieve their dreams in 2024</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
