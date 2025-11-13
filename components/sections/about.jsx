"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, Heart, Quote, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Student-Centric",
      description: "Your success is our priority",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain highest standards",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connections worldwide",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest and ethical service",
    },
  ];

  const team = [
    { name: "Harmail Ejaz", role: "Chief Executive Officer" },
    { name: "Hassan Waqas", role: "Director Education Counsellor" },
    { name: "Tayyab Rehman", role: "Director" },
    { name: "Ajmal Yaseen", role: "Student Manager" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white to-orange-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            About H&H Consultant
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Leading the way in international education consultancy since 2014
          </p>
        </motion.div>

        {/* === CEO Profile Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden border border-orange-200/50"
        >
          <div className="flex flex-col lg:flex-row">
            {/* CEO Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:w-1/2 overflow-hidden">
              <img
                src="/ceo.jpg"
                alt="Harmail Ejaz - CEO"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">Harmail Ejaz</h3>
                <p className="text-orange-300 text-sm sm:text-base">Chief Executive Officer</p>
              </div>
            </div>

            {/* CEO Bio */}
            <div className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-1 sm:gap-2 text-orange-500 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                ))}
              </div>
              <Quote className="text-orange-400 mb-3 sm:mb-4 w-8 h-8" />
              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-4 sm:mb-6">
                "With over 15 years of experience in international education and immigration,
                I founded H&H Consultant to bridge dreams and destinations. Our mission is simple:
                empower every student with transparent, ethical, and affordable pathways to global
                opportunities. We don't just process visas — we build futures."
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Under Harmail's leadership, H&H has helped over 5,000 students secure admissions
                and visas across 50+ countries, earning a 98% success rate and partnerships with
                500+ top universities worldwide.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["5000+ Students", "15+ Years Exp", "50+ Countries", "98% Success"].map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white text-xs sm:text-sm font-medium rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-600 mb-4 sm:mb-6 leading-tight">
              Your Visa Success <br className="hidden sm:block" /> Awaits
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Experience hassle-free visa services designed to fit your budget.
              At H & H Visa Consulting, we prioritize affordability without
              compromising quality, making your journey smoother and more
              accessible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <img
              src="https://res.cloudinary.com/daljxhxzf/image/upload/v1763048750/img_kqil6p.jpg"
              alt="Visa Success"
              className="rounded-xl shadow-xl w-full object-cover h-auto"
            />
          </motion.div>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://res.cloudinary.com/daljxhxzf/image/upload/v1763048750/img_kqil6p.jpg"
              alt="Immigration Vision"
              className="rounded-xl shadow-xl w-full object-cover h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-600 mb-4 sm:mb-6 leading-tight">
              Lighting Your Way with <br className="hidden sm:block" /> Our Immigration Vision
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              At H & H Visa Consulting, we turn immigration challenges into
              opportunities. Our mission is to bring families together, create
              pathways to success, and ensure your journey is seamless and
              fulfilling. Your dreams inspire us to pave the way to a brighter
              tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-600 mb-4 sm:mb-6 leading-tight">
              Our Immigration Service <br className="hidden sm:block" /> Immigration Vision
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Our history began with a vision to make the immigration process smoother and more accessible for individuals and families around the world. With a deep understanding of the challenges that accompany moving to a new country.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <img
              src="https://res.cloudinary.com/daljxhxzf/image/upload/v1763048750/img_kqil6p.jpg"
              alt="Immigration Vision"
              className="rounded-xl shadow-xl w-full object-cover h-auto"
            />
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-orange-200/50 hover:border-orange-400 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Icon size={28} className="text-white sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-gradient-to-r from-[#EE7A36] to-orange-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5000+", label: "Students Guided" },
            { number: "500+", label: "Partner Universities" },
            { number: "98%", label: "Success Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                {stat.number}
              </p>
              <p className="text-orange-100 text-xs sm:text-sm lg:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Trusted Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-orange-200/30 shadow-xl"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
              Our Trusted Team
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              At the heart of our commitment to providing exceptional
              immigration solutions stands
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-orange-100 group-hover:border-orange-400 transition-all shadow-md group-hover:shadow-lg">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl sm:text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 text-xs sm:text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}