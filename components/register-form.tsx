"use client"

import { useState } from "react"
import { Mail, Lock, User, Eye, EyeOff, Check, GraduationCap, Sparkles, ArrowRight, Globe, Award } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    alert("Account created successfully!")
  }

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  const benefits = [
    { icon: GraduationCap, text: "Access to 500+ Universities" },
    { icon: Globe, text: "Study in 20+ Countries" },
    { icon: Award, text: "98% Visa Success Rate" },
  ]

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl bg-white shadow-md  rounded-3xl border border-gray-200 overflow-hidden relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative hidden lg:block bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 p-12">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80')" }} 
            />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EE7A36] to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">H&H Consultant</h3>
                    <p className="text-[#EE7A36] text-sm font-semibold">Your Success Partner</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                    Start Your
                    <br />
                    <span className="bg-gradient-to-r from-[#EE7A36] to-orange-500 bg-clip-text text-transparent">
                      Global Journey
                    </span>
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Join thousands of students who achieved their dream of studying abroad
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 shadow-sm"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#EE7A36] to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow">
                        <benefit.icon className="text-white" size={20} />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-8 text-sm text-gray-600"
              >
                <div>
                  <span className="text-3xl font-bold text-[#EE7A36]">5000+</span>
                  <p>Students Guided</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-[#EE7A36]">98%</span>
                  <p>Success Rate</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-[#EE7A36]/30 rounded-full mb-4">
                <Sparkles className="text-[#EE7A36]" size={16} />
                <span className="text-[#EE7A36] text-sm font-semibold">GET STARTED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Create Account</h2>
              <p className="text-gray-600">Join H&H Consultant and unlock your potential</p>
            </motion.div>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#EE7A36] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#EE7A36] transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {passwordsMatch && (
                    <Check className="absolute right-14 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-start gap-3 cursor-pointer pt-2"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
              >
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 rounded-md border-gray-300 bg-white text-[#EE7A36] focus:ring-[#EE7A36]/20 cursor-pointer mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="/terms" className="text-[#EE7A36] hover:text-orange-600 font-semibold transition-colors">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-[#EE7A36] hover:text-orange-600 font-semibold transition-colors">
                    Privacy Policy
                  </a>
                </span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || !agreedToTerms}
                className="w-full py-4 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  "Creating account..."
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center text-gray-600 text-sm"
              >
                Already have an account?{" "}
                <Link href="/login" className="text-[#EE7A36] hover:text-orange-600 font-semibold transition-colors">
                  Sign in
                </Link>
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}