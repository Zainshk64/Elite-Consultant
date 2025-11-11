"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, Heart } from "lucide-react";

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
    <section className="py-42 lg:py-32 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">
            About H&H Consultant
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Leading the way in international education consultancy since 2014
          </p>
        </motion.div>

        {/* About Content - Left Text, Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
    <h2 className="text-3xl sm:text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-600 mb-6 leading-tight [text-shadow:_0_4px_8px_rgb(238_122_54_/_0.3)]">
  Your Visa Success <br className="hidden sm:block" /> Awaits
</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Experience hassle-free visa services designed to fit your budget.
              At H & H Visa Consulting, we prioritize affordability without
              compromising quality, making your journey smoother and more
              accessible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src="https://handhvisaconsultants.com/wp-content/uploads/2023/12/about_img3.jpg"
              alt="Visa Success"
              className="rounded-xl shadow-xl w-full object-cover h-auto"
            />
          </motion.div>
        </div>

        {/* Section 1 - Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://handhvisaconsultants.com/wp-content/uploads/2023/12/about_img3.jpg"
              alt="Immigration Vision"
              className="rounded-xl shadow-xl w-full object-cover h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-600 mb-6 leading-tight [text-shadow:_0_4px_8px_rgb(238_122_54_/_0.3)]">
Lighting Your Way with <br className="hidden sm:block" /> Our Immigration Vision
</h2>
            
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              At H & H Visa Consulting, we turn immigration challenges into
              opportunities. Our mission is to bring families together, create
              pathways to success, and ensure your journey is seamless and
              fulfilling. Your dreams inspire us to pave the way to a brighter
              tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Section 2 - Text Left, Image Right (Reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-600 mb-6 leading-tight [text-shadow:_0_4px_8px_rgb(238_122_54_/_0.3)]">
  Our Immigration Service <br className="hidden sm:block" /> Immigration Vision
</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Our history began with a vision to make the immigration process smoother and more accessible for individuals and families around the world. With a deep understanding of the challenges that accompany moving to a new country,
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src="https://handhvisaconsultants.com/wp-content/uploads/2023/12/about_img3.jpg"
              alt="Immigration Vision"
              className="rounded-xl shadow-xl w-full object-cover h-auto"
            />
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-300/30 hover:border-orange-400/60 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#EE7A36] to-orange-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold mb-2">
                {stat.number}
              </p>
              <p className="text-white/90 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* === NEW: Our Trusted Team Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-orange-300/20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Trusted Team
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              At the heart of our commitment to providing exceptional
              immigration solutions stands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-transparent group-hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text- mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
