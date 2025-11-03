"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUp, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6"
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.8, ease: "fadeIn" }}
      >
        <motion.nav
          className={`relative w-full max-w-6xl transition-all duration-500 ${
            scrolled
              ? "bg-white/30 backdrop-blur-lg border border-orange-300/40 shadow shadow-orange-200/40"
              : "bg-white/40 backdrop-blur-xl border border-orange-200/20"
          } rounded-2xl`}
          animate={{ y: scrolled ? -10 : 0, scale: scrolled ? 0.98 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-orange-50/20 to-white/10 rounded-2xl" />
          
          <div className="relative px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group relative z-10">
                <motion.div
                  className="relative w-12 h-12 bg-gradient-to-br from-[#EE7A36] to-orange-400 rounded-2xl flex items-center justify-center overflow-hidden"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-600/30 animate-pulse" />
                  <Sparkles className="text-white" size={24} />
                </motion.div>
                <div className="hidden lg:block">
                  <span className="block font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-700 transition-all duration-500">
                    HnH Consultant
                  </span>
                  <span className="block text-xs text-gray-500 -mt-1">Your Success Partner</span>
                </div>
              </a>

              {/* Nav Items */}
              <div className="hidden md:flex items-center gap-2 rounded-xl px-3 py-2  ">
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href}>
                    <motion.div
                      className="relative px-5 py-2.5 group cursor-pointer"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative z-10 text-md font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                        {item.label}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-100/20 rounded-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </a>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <a href="/register" className="hidden sm:block">
                  <motion.button
                    className="relative px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-400 text-white text-sm font-semibold rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Register Now
                     
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EE7A36] to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  </motion.button>
                </a>

                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-3 bg-orange-100/80 rounded-xl text-orange-600 hover:bg-orange-200 transition-colors border border-orange-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-2xl border-l border-orange-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="text-white" size={20} />
                    </div>
                    <span className="font-bold text-lg text-gray-800">Menu</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-orange-100 rounded-lg transition-colors"
                  >
                    <X className="text-orange-600" size={24} />
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-5 py-4 rounded-xl bg-orange-50 hover:bg-orange-100 border border-transparent hover:border-orange-300 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-gray-700 group-hover:text-orange-600 font-medium transition-colors">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <motion.Link
                  to="/register"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsOpen(false)}
                  className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-400/30 transition-all"
                >
                  Register Now
                
                </motion.Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-md shadow-orange-400/40 backdrop-blur-xl border border-orange-300 group"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Back to top"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={24} />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EE7A36] to-orange-400 rounded blur opacity-40 group-hover:opacity-60 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
