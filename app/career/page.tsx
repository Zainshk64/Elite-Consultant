"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Heart,
  Trophy,
  Clock,
  Home,
  Coffee,
  ArrowRight,
  Upload,
  CheckCircle,
  Building2,
  Target,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const jobs = [
    {
      id: "dev-1",
      title: "Frontend Developer",
      type: "Full-Time",
      location: "Lahore, Pakistan (Hybrid)",
      salary: "PKR 120K - 180K",
      dept: "Engineering",
    },
    {
      id: "design-1",
      title: "UI/UX Designer",
      type: "Full-Time",
      location: "Remote",
      salary: "PKR 100K - 150K",
      dept: "Design",
    },
    {
      id: "marketing-1",
      title: "Digital Marketing Specialist",
      type: "Full-Time",
      location: "Karachi, Pakistan",
      salary: "PKR 90K - 130K",
      dept: "Marketing",
    },
  ];

  const benefits = [
    { icon: Home, color: "bg-green-500", title: "Hybrid & Remote Work" },
    { icon: Coffee, color: "bg-orange-500", title: "Flexible Hours" },
    { icon: Trophy, color: "bg-purple-500", title: "Performance Bonuses" },
    { icon: Heart, color: "bg-red-500", title: "Health Insurance" },
    { icon: Sparkles, color: "bg-yellow-500", title: "Learning Budget" },
    { icon: Zap, color: "bg-blue-500", title: "Fast Growth Track" },
  ];

  const hiringSteps = [
    { step: 1, title: "Application", desc: "Submit your resume & details" },
    { step: 2, title: "Screening", desc: "We review your profile" },
    { step: 3, title: "Interview", desc: "Technical & HR rounds" },
    { step: 4, title: "Offer", desc: "Welcome to the team!" },
  ];

  const cultureImages = [
    "https://images.unsplash.com/photo-1521737711867-e99b0f76ff03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    // Handle form submission
  };

  return (
    <section className="py-42 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a passionate team driving innovation in visa and education consulting. 
            We value creativity, growth, and work-life balance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Building2 className="text-[#EE7A36]" size={20} />
                H & H Visa Consultants
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Lahore, Karachi, Islamabad
                </p>
                <p className="flex items-center gap-2">
                  <Users size={16} /> 50+ Team Members
                </p>
                <p className="flex items-center gap-2">
                  <Target size={16} /> 10+ Years in Business
                </p>
              </div>
            </motion.div>

            {/* Quick Apply */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#EE7A36] to-orange-600 text-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Apply in 2 Minutes</h3>
              <p className="text-sm mb-4 opacity-90">
                Upload resume and we'll match you with open roles.
              </p>
              <label className="cursor-pointer">
                <div className="flex items-center justify-center gap-2 py-3 bg-white/20 backdrop-blur rounded-xl hover:bg-white/30 transition-colors">
                  <Upload size={18} />
                  <span className="font-medium">Upload Resume</span>
                </div>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Job Listings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Open Positions
              </h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setSelectedJob(job.id)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all ${
                      selectedJob === job.id
                        ? "border-[#EE7A36] bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Target size={14} /> {job.salary}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        size={20}
                        className={`text-[#EE7A36] transition-transform ${
                          selectedJob === job.id ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Application Form */}
            {selectedJob && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Apply for {jobs.find((j) => j.id === selectedJob)?.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="px-4 py-3 rounded-xl border border-gray-300 focus:border-[#EE7A36] focus:outline-none transition-colors"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="px-4 py-3 rounded-xl border border-gray-300 focus:border-[#EE7A36] focus:outline-none transition-colors"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#EE7A36] focus:outline-none transition-colors"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <textarea
                    placeholder="Cover Letter (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#EE7A36] focus:outline-none transition-colors resize-none"
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume
                    </label>
                    <label className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#EE7A36] transition-colors">
                      <Upload size={24} className="text-[#EE7A36]" />
                      <span className="text-gray-600">
                        {formData.resume ? formData.resume.name : "Click to upload (PDF, DOC)"}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    type="submit"
                    className="w-full py-4 bg-[#EE7A36] text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Application <ArrowRight size={18} />
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* Company Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Our Culture
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                We believe in collaboration, innovation, and continuous learning. 
                Our team thrives in a supportive environment where ideas matter.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cultureImages.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-xl shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Team culture ${i + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Employee Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="p-5 bg-gray-50 rounded-xl border border-gray-200 text-center"
                    >
                      <div
                        className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Hiring Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-orange-50 to-white rounded-2xl p-6 md:p-8 border border-orange-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Our Hiring Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {hiringSteps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-[#EE7A36] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}