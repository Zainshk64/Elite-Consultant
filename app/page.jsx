"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero"
import Services from "@/components/sections/services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonials from "@/components/sections/testimonials"
import TeamSection from "@/components/sections/team"
import CTA from "@/components/sections/cta"
import Footer from "@/components/footer"
import Navbar from '@/components/navbar'
import StudyAbroadcard from "../components/sections/study-abroadcard"
import StudyDestinations from "../components/sections/study-destinations"
import PopularDestinations from "../components/sections/popular-destination"

export default function Home() {
  return (
    <main className="bg-background transition-colors duration-300">
      {/* <Navigation /> */}
      <Navbar/>
      <HeroSection />
      <PopularDestinations/>
      <StudyDestinations/>
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <TeamSection />
      <CTA />
    </main>
  )
}
