"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, LogOut, Menu, X, Sparkle, Sparkles } from "lucide-react";
import CountriesTab from "@/components/admin/CountriesTab";
import UniversitiesTab from "@/components/admin/UniversitiesTab";
import { authAPI } from "@/services/adminApi";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("universities");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      authAPI.logout();
      window.location.href = "/login";
    }
  };

  const tabs = [
    { id: "universities", label: "Universities", icon: GraduationCap },
    { id: "countries", label: "Countries", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#EE7A36]"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    <Sparkles />
                  </span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-800">
                    H&H Consultant
                  </h1>
                  <p className="text-xs text-gray-600">Admin Dashboard</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition-all"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:hidden mb-6">
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 space-y-2"
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        <div className="hidden lg:flex gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "universities" && <UniversitiesTab />}
          {activeTab === "countries" && <CountriesTab />}
        </motion.div>
      </div>
    </div>
  );
}
