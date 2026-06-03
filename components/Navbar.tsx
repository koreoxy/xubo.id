"use client";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-navy/8"
            : "bg-brand-cream/80 backdrop-blur-sm border-b border-brand-navy/4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 z-50 relative">
              <a href="/#home" className="text-2xl font-extrabold text-brand-navy font-heading tracking-tight hover:opacity-90">
                Xubo<span className="text-brand-navy-light">.id</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8 font-heading">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-brand-navy hover:text-brand-navy-light px-3 py-2 text-sm font-semibold transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-navy transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
                <a
                  href="/#contact"
                  className="btn-primary py-2 px-6 rounded-lg text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-50 relative">
              <button
                onClick={toggleMenu}
                className="text-brand-navy p-2 rounded-lg hover:bg-brand-navy/5 transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col bg-brand-cream"
          >
            {/* Decorative background glow */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-brand-navy/3 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-navy/3 rounded-full blur-3xl" />

            {/* Menu Items Container */}
            <div className="relative z-10 pt-24 px-6 h-full flex flex-col justify-between pb-8">
              {/* Navigation Links */}
              <div className="space-y-4 flex flex-col">
                {navLinks.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    key={item.href}
                    href={item.href}
                    className="group block text-brand-navy hover:text-brand-navy-light px-4 py-3 text-2xl font-bold font-heading rounded-xl hover:bg-brand-navy/5 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-brand-navy rounded-full mr-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125"></span>
                      <span>{item.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons & Social Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-brand-navy/10"
                >
                  <a
                    href="/#contact"
                    className="btn-primary block w-full py-4 text-center text-lg font-semibold rounded-xl"
                    onClick={closeMenu}
                  >
                    🚀 Get Started
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center space-y-4"
                >
                  <p className="text-brand-navy/50 text-xs font-semibold uppercase tracking-wider">
                    Follow us on social media
                  </p>
                  <div className="flex justify-center space-x-6">
                    {[
                      { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
                      { name: "GitHub", icon: <Github className="w-5 h-5" /> },
                      { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="text-brand-navy/70 hover:text-brand-navy transition-all duration-300 hover:scale-110"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Info Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center pt-4 text-xs border-t border-brand-navy/10"
                >
                  <p className="text-brand-navy/40 font-semibold mb-2">Need help? Contact us:</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="mailto:rayssankn@gmail.com"
                      className="text-brand-navy/70 hover:text-brand-navy flex items-center gap-1 font-semibold"
                    >
                      <Mail size={12} />
                      rayssankn@gmail.com
                    </a>
                    <a
                      href="https://wa.me/6285175086144"
                      className="text-brand-navy/70 hover:text-brand-navy flex items-center gap-1 font-semibold"
                    >
                      <MessageCircle size={12} />
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
