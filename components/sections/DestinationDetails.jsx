"use client"

import { motion } from "framer-motion"
import { ArrowLeft, MapPin, DollarSign, Clock, CheckCircle, GraduationCap, Users, TrendingUp, FileText, Globe, Award, Calendar } from "lucide-react"
import { useState } from "react"

const allDestinationsData = {
  1: {
    id: 1,
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
    description: "The UK offers world-class education with a rich academic heritage spanning centuries. Home to prestigious institutions like Oxford and Cambridge, the UK combines traditional excellence with modern innovation.",
    visaSuccess: "95%",
    avgCost: "$20,000/year",
    processingTime: "3-4 weeks",
    topUniversities: ["Oxford University", "Cambridge University", "Imperial College London", "UCL"],
    popularCities: ["London", "Edinburgh", "Manchester", "Birmingham"],
    intakeSeasons: ["September", "January"],
    workRights: "20 hrs/week during term",
    postStudyWork: "2 years PSW visa",
    ieltsRequirement: "6.0 - 7.0 overall",
    scholarships: ["Chevening Scholarship", "Commonwealth Scholarship", "GREAT Scholarships"],
    whyStudyHere: [
      "World-renowned universities",
      "Shorter course duration",
      "Post-study work opportunities",
      "Rich cultural experience",
      "Gateway to Europe"
    ],
    requirements: [
      "Valid passport",
      "Offer letter from university",
      "English language proficiency",
      "Financial proof",
      "Academic transcripts",
      "Statement of Purpose"
    ],
    livingCost: "$12,000 - $15,000/year",
    courseTypes: ["Undergraduate", "Postgraduate", "PhD", "Foundation Courses"]
  },
  2: {
    id: 2,
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&q=80",
    description: "Canada is known for its high quality of life, multicultural society, and excellent education system. With affordable tuition and post-graduation work opportunities, it's a top choice for international students.",
    visaSuccess: "98%",
    avgCost: "$15,000/year",
    processingTime: "4-6 weeks",
    topUniversities: ["University of Toronto", "UBC", "McGill University", "University of Waterloo"],
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    intakeSeasons: ["September", "January", "May"],
    workRights: "20 hrs/week during term",
    postStudyWork: "3 years PGWP",
    ieltsRequirement: "6.5 overall",
    scholarships: ["Vanier Scholarships", "Ontario Graduate Scholarship", "Provincial Scholarships"],
    whyStudyHere: [
      "Excellent PR opportunities",
      "Affordable tuition fees",
      "Safe and welcoming environment",
      "Three-year work permit",
      "High quality of life"
    ],
    requirements: [
      "Valid passport",
      "Letter of acceptance",
      "Proof of funds",
      "Language proficiency",
      "Medical examination",
      "Study plan"
    ],
    livingCost: "$10,000 - $12,000/year",
    courseTypes: ["Undergraduate", "Postgraduate", "Diploma", "Certificate Programs"]
  },
  3: {
    id: 3,
    country: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80",
    description: "Australia offers world-class education in a vibrant, multicultural environment. With its beautiful landscapes, excellent weather, and strong economy, it's an attractive destination for international students.",
    visaSuccess: "92%",
    avgCost: "$25,000/year",
    processingTime: "4-8 weeks",
    topUniversities: ["University of Melbourne", "ANU", "University of Sydney", "UNSW"],
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    intakeSeasons: ["February", "July"],
    workRights: "40 hrs/fortnight",
    postStudyWork: "2-4 years PSW visa",
    ieltsRequirement: "6.5 overall",
    scholarships: ["Australia Awards", "Endeavour Scholarships", "University Scholarships"],
    whyStudyHere: [
      "Top-ranked universities",
      "Post-study work visa",
      "Safe and multicultural",
      "Beautiful lifestyle",
      "Strong job market"
    ],
    requirements: [
      "Valid passport",
      "Confirmation of Enrolment",
      "GTE requirement",
      "Financial capacity",
      "Health insurance (OSHC)",
      "English proficiency"
    ],
    livingCost: "$18,000 - $20,000/year",
    courseTypes: ["Bachelor", "Master", "PhD", "TAFE Courses"]
  }
}

export default function DestinationDetails({ destinationId = "1" }) {
  const [activeTab, setActiveTab] = useState("overview")
  const details = allDestinationsData[destinationId] || allDestinationsData[1]

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <img
          src={details.heroImage}
          alt={details.country}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-white mb-6 hover:text-[#EE7A36] transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Destinations</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{details.flag}</span>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    Study in {details.country}
                  </h1>
                  <p className="text-xl text-gray-300">Your pathway to world-class education</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp size={20} className="text-green-400" />
                  <div>
                    <p className="text-sm text-gray-300">Visa Success</p>
                    <p className="text-xl font-bold">{details.visaSuccess}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <DollarSign size={20} className="text-[#EE7A36]" />
                  <div>
                    <p className="text-sm text-gray-300">Avg. Tuition</p>
                    <p className="text-xl font-bold">{details.avgCost}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Clock size={20} className="text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-300">Processing</p>
                    <p className="text-xl font-bold">{details.processingTime}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
          {["overview", "universities", "requirements", "cost"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "text-[#EE7A36] border-b-2 border-[#EE7A36]"
                  : "text-gray-600 hover:text-[#EE7A36]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About {details.country}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{details.description}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Award className="text-[#EE7A36]" />
                  Why Study Here?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {details.whyStudyHere.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#EE7A36] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Popular Cities</h3>
                <div className="flex flex-wrap gap-3">
                  {details.popularCities.map((city, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-3 bg-white border-2 border-[#EE7A36] text-[#EE7A36] rounded-xl font-semibold hover:bg-[#EE7A36] hover:text-white transition-all cursor-pointer"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Work Rights</p>
                    <p className="font-semibold text-gray-800">{details.workRights}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Post-Study Work</p>
                    <p className="font-semibold text-gray-800">{details.postStudyWork}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">IELTS Requirement</p>
                    <p className="font-semibold text-gray-800">{details.ieltsRequirement}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Intake Seasons</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {details.intakeSeasons.map((season, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-100 text-[#EE7A36] rounded-full text-sm font-semibold">
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="/appointment"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-bold text-center hover:shadow-2xl transition-all"
              >
                Book Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}

        {activeTab === "universities" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Universities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {details.topUniversities.map((uni, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{uni}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-50 text-[#EE7A36] rounded-full text-xs font-semibold">
                          Top Ranked
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                          High Acceptance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "requirements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Application Requirements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {details.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="text-[#EE7A36] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Available Scholarships</h3>
              <div className="space-y-3">
                {details.scholarships.map((scholarship, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <Award className="text-[#EE7A36]" size={24} />
                    <span className="text-gray-800 font-semibold">{scholarship}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "cost" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cost of Living & Study</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <DollarSign className="text-[#EE7A36] mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Tuition Fees</h3>
                <p className="text-4xl font-bold text-[#EE7A36] mb-4">{details.avgCost}</p>
                <p className="text-gray-600">Average annual tuition for international students</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <Globe className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Living Cost</h3>
                <p className="text-4xl font-bold text-blue-600 mb-4">{details.livingCost}</p>
                <p className="text-gray-600">Estimated annual living expenses</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Types Available</h3>
              <div className="flex flex-wrap gap-3">
                {details.courseTypes.map((course, idx) => (
                  <span key={idx} className="px-6 py-3 bg-white border-2 border-[#EE7A36] text-[#EE7A36] rounded-xl font-semibold">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}