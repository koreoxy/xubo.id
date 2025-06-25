"use client";

import { useState, useEffect } from "react";
import { Star, Quote, Briefcase, Heart, Sparkles } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
    color: string;
    delay: number;
    position: {
      top: string;
      left: string;
      rotation: number;
    };
  };
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, testimonial.delay);

    return () => clearTimeout(timer);
  }, [testimonial.delay]);

  return (
    <div
      className={`absolute transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      } ${isHovered ? "z-20 scale-110" : "z-10"}`}
      style={{
        top: testimonial.position.top,
        left: testimonial.position.left,
        transform: `rotate(${testimonial.position.rotation}deg) ${
          isHovered ? "scale(1.1)" : "scale(1)"
        }`,
        animationDelay: `${testimonial.delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect - Behind the card */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none -z-10 ${
          isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
        }`}
        style={{
          background: `radial-gradient(circle, ${testimonial.color
            .replace("bg-gradient-to-br from-", "")
            .replace(" to-", ", ")
            .replace("-500", "")
            .replace("-600", "")}, transparent 70%)`,
          filter: "blur(20px)",
          transform: `scale(${isHovered ? "1.2" : "1"})`,
        }}
      />

      {/* Secondary Glow Layer - Even further behind */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none -z-20 ${
          isHovered ? "opacity-60 scale-125" : "opacity-0 scale-100"
        }`}
        style={{
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent 60%)`,
          filter: "blur(30px)",
          transform: `scale(${isHovered ? "1.4" : "1"})`,
        }}
      />

      {/* Floating Background Elements */}
      <div className="absolute -inset-4 opacity-20 -z-5">
        <div
          className={`absolute top-0 right-0 w-8 h-8 ${testimonial.color} rounded-full animate-float`}
          style={{ animationDelay: `${index * 0.5}s` }}
        />
        <div
          className={`absolute bottom-0 left-0 w-6 h-6 ${testimonial.color} rounded-full animate-pulse`}
          style={{ animationDelay: `${index * 0.3}s` }}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-4 h-4 ${testimonial.color} rounded-full animate-bounce`}
          style={{ animationDelay: `${index * 0.7}s` }}
        />
      </div>

      {/* Main Card - This stays on top */}
      <div
        className={`relative bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 max-w-sm shadow-2xl transition-all duration-500 group z-10 ${
          isHovered ? "shadow-3xl border-green-500/30" : ""
        }`}
        style={{
          background: `linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.9))`,
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Decorative Quote Icon */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
          <Quote className="w-4 h-4 text-white" />
        </div>

        {/* Sparkle Effect */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center mb-4 space-x-1 relative z-10">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          <div className="ml-2 text-xs text-gray-500">
            ({testimonial.rating}/5)
          </div>
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
          <div className="absolute -left-2 -top-2 text-green-400/30 text-4xl font-serif">
            "
          </div>
          <p className="relative z-10 italic">{testimonial.content}</p>
          <div className="absolute -right-2 -bottom-4 text-green-400/30 text-4xl font-serif rotate-180">
            "
          </div>
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center space-x-3 relative z-10">
          {/* Avatar */}
          <div
            className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 ${testimonial.color}`}
          >
            {testimonial.avatar}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
          </div>

          {/* Client Details */}
          <div className="flex-1">
            <div className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors duration-300">
              {testimonial.name}
            </div>
            <div className="flex items-center text-xs text-gray-400 space-x-1">
              <Briefcase className="w-3 h-3" />
              <span>{testimonial.role}</span>
            </div>
            <div className="text-xs text-gray-500">{testimonial.company}</div>
          </div>

          {/* Love Icon */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float-custom-${index} {
          0%,
          100% {
            transform: translateY(0px)
              rotate(${testimonial.position.rotation}deg);
          }
          50% {
            transform: translateY(-10px)
              rotate(${testimonial.position.rotation + 2}deg);
          }
        }
        .animate-float-custom {
          animation: float-custom-${index} 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
