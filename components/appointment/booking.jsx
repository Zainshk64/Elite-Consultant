"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [booked, setBooked] = useState(false)
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const services = [
    { id: "visa", name: "Education Visa Consultation", icon: "🎓" },
    { id: "test", name: "Test Preparation Guidance", icon: "📚" },
    { id: "career", name: "Career Counseling", icon: "💼" },
    { id: "placement", name: "University Placement", icon: "🏆" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooked(true)
  }

  if (booked) {
    return (
      <section className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-background to-green-50 dark:to-slate-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-6"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={40} className="text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-gray-400 mb-6">
            Thank you for scheduling a consultation. We'll contact you shortly to confirm your appointment details.
          </p>
          <div className="bg-card rounded-lg p-6 mb-6 border border-border">
            <p className="text-sm text-gray-400 mb-2">Service:</p>
            <p className="font-semibold mb-4">{services.find((s) => s.id === formData.serviceType)?.name}</p>
            <p className="text-sm text-gray-400 mb-2">Email:</p>
            <p className="font-semibold">{formData.email}</p>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold"
          >
            Return Home
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-28 bg-gradient-to-br from-background to-blue-50 dark:to-slate-900 pb-12">
      <div className="w-full max-w-2xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Consultation</h1>
            <p className="text-lg text-gray-400">Schedule a meeting with our expert consultants</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center flex-1">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all ${
                    s <= step
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "bg-muted text-gray-400"
                  }`}
                >
                  {s}
                </motion.div>
                <span className="text-sm text-gray-400">
                  {s === 1 ? "Service" : s === 2 ? "Details" : "Confirm"}
                </span>
                {s < 3 && <div className={`w-full h-1 mt-4 ${s < step ? "bg-green-600" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <motion.label
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.serviceType === service.id
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          : "border-border hover:border-blue-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-3xl mb-2 block">{service.icon}</span>
                      <span className="font-semibold">{service.name}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Choose Date & Time</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>

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
                      required
                      className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

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
                      required
                      className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

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
                      required
                      className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals..."
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-all"
                >
                  Previous
                </motion.button>
              )}

              {step < 3 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    if (step === 1 && !formData.serviceType) return
                    if (step === 2 && (!formData.date || !formData.time)) return
                    setStep(step + 1)
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Confirm Booking
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
