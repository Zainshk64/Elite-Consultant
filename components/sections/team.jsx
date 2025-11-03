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
    <section className="py-16 md:py-24 bg-muted/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">OUR TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Meet Our Experts</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of consultants is committed to helping you achieve your educational and career goals
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
              {/* Card */}
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-500/40 to-blue-600/40">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex gap-3">
                      <a href={member.email} className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all">
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-cyan-500 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
