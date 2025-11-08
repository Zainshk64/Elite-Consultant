"use client"

import { motion } from "framer-motion"
import { Home, Search, ArrowLeft, Plane, MapPin, Compass } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#EE7A36]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-orange-300/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -50,
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              rotate: 360,
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            <Plane className="text-[#EE7A36]/10 w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#EE7A36] to-orange-400 rounded-full mb-8 relative"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.3, 1.3],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-[#EE7A36]/30" />
            </motion.div>
            
            <Compass className="w-16 h-16 text-white" />
            
            <motion.div
              className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <MapPin className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#EE7A36] via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">
              404
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Destination Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Looks like you've wandered off the map! This page seems to be on a different journey.
          </p>
          <p className="text-base text-gray-500">
            Don't worry, we'll help you get back on track to your educational dreams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
          >
            <Home className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Back to Home
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#EE7A36] text-[#EE7A36] rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg"
          >
            <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Explore Services
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Home, label: "Home", href: "/" },
            { icon: Search, label: "Services", href: "/services" },
            { icon: MapPin, label: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ y: -5 }}
              className="group p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#EE7A36] hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center group-hover:from-[#EE7A36] group-hover:to-orange-500 transition-all">
                  <item.icon className="w-7 h-7 text-[#EE7A36] group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-700 font-semibold group-hover:text-[#EE7A36] transition-colors">
                  {item.label}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 rounded-full">
            <Plane className="w-5 h-5 text-[#EE7A36]" />
            <p className="text-sm font-semibold text-gray-700">
              Need help? Our consultants are here to guide you!
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-24 h-24 border-4 border-dashed border-[#EE7A36] rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 opacity-20"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-32 h-32 border-4 border-dashed border-orange-400 rounded-full" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EE7A36] to-transparent opacity-50" />
    </div>
  )
}