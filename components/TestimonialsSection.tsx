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

export default function TestimonialsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play functionality for mobile
  useEffect(() => {
    if (!isMobile || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, isAutoPlaying]);

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
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      delay: 200,
      position: {
        top: "10%",
        left: "5%",
        rotation: -3,
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
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      delay: 600,
      position: {
        top: "15%",
        left: "60%",
        rotation: 2,
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
      color: "bg-gradient-to-br from-green-500 to-green-600",
      delay: 1000,
      position: {
        top: "45%",
        left: "15%",
        rotation: -2,
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
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      delay: 1400,
      position: {
        top: "35%",
        left: "70%",
        rotation: 4,
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
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      delay: 1800,
      position: {
        top: "65%",
        left: "25%",
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
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      delay: 2200,
      position: {
        top: "70%",
        left: "65%",
        rotation: 3,
      },
    },
  ];

  const stats = [
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      value: "50+",
      label: "Happy Clients",
      color: "text-blue-400",
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-yellow-400",
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      value: "200%",
      label: "Growth Rate",
      color: "text-green-400",
    },
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      value: "24/7",
      label: "Support",
      color: "text-purple-400",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative py-16 md:py-32 bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 8 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-green-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-green-900/30 border border-green-800/50 rounded-full text-green-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <MessageSquare className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Client Testimonials
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            What Our
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari
            klien yang telah mempercayai layanan profesional kami.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-gray-700 hover:border-green-600/50 transition-all duration-300">
                <div
                  className={`${stat.color} mb-2 md:mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-lg md:text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Container */}
        {isMobile ? (
          // Mobile Optimized Layout
          <div className="relative max-w-sm mx-auto">
            {/* Main Card Container */}
            <div className="relative bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Card Header with Quote Icon */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <div className="p-6 pt-8">
                        {/* Rating Stars */}
                        <div className="flex items-center justify-center mb-4 space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 text-center min-h-[80px] flex items-center">
                          <p className="italic">"{testimonial.content}"</p>
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center justify-center space-x-3">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${testimonial.color} relative`}
                          >
                            {testimonial.avatar}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-white text-sm">
                              {testimonial.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {testimonial.role}
                            </div>
                            <div className="text-xs text-gray-500">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-out"
                  style={{
                    width: `${
                      ((currentSlide + 1) / testimonials.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg backdrop-blur-sm border border-gray-600 hover:border-green-500/50 z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg backdrop-blur-sm border border-gray-600 hover:border-green-500/50 z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "bg-green-400 w-8 h-2"
                      : "bg-gray-600 w-2 h-2 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Indicator */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-600"
                }`}
              />
              <span className="text-xs text-gray-500">
                {isAutoPlaying ? "Auto-playing" : "Paused"}
              </span>
            </div>
          </div>
        ) : (
          // Desktop Scattered Layout
          <div className="relative h-[800px] md:h-[600px] lg:h-[500px]">
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />

            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}

            {/* Central Decorative Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse" />
              <div
                className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Mari bergabung dengan klien-klien yang telah merasakan layanan
              profesional kami dan mencapai kesuksesan digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-green-600/25 text-sm md:text-base"
              >
                <Zap className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Start Your Project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-green-600 hover:text-green-400 hover:bg-green-600/10 transition-all duration-200 text-sm md:text-base"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
