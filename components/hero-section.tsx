"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 flex flex-col items-center justify-center"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div
          className="absolute bottom-32 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <span className="text-sm font-medium text-primary">Welcome to Luxe Wellness</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
          Transform Your Wellness <span className="text-primary">Journey</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Experience luxury wellness treatments designed to rejuvenate your mind, body, and spirit. Step into serenity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
          >
            Book Appointment
            <ArrowRight size={20} />
          </Link>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg text-lg font-semibold hover:bg-primary/5 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Stats section */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-border"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div>
            <p className="text-3xl font-bold text-primary mb-2">500+</p>
            <p className="text-sm text-foreground/60">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm text-foreground/60">Services Offered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">10yr</p>
            <p className="text-sm text-foreground/60">Industry Experience</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
