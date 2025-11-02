"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff, Check } from "lucide-react"

export default function RegisterForm() {
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
  }

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 text-primary/50" size={20} />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-primary/50" size={20} />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-foreground">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-primary/50" size={20} />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-primary/50 hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-primary/50" size={20} />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full pl-10 pr-10 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-primary/50 hover:text-primary transition-colors"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {passwordsMatch && <Check className="absolute right-10 top-3 text-primary" size={20} />}
        </div>
      </div>

      {/* Terms Agreement */}
      <label className="flex items-start gap-3 cursor-pointer pt-2">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="w-4 h-4 rounded border-border bg-input text-primary focus:ring-primary/50 cursor-pointer mt-1"
          required
        />
        <span className="text-sm text-foreground/70">
          I agree to the{" "}
          <Link href="/terms" className="text-primary hover:text-primary/80 font-semibold">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:text-primary/80 font-semibold">
            Privacy Policy
          </Link>
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || !agreedToTerms}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mt-6"
      >
        {isLoading ? "Creating account..." : "Create Account"}
      </button>

      {/* Sign In Link */}
      <p className="text-center text-foreground/70 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
          Sign in
        </Link>
      </p>
    </form>
  )
}
