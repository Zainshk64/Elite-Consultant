"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "@/context/theme-context"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">EC</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Elite Consultant</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <Link
              href="/register"
              className="hidden sm:block px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Register
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-border"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
