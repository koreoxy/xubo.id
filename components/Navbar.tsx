"use client";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-gray-900/98 backdrop-blur-xl shadow-xl border-b border-gray-700/50"
            : "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 z-50 relative">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                Xubo.id
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:scale-105"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-50 relative">
              <button
                onClick={toggleMenu}
                className={`relative text-gray-300 hover:text-green-400 p-3 rounded-lg transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-gray-800/80 text-green-400 shadow-lg"
                    : "hover:bg-gray-800/50"
                }`}
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen
                        ? "rotate-45 translate-y-2.5"
                        : "rotate-0 translate-y-0"
                    }`}
                  />
                  <span
                    className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-2.5"
                        : "rotate-0 translate-y-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isMenuOpen
              ? "bg-gray-900/98 backdrop-blur-xl"
              : "bg-transparent backdrop-blur-none"
          }`}
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Menu Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/98 via-gray-800/95 to-gray-900/98" />

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Menu Items Container */}
          <div className="relative z-10 pt-20 px-6 h-full flex flex-col">
            {/* Navigation Links */}
            <div className="flex-1 space-y-2">
              {[
                { href: "#home", label: "Home", delay: "100ms" },
                { href: "#services", label: "Services", delay: "200ms" },
                { href: "#projects", label: "Projects", delay: "300ms" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group block text-gray-300 hover:text-green-400 px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:translate-x-2 border border-transparent hover:border-gray-700/50 ${
                    isMenuOpen ? "animate-slide-in-mobile" : ""
                  }`}
                  style={{ animationDelay: item.delay }}
                  onClick={closeMenu}
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125"></span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="py-6 border-t border-gray-800/50">
              <a
                href="#contact"
                className={`block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl shadow-green-600/25 hover:shadow-green-600/40 hover:scale-105 text-center border border-green-500/20 ${
                  isMenuOpen ? "animate-slide-in-mobile" : ""
                }`}
                style={{ animationDelay: "400ms" }}
                onClick={closeMenu}
              >
                <div className="flex items-center justify-center">
                  <span className="mr-2">🚀</span>
                  Get Started
                </div>
              </a>
            </div>

            {/* Social Links & Info */}
            <div className="py-6 border-t border-gray-800/50">
              <div className="text-center mb-4">
                <p className="text-gray-500 text-sm mb-3">
                  Follow us on social media
                </p>
                <div className="flex justify-center space-x-6">
                  {[
                    { name: "Instagram", icon: <Instagram /> },
                    { name: "GitHub", icon: <Github /> },
                    { name: "LinkedIn", icon: <Linkedin /> },
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`flex flex-col items-center text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 ${
                        isMenuOpen ? "animate-slide-in-mobile" : ""
                      }`}
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <span className="text-xl mb-1">{social.icon}</span>
                      <span className="text-xs">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-2">
                  Need help? Contact us:
                </p>
                <div className="flex justify-center space-x-4 text-xs">
                  <a
                    href="mailto:rayssankn@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <span className="flex flex-row items-center gap-2">
                      <Mail size={10} />
                      <p>rayssankn@gmail.com</p>
                    </span>
                  </a>
                  <a
                    href="https://wa.me/6285175086144"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <span className="flex flex-row items-center gap-2">
                      <MessageCircle size={10} />
                      <p>WhatsApp</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
