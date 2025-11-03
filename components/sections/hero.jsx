"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center md:px-14 py-34 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          "url('/hero.png')",
            // "url('https://images.pexels.com/photos/32037884/pexels-photo-32037884.jpeg')", // Plane + scenery
          // "url('https://images.unsplash.com/photo-1584084807193-bed442df7a75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpdGlzaCUyMGFpcndheXN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Orange/white gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] via-[#000000aa]/70 to-[#00000088]/30" />

      {/* Replace blue blobs with soft warm glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Subtle radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="">
          {/* Welcome Glow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 
              bg-gradient-to-r from-[#EE7A36]/20 via-yellow-200/10  to-[#EE7A36]/20
              border border-orange-400/30 rounded-full mb-8 
              backdrop-blur-xl shadow-lg shadow-orange-300/10"
          >
            <span className="text-[#EE7A36] text-sm font-semibold tracking-wider">
              WELCOME TO HnH CONSULTANT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              Your Gateway to
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#EE7A36] via-orange-400 to-[#EE7A36] bg-clip-text text-transparent">
              Global Success
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx- leading-relaxed"
          >
            We guide students and professionals through their international
            education and career journey with expertise, dedication, and proven
            strategies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify- items-center"
          >
            <motion.a
              href="/appointment"
              className="group px-8 py-4 
                bg-[#EE7A36]
                text-white rounded-xl font-semibold 
                hover:shadow-2xl hover:shadow-[#EE7A36]/40 
                transition-all duration-300 
                flex items-center gap-2 
                border border-orange-400/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.a>

            <motion.a
              href="/services"
              className="px-8 py-4 
                border-2 border-[#EE7A36]/50 text-orange-300 
                rounded-xl font-semibold 
                hover:bg-[#EE7A36]/10 hover:border-[#EE7A36] 
                transition-all duration-300 
                backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-3xl "
          >
            {[
              { number: 5000, label: "Students Guided", suffix: "+" },
              { number: 50, label: "Partner Universities", suffix: "+" },
              { number: 98, label: "Success Rate", suffix: "%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              >
                <div
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 
                  border border-orange-300/20 
                  hover:border-[#EE7A36]/40 
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-orange-300/20 group-hover:scale-105"
                >
                  <div
                    className="text-4xl md:text-5xl font-bold 
                   bg-[#EE7A36]
                    bg-clip-text text-transparent mb-2"
                  >
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-300 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-yellow-400/0 
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-orange-400/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-orange-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
