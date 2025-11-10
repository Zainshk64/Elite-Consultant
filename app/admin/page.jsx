"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Globe,
  LogOut,
  Menu,
  X,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import CountriesTab from "@/components/admin/CountriesTab";
import UniversitiesTab from "@/components/admin/UniversitiesTab";
import { authAPI } from "@/services/adminApi";
import { Toaster, toast } from "react-hot-toast";
import ApplyBoard from "../../components/admin/ApplyBoard";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("universities");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    setShowLogoutDialog(false);
    toast.loading("Logging out...", { id: "logout" });

    setTimeout(() => {
      authAPI.logout();
      toast.success("Logged out successfully!", { id: "logout" });
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    }, 1000);
  };

  const tabs = [
    // { id: "universities", label: "Universities", icon: GraduationCap },
    // { id: "countries", label: "Countries", icon: Globe },
    { id: "applyboard", label: "Apply Board", icon: Globe },

    // Add more tabs here in future
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "universities":
        return <UniversitiesTab />;
      case "countries":
        return <CountriesTab />;
      case "applyboard":
        return <ApplyBoard />;
      // Add future cases here
      default:
        return <UniversitiesTab />;
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#363636",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
          success: {
            iconTheme: {
              primary: "#EE7A36",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        {/* Header */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left side - Menu & Logo */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 text-gray-600 hover:text-[#EE7A36] hover:bg-orange-50 rounded-lg transition-all"
                >
                  <Menu size={24} />
                </button>

                <div className="flex items-center gap-3">
                  {/* <div className="w-10 h-10 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center shadow-lg"> */}
                    {/* <Sparkles className="text-white" size={20} /> */}
                    <img src="/logo.png" width={60} alt="" />
                  {/* </div> */}
                  <div className="hidden sm:block">
                    <h1 className="text-lg font-bold text-[#EE7A36]">
                      H&H Consultant
                    </h1>
                    <p className="text-xs text-gray-600">Admin Dashboard</p>
                  </div>
                </div>
              </div>

              {/* Right side - Logout */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogoutDialog(true)}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition-all"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </motion.button>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:flex fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 shadow-sm flex-col z-40">
            <div className="p-4">
              {/* <div className="mb-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                  <LayoutDashboard size={18} className="text-[#EE7A36]" />
                  <span className="text-sm font-semibold text-gray-700">
                    Navigation
                  </span>
                </div>
              </div> */}

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white shadow-lg shadow-orange-200"
                          : "text-gray-700 hover:bg-orange-50 hover:text-[#EE7A36]"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="ml-auto w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Sidebar - Mobile */}
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsSidebarOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />

                {/* Sidebar */}
                <motion.aside
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="fixed left-0  top-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden"
                >
                  {/* Sidebar Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Sparkles className="text-white" size={20} />
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-800">
                          H&H Consultant
                        </h2>
                        <p className="text-xs text-gray-600">Admin Panel</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-2 text-gray-600 hover:text-[#EE7A36] hover:bg-orange-50 rounded-lg transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="p-4">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                        <LayoutDashboard size={18} className="text-[#EE7A36]" />
                        <span className="text-sm font-semibold text-gray-700">
                          Navigation
                        </span>
                      </div>
                    </div>

                    <nav className="space-y-2">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <motion.button
                            key={tab.id}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setIsSidebarOpen(false);
                              toast.success(`Switched to ${tab.label}`, {
                                duration: 2000,
                              });
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                              activeTab === tab.id
                                ? "bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white shadow-lg"
                                : "text-gray-700 hover:bg-orange-50 hover:text-[#EE7A36]"
                            }`}
                          >
                            <Icon size={20} />
                            <span>{tab.label}</span>
                            {activeTab === tab.id && (
                              <motion.div
                                layoutId="activeTabMobile"
                                className="ml-auto w-2 h-2 bg-white rounded-full"
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </nav>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64 overflow-y-auto min-h-screen">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <AnimatePresence>
        {showLogoutDialog && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogoutDialog(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Dialog */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                  <LogOut className="text-red-600" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  Confirm Logout
                </h3>

                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to logout from your admin account?
                </p>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowLogoutDialog(false)}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg"
                  >
                    Logout
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
