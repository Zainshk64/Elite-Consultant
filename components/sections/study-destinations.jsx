"use client";

import { motion } from "framer-motion";
import {
  Globe,
  DollarSign,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const studyDestinations = [
  {
    id: 1,
    country: "United Kingdom",
    countryCode: "GB",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    description: "Study in the UK: Apply for Fall 2025",
    tuition: "Medium Tuition",
    ielts: "IELTS: Required",
    visaSuccess: "95%",
    avgCost: "$20,000/year",
    topUniversities: 4,
    processingTime: "3-4 weeks",
  },
  {
    id: 2,
    country: "Canada",
    countryCode: "CA",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
    description: "Study in Canada: Great PR Opportunities",
    tuition: "Medium Tuition",
    ielts: "IELTS: Required",
    visaSuccess: "98%",
    avgCost: "$15,000/year",
    topUniversities: 3,
    processingTime: "4-6 weeks",
  },
  {
    id: 3,
    country: "Australia",
    countryCode: "AU",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    description: "Study in Australia: Top Universities",
    tuition: "High Tuition",
    ielts: "IELTS: Required",
    visaSuccess: "92%",
    avgCost: "$25,000/year",
    topUniversities: 7,
    processingTime: "4-8 weeks",
  },
  {
    id: 4,
    country: "USA",
    countryCode: "US",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    description: "Study in USA: World's Best Education",
    tuition: "High Tuition",
    ielts: "TOEFL/IELTS: Required",
    visaSuccess: "85%",
    avgCost: "$30,000/year",
    topUniversities: 10,
    processingTime: "6-12 weeks",
  },
  {
    id: 5,
    country: "Germany",
    countryCode: "DE",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    description: "Study in Germany: Low Tuition Fees",
    tuition: "Low Tuition",
    ielts: "IELTS/German: Required",
    visaSuccess: "90%",
    avgCost: "$500/year",
    topUniversities: 6,
    processingTime: "8-12 weeks",
  },
  {
    id: 6,
    country: "New Zealand",
    countryCode: "NZ",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    description: "Study in New Zealand: Quality Education",
    tuition: "Medium Tuition",
    ielts: "IELTS: Required",
    visaSuccess: "93%",
    avgCost: "$18,000/year",
    topUniversities: 8,
    processingTime: "4-6 weeks",
  },
];

export default function StudyDestinations() {
  const [selectedFilter, setSelectedFilter] = useState("Most Popular");
  const [selectedTuition, setSelectedTuition] = useState("All Tuition Ranges");

  const filterOptions = [
    "Most Popular",
    "Highest Success Rate",
    "Fastest Processing",
    "Lowest Cost",
  ];
  const tuitionOptions = [
    "All Tuition Ranges",
    "Low Tuition",
    "Medium Tuition",
    "High Tuition",
  ];

  const filteredDestinations = studyDestinations
    .filter(
      (dest) =>
        selectedTuition === "All Tuition Ranges" ||
        dest.tuition === selectedTuition
    )
    .sort((a, b) => {
      if (selectedFilter === "Highest Success Rate") {
        return parseInt(b.visaSuccess) - parseInt(a.visaSuccess);
      } else if (selectedFilter === "Lowest Cost") {
        return (
          parseInt(a.avgCost.replace(/[^0-9]/g, "")) -
          parseInt(b.avgCost.replace(/[^0-9]/g, ""))
        );
      }
      return 0;
    });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-[#EE7A36]/30 rounded-full mb-4">
            <Globe className="text-[#EE7A36]" size={18} />
            <span className="text-[#EE7A36] text-sm font-semibold">
              EXPLORE WORLDWIDE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Study Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore your options across the world's top education destinations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
        >
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter & Sort
              </label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
              >
                {filterOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tuition Range
              </label>
              <select
                value={selectedTuition}
                onChange={(e) => setSelectedTuition(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
              >
                {tuitionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="font-bold text-gray-800">
                    {dest.countryCode}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {dest.country}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{dest.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-700 font-medium">
                      Visa Success
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      {dest.visaSuccess}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700 font-medium">
                      Avg. Cost
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {dest.avgCost}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700 font-medium">
                      Processing
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {dest.processingTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50 rounded-lg">
                  <GraduationCap size={18} className="text-blue-600" />
                  <span className="text-sm text-gray-700">
                    <span className="font-bold text-blue-600">
                      {dest.topUniversities}
                    </span>{" "}
                    Top Universities
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-[#EE7A36] rounded-full font-semibold">
                    {dest.tuition}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-semibold">
                    {dest.ielts}
                  </span>
                </div>

                {/* <Link href={`/study-destinations/${dest.id}`}> */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 cursor-pointer bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Explore Details
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </motion.button>
                {/* </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
