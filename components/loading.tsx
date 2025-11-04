"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed of loading

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white via-orange-50/30 to-white z-[9999] overflow-hidden"
      >
        {/* Ambient Background Effects */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-[#EE7A36]/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"
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

        {/* Main Loading Container */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Circular Progress */}
          <div className="relative w-40 h-40 mb-8">
            {/* Outer Circle Background */}
            <svg
              className="absolute inset-0 w-40 h-40 transform -rotate-90"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#FED7AA"
                strokeWidth="12"
                fill="none"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * progress) / 100}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EE7A36" />
                  <stop offset="100%" stopColor="#FB923C" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Circle with Logo/Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Logo Circle */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#EE7A36] to-orange-400 rounded-full flex items-center justify-center shadow-xl">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-white font-bold text-3xl"
                  >
                    H&H
                  </motion.div>
                </div>
                
                {/* Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 w-24 h-24 rounded-full border-4 border-[#EE7A36]/30"
                  animate={{ scale: [1, 1.3, 1.3], opacity: [1, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              </motion.div>
            </div>

            {/* Percentage Display */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-3xl font-bold text-[#EE7A36]">
                {progress}%
              </span>
            </motion.div>
          </div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#EE7A36] to-orange-500 bg-clip-text text-transparent mb-3">
              H&H Consultant
            </h1>
            <motion.p
              className="text-gray-500 text-sm font-medium tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Your Gateway to Global Education
            </motion.p>
          </motion.div>

          {/* Loading Text with Animation */}
          <motion.div
            className="mt-8 flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-gray-600 font-medium">Loading</span>
            <motion.span
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 bg-[#EE7A36] rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.span>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mt-8 w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#EE7A36] to-orange-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Loading Messages */}
          <motion.div
            className="mt-4 h-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={Math.floor(progress / 25)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-gray-500"
              >
                {progress < 25 && "Preparing your experience..."}
                {progress >= 25 && progress < 50 && "Loading resources..."}
                {progress >= 50 && progress < 75 && "Setting up services..."}
                {progress >= 75 && progress < 100 && "Almost ready..."}
                {progress === 100 && "Welcome!"}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <motion.div
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
              <path
                d="M 10,50 Q 25,10 50,10 T 90,50 Q 75,90 50,90 T 10,50"
                fill="none"
                stroke="#EE7A36"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32">
          <motion.div
            className="w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
              <path
                d="M 10,50 Q 25,10 50,10 T 90,50 Q 75,90 50,90 T 10,50"
                fill="none"
                stroke="#EE7A36"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}