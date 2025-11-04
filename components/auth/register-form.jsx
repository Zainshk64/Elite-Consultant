"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { User, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react"

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Register:", formData)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background to-blue-50 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-6"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#EE7A36] to-orange-400  rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">EC</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-400">Start your journey with H&H Consultant</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 (123) 456-7890"
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="rounded mt-1" />
            <span className="text-gray-400">
              I agree to the{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#EE7A36] to-orange-400  text-white rounded-lg font-semibold hover:shadow-lg transition-all mt-6"
          >
            Create Account
          </motion.button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </section>
  )
}
