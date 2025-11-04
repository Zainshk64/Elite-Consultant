"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

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
    { id: "visa", name: "Education Visa Consultation", icon: "🎓", description: "Expert guidance for student visa applications" },
    { id: "test", name: "Test Preparation Guidance", icon: "📚", description: "Comprehensive IELTS, TOEFL, SAT preparation" },
    { id: "career", name: "Career Counseling", icon: "💼", description: "Professional career path guidance" },
    { id: "placement", name: "University Placement", icon: "🏆", description: "Top university admission assistance" },
  ]

  // Step images for visual representation
  const stepImages = {
    1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", // Team collaboration
    2: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80", // Calendar planning
    3: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg", // Professional meeting
  }

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
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-orange-900/95 to-orange-800/95" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] via-[#000000aa]/80 to-[#00000088]/30" />


        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center max-w-lg px-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <CheckCircle size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-3 text-white">Booking Confirmed!</h1>
          <p className="text-gray-200 mb-8 text-lg">
            Thank you for scheduling a consultation. We'll contact you shortly to confirm your appointment details.
          </p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="text-left space-y-3">
              <div>
                <p className="text-sm text-gray-300 mb-1">Service:</p>
                <p className="font-semibold text-white text-lg">{services.find((s) => s.id === formData.serviceType)?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-1">Date & Time:</p>
                <p className="font-semibold text-white">{formData.date} at {formData.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-1">Contact:</p>
                <p className="font-semibold text-white">{formData.email}</p>
              </div>
            </div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Return Home
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center py-42">
      {/* Dynamic Background Image based on step */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-700"
        style={{
          backgroundImage: `url('${stepImages[step]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/40 via-gray-900/60 to-slate-800/50 backdrop-blur-sm" />
      </div>

      {/* Animated particles/decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#EE7A36]/30 rounded-full"
            animate={{
              x: [Math.random() * 1920, Math.random() * 1920],
              y: [Math.random() * 1080, Math.random() * 1080],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#EE7A36]/20 to-orange-500/20 p-8 sm:p-10 text-center border-b border-white/10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EE7A36]/30 rounded-full text-white text-sm font-medium mb-4"
            >
              <Sparkles size={16} />
              Premium Consultation Service
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">
              Book Your Consultation
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Schedule a personalized meeting with our expert consultants
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            {/* Progress Steps - Enhanced Design */}
            <div className="flex justify-between mb-10 relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/10" />
              <div 
                className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-[#EE7A36] to-orange-500 transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
              {[1, 2, 3].map((s) => (
                <div key={s} className="relative flex flex-col items-center flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 cursor-pointer ${
                      s <= step
                        ? "bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white shadow-lg"
                        : "bg-white/10 text-gray-400 border border-white/20"
                    }`}
                    onClick={() => s < step && setStep(s)}
                  >
                    {s < step ? <CheckCircle size={20} /> : s}
                  </motion.div>
                  <span className={`text-xs sm:text-sm font-medium ${s <= step ? "text-white" : "text-gray-400"}`}>
                    {s === 1 ? "Select Service" : s === 2 ? "Pick Time" : "Your Details"}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Service Selection - Enhanced Cards */}
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-2">Choose Your Service</h2>
                  <p className="text-gray-300 mb-6">Select the consultation type that best fits your needs</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <motion.label
                        key={service.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                          formData.serviceType === service.id
                            ? "bg-gradient-to-br from-[#EE7A36]/30 to-orange-500/30 border-2 border-[#EE7A36] shadow-xl"
                            : "bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={service.id}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{service.icon}</span>
                          <div className="flex-1">
                            <span className="font-semibold text-white text-lg block mb-1">
                              {service.name}
                            </span>
                            <span className="text-sm text-gray-300">
                              {service.description}
                            </span>
                          </div>
                        </div>
                        {formData.serviceType === service.id && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-6 h-6 bg-[#EE7A36] rounded-full flex items-center justify-center"
                          >
                            <CheckCircle size={16} className="text-white" />
                          </motion.div>
                        )}
                      </motion.label>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date & Time - Modern Design */}
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Session</h2>
                  <p className="text-gray-300 mb-6">Choose your preferred date and time for the consultation</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE7A36] focus:border-transparent transition-all"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE7A36] focus:border-transparent transition-all"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Available Time Slots Suggestion */}
                  <div className="bg-gradient-to-r from-[#EE7A36]/10 to-orange-500/10 rounded-xl p-4 border border-[#EE7A36]/20">
                    <p className="text-sm text-gray-300 mb-2">💡 Suggested time slots:</p>
                    <div className="flex flex-wrap gap-2">
                      {["09:00", "11:00", "14:00", "16:00"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time }))}
                          className="px-3 py-1 bg-white/10 hover:bg-[#EE7A36]/30 rounded-lg text-sm text-white transition-all"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Personal Details - Clean Forms */}
              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-2">Your Information</h2>
                  <p className="text-gray-300 mb-6">Please provide your contact details</p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE7A36] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-3">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE7A36] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-3">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EE7A36]" size={20} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+92 300 1234567"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE7A36] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Additional Message (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-[#EE7A36]" size={20} />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your educational goals or any specific requirements..."
                          rows="4"
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE7A36] focus:border-transparent transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons - Enhanced Design */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                {step > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Previous
                  </motion.button>
                )}

                {step < 3 ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      if (step === 1 && !formData.serviceType) {
                        alert("Please select a service type")
                        return
                      }
                      if (step === 2 && (!formData.date || !formData.time)) {
                        alert("Please select both date and time")
                        return
                      }
                      setStep(step + 1)
                    }}
                    disabled={
                      (step === 1 && !formData.serviceType) ||
                      (step === 2 && (!formData.date || !formData.time))
                    }
                    className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      ((step === 1 && !formData.serviceType) || (step === 2 && (!formData.date || !formData.time)))
                        ? "bg-gray-500/30 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#EE7A36] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    Next Step
                    <ArrowRight size={18} />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-[#EE7A36] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={18} />
                    Confirm Booking
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}