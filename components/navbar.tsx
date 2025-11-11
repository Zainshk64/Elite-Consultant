"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUp, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/career" },

    {
      label: "Visa",
      dropdown: [
        { label: "Study Visa", href: "/visa/study" },
        { label: "Visit Visa", href: "/visa/visit" },
        { label: "Work Visa", href: "/visa/work" },
      ],
    },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.nav
          className={`relative w-full max-w-7xl transition-all duration-500 ${
            scrolled
              ? "bg-white/40 backdrop-blur-md border border-orange-300/40 shadow-lg shadow-orange-200/40"
              : "bg-white/20 backdrop-blur-[1px] border border-orange-200/20"
          } rounded-2xl`}
          animate={{ y: scrolled ? -10 : 0, scale: scrolled ? 0.98 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-orange-50/20 to-white/10 rounded-2xl" />

          <div className="relative px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img src="/logo.png" width={60} height={60} alt="H&H Logo" className="rounded-lg" />
                </motion.div>
                <div className="hidden lg:block">
                  <span className="block font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#EE7A36] to-orange-700">
                    H&H Consultant
                  </span>
                  <span className="block text-xs text-gray-500 -mt-1">Your Success Partner</span>
                </div>
              </Link>

              {/* Desktop Nav Items */}
              <div className="hidden md:flex items-center gap-1 rounded-xl px-2 py-2">
                {navItems.map((item, index) => {
                  const isDropdown = !!item.dropdown;

                  return isDropdown ? (
                    <DesktopDropdown key={item.label} item={item} index={index} />
                  ) : (
                    <NavLink key={item.href} href={item.href} label={item.label} index={index} />
                  );
                })}
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Link href="/register">
                  <motion.button
                    className="relative px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-400 text-white font-semibold rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">Register Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 bg-orange-100/80 rounded-xl text-orange-600 hover:bg-orange-200 transition-all border border-orange-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white/98 backdrop-blur-2xl border-l border-orange-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" width={50} alt="Logo" className="rounded-lg" />
                    <span className="font-bold text-lg text-gray-800">Menu</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-orange-100 rounded-lg transition-colors"
                  >
                    <X className="text-orange-600" size={24} />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const isDropdown = !!item.dropdown;
                    const isOpenDropdown = openMobileDropdown === item.label;

                    return isDropdown ? (
                      <div key={item.label}>
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(isOpenDropdown ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-orange-50 hover:bg-orange-100 border border-transparent hover:border-orange-300 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-gray-700 group-hover:text-orange-600 font-medium">
                              {item.label}
                            </span>
                          </div>
                          <ChevronRight
                            size={18}
                            className={`text-orange-500 transition-transform ${
                              isOpenDropdown ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpenDropdown && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              {item.dropdown.map((subItem, i) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-5 py-3 pl-12 flex items-center gap-3 hover:bg-orange-50 rounded-lg transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                    <span className="text-gray-600 hover:text-orange-600 text-sm font-medium">
                                      {subItem.label}
                                    </span>
                                  </motion.div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center my-3 gap-3 px-5 py-4 rounded-xl bg-orange-50 hover:bg-orange-100 border border-transparent hover:border-orange-300 transition-all group"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-gray-700  group-hover:text-orange-600 font-medium">
                            {item.label}
                          </span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 w-full px-6 py-4 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-400/40 transition-all flex items-center justify-center gap-2"
                  >
                    Register Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-[#EE7A36] to-orange-600 text-white rounded-2xl shadow-xl backdrop-blur-xl border border-orange-300 group"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Back to top"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={24} />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EE7A36] to-orange-400 rounded blur opacity-40 group-hover:opacity-60 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

// Reusable Components
const NavLink = ({ href, label, index }: { href: string; label: string; index: number }) => (
  <Link href={href}>
    <motion.div
      className="relative px-5 py-2.5 group cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="relative z-10 text-md font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
        {label}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-100/20 rounded-lg opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  </Link>
);

const DesktopDropdown = ({ item, index }: { item: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        className="relative px-5 py-2.5 group cursor-pointer flex items-center gap-1"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="relative z-10 text-md font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
          {item.label}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-500 group-hover:text-orange-600 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-100/20 rounded-lg opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-200/30 overflow-hidden"
            style={{ zIndex: 50 }}
          >
            <div className="py-2">
              {item.dropdown.map((subItem: any, i: number) => (
                <Link key={subItem.href} href={subItem.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-5 py-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50 transition-all group/sub"
                  >
                    <span className="text-gray-800 font-medium group-hover/sub:text-orange-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      {subItem.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};