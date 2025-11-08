"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane, Globe, GraduationCap, Sparkles } from "lucide-react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white via-orange-50/40 to-white z-[9999] overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-[#EE7A36]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ x: -100, y: Math.random() * window.innerHeight }}
              animate={{
                x: window.innerWidth + 100,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 5,
              }}
            >
              <Plane className="text-[#EE7A36]/20 w-8 h-8 transform rotate-45" />
            </motion.div>
          ))}
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 mb-8">
            <svg
              className="absolute inset-0 w-48 h-48 transform -rotate-90"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="85"
                stroke="#FED7AA"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="100"
                cy="100"
                r="85"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={534}
                strokeDashoffset={534 - (534 * progress) / 100}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EE7A36" />
                  <stop offset="50%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#FDBA74" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Plane className="text-[#EE7A36] w-8 h-8 transform rotate-90" />
              </motion.div>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-28 h-28 bg-gradient-to-br from-[#EE7A36] to-orange-400 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)",
                    }}
                  />
                  
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="text-white w-12 h-12" />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="text-white w-4 h-4" />
                </motion.div>

                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 w-28 h-28 rounded-full border-2 border-[#EE7A36]/20"
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.6,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-6"
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <GraduationCap className="text-[#EE7A36] w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EE7A36] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                H&H Consultant
              </h1>
            </motion.div>
            <motion.p
              className="text-gray-600 text-base font-semibold tracking-wide"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Your Gateway to Global Education ✈️
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="text-5xl font-bold text-[#EE7A36]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
              {progress}%
            </motion.div>
          </motion.div>

          <motion.div
            className="w-80 max-w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#EE7A36] via-orange-500 to-yellow-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-gray-700 font-semibold">Loading</span>
            <motion.span className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 bg-[#EE7A36] rounded-full"
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.span>
          </motion.div>

          <motion.div className="mt-6 h-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={Math.floor(progress / 20)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-medium text-gray-600"
              >
                {progress < 20 && "🌍 Connecting to global opportunities..."}
                {progress >= 20 && progress < 40 && "📚 Loading university database..."}
                {progress >= 40 && progress < 60 && "✈️ Preparing visa information..."}
                {progress >= 60 && progress < 80 && "🎓 Setting up your dashboard..."}
                {progress >= 80 && progress < 100 && "🚀 Almost there..."}
                {progress === 100 && "✨ Welcome aboard!"}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-10 left-10"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border-4 border-[#EE7A36]/20 rounded-full border-t-[#EE7A36]" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10"
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-20 h-20 border-4 border-orange-300/20 rounded-full border-t-orange-400" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}