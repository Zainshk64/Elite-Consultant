"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Shield, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StudyVisa() {
  const benefits = [
    "98% Visa Approval Rate",
    "500+ Partner Universities Worldwide",
    "Scholarship Application Support",
    "Full Documentation & SOP Guidance",
    "Pre-Departure Orientation",
    "24/7 Student Support",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EE7A36]/10 to-orange-100/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Study Visa <span className="text-[#EE7A36]">Assistance</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Turn your dream of studying abroad into reality. We provide end-to-end support for student visas to USA, UK, Canada, Australia, Germany, and more.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["F-1 USA", "Tier 4 UK", "Study Permit CA", "Subclass 500 AU"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-orange-100 text-[#EE7A36] rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/appointment">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-8 py-4 bg-[#EE7A36] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Apply Now <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying abroad"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#EE7A36] to-orange-600 rounded-full blur-3xl opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Study Visa Service?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 bg-orange-50 rounded-xl border border-orange-200"
              >
                <Check className="text-[#EE7A36] mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#EE7A36] to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Study Abroad?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-orange-100 mb-8"
          >
            Book a free consultation and get personalized guidance from our visa experts.
          </motion.p>
          <Link href="/appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white text-[#EE7A36] rounded-xl font-bold text-lg shadow-lg"
            >
              Book Free Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}