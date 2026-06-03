"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import {
  Star,
  MessageSquare,
  Users,
  TrendingUp,
  Zap,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      id: "1",
      name: "Ahmad Rizki",
      role: "CEO & Founder",
      company: "TechStart Indonesia",
      content:
        "Xubo.id berhasil membuat website yang sangat sesuai dengan visi perusahaan kami. Tim yang profesional dan hasil yang memuaskan!",
      rating: 5,
      avatar: "AR",
      delay: 100,
      position: {
        top: "8%",
        left: "5%",
        rotation: -2,
      },
    },
    {
      id: "2",
      name: "Sari Indah",
      role: "Business Owner",
      company: "Indah Craft & Co",
      content:
        "Pelayanan yang sangat baik dan website yang dibuat sangat membantu bisnis saya berkembang pesat. Support yang responsif!",
      rating: 5,
      avatar: "SI",
      delay: 300,
      position: {
        top: "12%",
        left: "60%",
        rotation: 3,
      },
    },
    {
      id: "3",
      name: "Budi Santoso",
      role: "Marketing Director",
      company: "Digital Solutions",
      content:
        "Website e-commerce yang dibuat sangat user-friendly dan conversion rate meningkat drastis. Tim Xubo.id sangat memahami kebutuhan bisnis modern.",
      rating: 5,
      avatar: "BS",
      delay: 500,
      position: {
        top: "40%",
        left: "12%",
        rotation: -3,
      },
    },
    {
      id: "4",
      name: "Maya Putri",
      role: "Product Manager",
      company: "InnovateTech",
      content:
        "Kualitas code yang clean, dokumentasi yang lengkap, dan maintenance yang mudah. Exactly what we needed for our growing startup!",
      rating: 5,
      avatar: "MP",
      delay: 200,
      position: {
        top: "35%",
        left: "68%",
        rotation: 2,
      },
    },
    {
      id: "5",
      name: "Doni Pratama",
      role: "CTO",
      company: "StartupHub",
      content:
        "Implementasi teknologi terdepan dengan performa yang luar biasa. Website kami bisa handle traffic tinggi tanpa masalah.",
      rating: 5,
      avatar: "DP",
      delay: 400,
      position: {
        top: "68%",
        left: "20%",
        rotation: -1,
      },
    },
    {
      id: "6",
      name: "Lisa Wijaya",
      role: "Creative Director",
      company: "Design Studio",
      content:
        "Desain yang stunning dan UX yang intuitive. Klien-klien kami selalu impressed dengan website yang dibuat. Collaboration yang sangat menyenangkan!",
      rating: 5,
      avatar: "LW",
      delay: 600,
      position: {
        top: "70%",
        left: "64%",
        rotation: 3,
      },
    },
  ];

  const stats = [
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      value: "10+",
      label: "Happy Clients",
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      value: "4.9/5",
      label: "Average Rating",
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      value: "200%",
      label: "Growth Rate",
    },
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      value: "24/7",
      label: "Support",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative py-20 md:py-32 bg-[#F3F3ED] overflow-hidden border-t border-b border-brand-navy/8">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-navy/3 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs md:text-sm font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5 mr-2" />
            Client Testimonials
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 font-heading">
            Apa Kata Klien Kami
          </h2>

          <p className="text-base md:text-lg text-brand-navy/70 max-w-2xl mx-auto leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari
            klien yang telah mempercayai layanan profesional kami.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-brand-navy/8 hover:border-brand-navy/20 shadow-sm transition-all duration-300">
                <div className="text-brand-navy mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-3xl font-extrabold text-brand-navy mb-1 font-heading">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-brand-navy/60 font-semibold font-body">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Container */}
        {isMobile ? (
          // Mobile Carousel
          <div className="relative max-w-sm mx-auto px-4">
            <div className="relative bg-white border border-brand-navy/8 rounded-2xl p-6 pt-10 shadow-md overflow-hidden">
              {/* Quote icon banner */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center shadow-md">
                  <Quote className="w-4 h-4 text-brand-cream" />
                </div>
              </div>

              {/* Slider */}
              <div className="relative overflow-hidden min-h-[220px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full text-center font-body"
                  >
                    {/* Stars */}
                    <div className="flex items-center justify-center mb-4 space-x-1">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-brand-navy fill-current"
                        />
                      ))}
                    </div>

                    <blockquote className="text-brand-navy/80 text-sm leading-relaxed mb-6 italic">
                      "{testimonials[currentSlide].content}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-3 text-left">
                      <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-cream font-bold text-sm shadow-sm">
                        {testimonials[currentSlide].avatar}
                      </div>
                      <div>
                        <div className="font-extrabold text-brand-navy text-sm font-heading">
                          {testimonials[currentSlide].name}
                        </div>
                        <div className="text-[10px] text-brand-navy/60 font-semibold">
                          {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-navy/5">
                <div
                  className="h-full bg-brand-navy transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Slider triggers */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white border border-brand-navy/8 hover:border-brand-navy/20 rounded-full flex items-center justify-center text-brand-navy transition-all duration-200 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? "bg-brand-navy w-6 h-1.5"
                        : "bg-brand-navy/20 w-1.5 h-1.5"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white border border-brand-navy/8 hover:border-brand-navy/20 rounded-full flex items-center justify-center text-brand-navy transition-all duration-200 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          // Desktop Scattered Layout
          <div className="relative h-[480px]">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        )}

        {/* Call to Action Box */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-8 border border-brand-navy/8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 font-heading">
              Siap Memulai Project Website Anda?
            </h3>
            <p className="text-brand-navy/70 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              Bergabunglah dengan partner-partner bisnis kami yang telah mewujudkan kehadiran digital mereka dengan hasil premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center text-sm"
              >
                <Zap className="mr-2 w-4 h-4" />
                Mulai Project Anda
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center text-sm"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
