"use client";

import { motion } from "framer-motion";
import { Star, Quote, Briefcase } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95, rotate: testimonial.position.rotation }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: testimonial.position.rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: testimonial.delay / 1000,
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        rotate: testimonial.position.rotation * 0.5,
        y: -10,
        zIndex: 20,
        boxShadow: "0 20px 25px -5px rgba(25, 18, 101, 0.08)",
      }}
      className="absolute max-w-sm cursor-pointer z-10"
      style={{
        top: testimonial.position.top,
        left: testimonial.position.left,
      }}
    >
      {/* Main Card */}
      <div className="relative bg-white border border-brand-navy/8 rounded-2xl p-6 shadow-sm hover:border-brand-navy/20 transition-all duration-300">
        {/* Decorative Quote Icon */}
        <div className="absolute -top-3.5 -left-3.5 w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center shadow-md">
          <Quote className="w-4 h-4 text-brand-cream" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center mb-3 space-x-1 relative z-10 font-body">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-brand-navy fill-current"
            />
          ))}
          <div className="ml-2 text-xs text-brand-navy/40 font-semibold">
            ({testimonial.rating}/5)
          </div>
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-brand-navy/80 text-sm leading-relaxed mb-6 font-body italic">
          <p className="relative z-10">"{testimonial.content}"</p>
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center space-x-3 relative z-10 font-body">
          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-brand-cream font-bold text-sm shadow-sm">
            {testimonial.avatar}
          </div>

          {/* Client Details */}
          <div className="flex-1 min-w-0">
            <div className="font-extrabold text-brand-navy text-sm truncate font-heading">
              {testimonial.name}
            </div>
            <div className="flex items-center text-xs text-brand-navy/60 space-x-1">
              <Briefcase className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{testimonial.role}</span>
            </div>
            <div className="text-[10px] text-brand-navy/40 font-bold tracking-wide uppercase truncate">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
