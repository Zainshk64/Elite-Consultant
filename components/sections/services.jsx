"use client";

import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  Globe,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: GraduationCap,
      title: "Education Visa Assistance",
      description:
        "End-to-end visa support with 98% approval rate. Expert documentation and interview preparation.",
      features: [
        "USA F-1 Visa",
        "UK Tier 4",
        "Canada Study Permit",
        "Australia Student Visa",
      ],
      color: "from-orange-400 to-orange-600",
      stats: "5000+ Visas Approved",
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description:
        "Achieve your target scores with expert trainers and proven strategies for all major tests.",
      features: ["IELTS 7+ Band", "TOEFL 100+", "SAT 1400+", "GRE 320+"],
      color: "from-orange-500 to-orange-700",
      stats: "95% Success Rate",
    },
    {
      icon: Briefcase,
      title: "Career Counseling",
      description:
        "Personalized career guidance from industry experts to unlock your professional potential.",
      features: [
        "Resume Building",
        "Interview Coaching",
        "LinkedIn Optimization",
        "Career Roadmap",
      ],
      color: "from-orange-400 to-orange-600",
      stats: "3000+ Careers Shaped",
    },
    {
      icon: Award,
      title: "University Placement",
      description:
        "Get admitted to your dream university with our extensive network and scholarship support.",
      features: [
        "Top 100 Universities",
        "Scholarship Guidance",
        "SOP/LOR Writing",
        "Application Review",
      ],
      color: "from-orange-400 to-orange-500",
      stats: "500+ Partner Universities",
    },
    {
      icon: Globe,
      title: "Country Selection",
      description:
        "Expert advice on choosing the right country based on your goals, budget, and preferences.",
      features: [
        "Comparative Analysis",
        "Cost Estimation",
        "Job Market Insights",
        "Immigration Pathways",
      ],
      color: "from-orange-400 to-orange-600",
      stats: "20+ Countries Covered",
    },
    // {
    //   icon: FileText,
    //   title: "Documentation Support",
    //   description:
    //     "Professional assistance with all required documents, translations, and certifications.",
    //   features: [
    //     "Document Checklist",
    //     "Translation Services",
    //     "Notarization Help",
    //     "Digital Copies",
    //   ],
    //   color: "from-orange-500 to-orange-700",
    //   stats: "100% Document Accuracy",
    // },
    // {
    //   icon: Users,
    //   title: "Pre-Departure Briefing",
    //   description:
    //     "Comprehensive orientation to prepare you for life abroad, from culture to accommodation.",
    //   features: [
    //     "Cultural Training",
    //     "Accommodation Help",
    //     "Banking Guidance",
    //     "Travel Planning",
    //   ],
    //   color: "from-orange-500 to-orange-600",
    //   stats: "4.9/5 Student Rating",
    // },
    // {
    //   icon: TrendingUp,
    //   title: "Post-Landing Support",
    //   description:
    //     "Continuous support even after you land with job search assistance and networking.",
    //   features: [
    //     "Job Search Help",
    //     "Network Events",
    //     "Part-time Jobs",
    //     "Permanent Residency",
    //   ],
    //   color: "from-orange-400 to-orange-600",
    //   stats: "24/7 Support Available",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 border border-orange-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-semibold tracking-wider">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            <span className="text-[#EE7A36]">Comprehensive Solutions</span>
            <br />
            <span className="text-gray-700">For Your Success</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            From visa assistance to career counseling, we provide end-to-end
            support for your international education journey.
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl border border-orange-200 hover:border-orange-400 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto mt-6 shadow-md`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 mb-4 text-xs text-orange-600 font-semibold">
                    <TrendingUp size={14} />
                    <span>{service.stats}</span>
                  </div>

                  <div className="space-y-2 mb-4 text-left">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-orange-500 opacity-70"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center gap-2 text-orange-600 text-sm font-semibold mx-auto"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}
        <div className="mt-16 text-center">
          <motion.a
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#EE7A36] text-white rounded-xl font-semibold hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
