"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="bg-card border-border transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" width={60} alt="" />

              <span className="font-bold text-lg">H&H Consultant</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in global education and career advancement.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  Education Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  Career Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  Test Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  University Placement
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone
                  size={18}
                  className="text-[#EE7A36] mt-1 flex-shrink-0"
                />
                <a
                  href="https://wa.me/03275518166"
                  className="text-gray-400 hover:text-[#EE7A36] transition-colors"
                >
                  0327 5518166
                </a>
              </li>

              <li className="flex items-start gap-2">
                <PhoneCall
                  size={18}
                  className="text-[#EE7A36] mt-1 flex-shrink-0"
                />
                <a
                  href="tel:0512120340"
                  className="text-gray-400 hover:text-[#EE7A36] transition-colors"
                >
                  051 2120340
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail size={18} className="text-[#EE7A36] mt-1 flex-shrink-0" />
                <a
                  href="mailto:handhvisaconsultants@gmail.com"
                  className="text-gray-400 hover:text-[#EE7A36] transition-colors break-all"
                >
                  handhvisaconsultants@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-[#EE7A36] mt-1 flex-shrink-0"
                />
                <a
                  href="https://www.google.com/maps?q=ATS+Centre,+3rd+Floor,+AK+Fazal+e+Haq+Road,+G6+Blue+Area,+Islamabad,+44000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#EE7A36] transition-colors"
                >
                  ATS Centre, 3rd Floor, AK Fazal e Haq Road, G6/Blue Area,
                  Islamabad, 44000
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2025 H&H Consultant. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-muted hover:bg-[#EE7A36] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
