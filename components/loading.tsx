"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane } from "lucide-react"

export default function Loading() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Optional: Auto-hide after some time (for demo purposes)
    // Remove this in production or handle it via parent component
    const timer = setTimeout(() => {
      setShowLoader(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white via-orange-50/30 to-white z-[9999] overflow-hidden"
        >
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#EE7A36]/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6">
            
            {/* Background Text Overlay - Faded "H&H Consultant" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            >
              <h1 className="text-[12rem] md:text-[16rem] font-black text-gray-900 whitespace-nowrap">
                H&H
              </h1>
            </motion.div>

            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(238, 122, 54, 0.3)",
                      "0 0 40px rgba(238, 122, 54, 0.5)",
                      "0 0 20px rgba(238, 122, 54, 0.3)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-orange-100"
                >
                  <img 
                    src="/logo.png" 
                    alt="H&H Consultant Logo" 
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  />
                </motion.div>

                {/* Ripple Effect */}
                {/* {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-3xl border-2 border-[#EE7A36]/30"
                    animate={{
                      scale: [1, 1.4, 1.4],
                      opacity: [0.6, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.6,
                    }}
                  />
                ))} */}
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mb-12"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-3"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #EE7A36, #FB923C, #FDBA74, #FB923C, #EE7A36)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                H&H Consultant
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg md:text-xl font-medium"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Your Gateway to Global Education
              </motion.p>
            </motion.div>

            {/* Plane Animation Track */}
            <div className="relative w-full max-w-2xl h-24 mb-8">
              {/* Flight Path Line */}
              <motion.div
                className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EE7A36]/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Animated Dashed Line */}
              <svg className="absolute top-1/2 left-0 right-0 w-full h-2 -translate-y-1/2" style={{ overflow: 'visible' }}>
                <motion.line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="#EE7A36"
                  strokeWidth="2"
                  strokeDasharray="10, 15"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  repeatDelay: 10,

                  }}
                  opacity="0.3"
                />
              </svg>

              {/* Flying Plane */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ 
                  x: "calc(100vw + 100px)",
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 10,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0, 8, 0],
                    rotate: [0, -2, 0, 2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Plane with Trail Effect */}
                  <div className="relative">
                    <Plane 
                      className="text-[#EE7A36] w-12 h-12 md:w-16 md:h-16 transform rotate-45 drop-shadow-lg" 
                      strokeWidth={2.5}
                    />
                    {/* Trail */}
                    <motion.div
                      className="absolute top-1/2 right-full w-20 h-1 bg-gradient-to-l from-[#EE7A36]/50 to-transparent rounded-full"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scaleX: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Cloud Decorations */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-8 bg-white/40 rounded-full blur-sm"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${i * 35}%`,
                  }}
                  animate={{
                    x: [0, 30, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Loading Text with Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-3"
            >
              <span className="text-xl md:text-2xl font-semibold text-gray-700">
                Preparing your journey
              </span>
              <motion.div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 bg-[#EE7A36] rounded-full"
                    animate={{
                      y: [0, -12, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

          </div>

          {/* Decorative Corner Elements */}
          {/* <motion.div
            className="absolute top-8 left-8 md:top-12 md:left-12"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-[#EE7A36]/10 rounded-full border-t-[#EE7A36]/40 border-r-[#EE7A36]/40" />
          </motion.div> */}

          {/* <motion.div
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-orange-300/10 rounded-full border-b-orange-400/40 border-l-orange-400/40" />
          </motion.div> */}

          {/* Small Floating Planes in Background */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: -50,
                y: 100 + i * 300,
              }}
              animate={{
                x: "100vw",
                y: 100 + i * 300,
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 6,
              }}
            >
              <Plane 
                className="text-[#EE7A36]/10 w-6 h-6 md:w-8 md:h-8 transform rotate-45" 
              />
            </motion.div>
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  )
}