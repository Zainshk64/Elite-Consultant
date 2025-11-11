"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Globe,
  Headphones,
  CheckCircle,
  Download,
  ArrowRight,
  BookOpen,
  Briefcase,
  Languages,
  FileCheck,
  GraduationCap,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetails() {
  const services = [
    { icon: GraduationCap, title: "Career Counseling", active: false },
    { icon: Calculator, title: "Financial Planning", active: true },
    { icon: Globe, title: "Visa Guidance", active: false },
    { icon: FileText, title: "Application Assistance", active: false },
    { icon: FileCheck, title: "Document Preparation", active: false },
    { icon: Languages, title: "Language Proficiency", active: false },
  ];

  const whyChooseUs = [
    { icon: Users, color: "bg-red-500", title: "Certified Tutors" },
    { icon: Headphones, color: "bg-blue-500", title: "Doubt Solving Sessions" },
    { icon: Briefcase, color: "bg-green-500", title: "Flexible & Regular Batches" },
    { icon: BookOpen, color: "bg-orange-500", title: "Free study materials" },
  ];

  const gatewayPoints = [
    "Premier Interactive Online Preparation",
    "Tailored Study Plans for Your Success",
    "Test Evaluations By Experts",
  ];

  return (
    <section className="py-42 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Services Menu */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                        service.active
                          ? "bg-orange-50 text-[#EE7A36] border border-[#EE7A36]/30"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          service.active
                            ? "bg-[#EE7A36] text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-medium text-sm">{service.title}</span>
                      {service.active && (
                        <div className="ml-auto w-2 h-2 bg-[#EE7A36] rounded-full"></div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Downloads */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4">Downloads</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <FileText size={18} className="text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">TOEFL Application Form</p>
                      <p className="text-xs text-gray-500">1.9 MB</p>
                    </div>
                  </div>
                  <Download size={16} className="text-gray-400" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText size={18} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Terms & Conditions</p>
                      <p className="text-xs text-gray-500">3.9 KB</p>
                    </div>
                  </div>
                  <Download size={16} className="text-gray-400" />
                </a>
              </div>
            </div>

            {/* Assured Approval */}
            <motion.div
              animate={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#EE7A36] to-orange-600 text-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <CheckCircle size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Assured Approval - Guaranteed</h3>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 w-full py-3 bg-white text-[#EE7A36] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                About Financial Planning
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-[#EE7A36] mb-6">
                How to get emergency fund and risk management
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Building and maintaining an emergency fund is a cornerstone of effective financial
                planning. This topic delves into the critical role an emergency fund plays in
                providing financial security and managing risks.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Learn how to safeguard yourself against unexpected expenses and financial setbacks
                with practical advice on establishing, growing, and maintaining an emergency fund.
                This guidance empowers individuals to handle unforeseen circumstances with
                confidence and financial stability.
              </p>
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Financial planning"
                  width={800}
                  height={400}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                Why choose us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -6 }}
                      className="p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                    >
                      <div
                        className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Gateway Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
                Your Gateway to Global Opportunities
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
                The right visa agency isn’t just a choice — it’s the foundation of your journey
                toward international success, exploration, and growth. At H & H Visa Consultants,
                we don’t just assist; we empower. Here’s why choosing us transforms your dreams
                into reality.
              </p>

              <div className="flex justify-center mb-10">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  width={700}
                  height={350}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {gatewayPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-[#EE7A36]/20"
                  >
                    <CheckCircle className="text-[#EE7A36] flex-shrink-0" size={20} />
                    <p className="text-gray-700 font-medium">{point}</p>
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