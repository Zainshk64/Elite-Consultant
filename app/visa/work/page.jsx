"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, FileCheck, Globe, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WorkVisa() {
  const advantages = [
    "Job Offer Assistance",
    "LMIA & Work Permit Support",
    "Spouse & Family Inclusion",
    "PR Pathway Guidance",
    "Employer Compliance Help",
    "Post-Landing Job Support",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/20 to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Work Visa <span className="text-[#EE7A36]">Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Secure your career abroad. We specialize in skilled worker visas, intra-company transfers, and global talent programs.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["H1B USA", "Skilled Worker UK", "IEC Canada", "EU Blue Card"].map((tag) => (
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
                  className="flex items-center gap-2 px-8 py-4 bg-[#EE7A36] text-white rounded-xl font-bold shadow-lg"
                >
                  Find Jobs <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional working abroad"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Your Career, Our Priority
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-orange-50 rounded-xl border border-orange-200"
              >
                <div className="w-10 h-10 bg-[#EE7A36] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={20} />
                </div>
                <span className="font-semibold text-gray-800">{adv}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#EE7A36] to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Build Your Global Career
          </motion.h3>
          <Link href="/appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white text-[#EE7A36] rounded-xl font-bold text-lg"
            >
              Get Work Visa Help
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}