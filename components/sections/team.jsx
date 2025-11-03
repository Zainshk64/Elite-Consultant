"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"

export default function TeamSection() {
const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Lead Consultant",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
    bio: "With 15+ years in international education consulting",
    email: "sarah@consultant.com",
    linkedin: "https://linkedin.com/in/sarahmitchell",
  },
  {
    name: "Dr. James Wilson",
    role: "Senior Visa Consultant",
    // replaced with a stable placeholder image
    image: "https://picsum.photos/id/1005/500/500",
    bio: "10+ years helping students secure visas globally",
    email: "james@consultant.com",
    linkedin: "https://linkedin.com/in/jameswilson",
  },
  {
    name: "Priya Sharma",
    role: "Application Specialist",
    image: "https://picsum.photos/id/1027/500/500",
    
    bio: "Expert in university application strategies",
    email: "priya@consultant.com",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Ahmed Hassan",
    role: "Career Guidance Counselor",
    // replaced with a stable placeholder image
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80",
    bio: "Dedicated to post-graduation career success",
    email: "ahmed@consultant.com",
    linkedin: "https://linkedin.com/in/ahmedhassan",
  },
];



  return (
  <section className="py-16 md:py-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 border border-orange-200 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#EE7A36] rounded-full animate-pulse" />
            <span className="text-[#EE7A36] text-sm font-semibold tracking-wider">
              OUR CLIENTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Meet Our Experts</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our dedicated team of consultants is committed to helping you achieve your educational and career goals.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#EE7A36]/40 transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#EE7A36]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex gap-3">
                      <a href={member.email} className="p-2 bg-white/30 hover:bg-white/50 rounded-full transition-all">
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a href={member.linkedin} className="p-2 bg-white/30 hover:bg-white/50 rounded-full transition-all">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#EE7A36] mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
