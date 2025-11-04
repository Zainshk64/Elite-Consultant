"use client"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, ChevronRight, CheckCircle } from "lucide-react"

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    { id: "massage", name: "Massage Therapy", duration: "60 min", price: "$120" },
    { id: "facial", name: "Facial Treatments", duration: "45 min", price: "$95" },
    { id: "healing", name: "Energy Healing", duration: "50 min", price: "$85" },
    { id: "aromatherapy", name: "Aromatherapy Session", duration: "30 min", price: "$60" },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceSelect = (serviceId) => {
    setFormData((prev) => ({ ...prev, service: serviceId }))
  }

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({ ...prev, time }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setStep(1)
      setFormData({
        service: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        notes: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const isStepValid = () => {
    if (step === 1) return formData.service !== ""
    if (step === 2) return formData.date !== "" && formData.time !== ""
    if (step === 3) return formData.name && formData.email && formData.phone
    return false
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EE7A36] to-orange-400 py-14 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Book Your Session</h1>
          <p className="text-lg text-gray-400">Follow the steps below to secure your appointment</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  stepNum <= step ? "bg-primary text-primary-foreground" : "bg-muted text-gray-400"
                }`}
              >
                {stepNum < step ? <CheckCircle className="w-6 h-6" /> : stepNum}
              </div>
              {stepNum < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    stepNum < step ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100">Appointment Booked!</p>
                <p className="text-sm text-green-700 dark:text-green-200">
                  We'll send you a confirmation email shortly.
                </p>
              </div>
            </div>
          </div>
        )}

        {!submitted && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="animate-in fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Select a Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceSelect(service.id)}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                        formData.service === service.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-400 mb-3">{service.duration}</p>
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="animate-in fade-in space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Select Date & Time</h2>

                  <div className="mb-6">
                    <label className="flex items-center gap-2 text-foreground font-semibold mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-foreground font-semibold mb-3">
                      <Clock className="w-5 h-5 text-primary" />
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
                            formData.time === time
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="animate-in fade-in space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Information</h2>

                <div>
                  <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <User className="w-5 h-5 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requests or questions?"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between pt-8">
              <button
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Back
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepValid()}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepValid()}
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
