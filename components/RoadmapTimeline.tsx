"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Send } from "lucide-react";

export default function RoadmapTimeline() {
  const steps = [
    {
      icon: <Search className="w-5 h-5 text-brand-cream" />,
      step: "01",
      title: "Discovery & Planning",
      desc: "Riset kebutuhan bisnis, analisis kompetitor, pendefinisian sitemap, dan merancang wireframe awal secara rinci.",
    },
    {
      icon: <PenTool className="w-5 h-5 text-brand-cream" />,
      step: "02",
      title: "Creative Design",
      desc: "Pembuatan konsep visual, pemilihan palet warna premium, dan perancangan prototype UI/UX di Figma hingga disetujui.",
    },
    {
      icon: <Code className="w-5 h-5 text-brand-cream" />,
      step: "03",
      title: "Web Development",
      desc: "Pengkodean bersih (clean code) menggunakan arsitektur modern Next.js/React, integrasi database, dan optimasi SEO terpadu.",
    },
    {
      icon: <Send className="w-5 h-5 text-brand-cream" />,
      step: "04",
      title: "Launch & Support",
      desc: "Audit kualitas performa (QA), pengujian komprehensif, deployment di server hosting, dan dukungan pemeliharaan jangka panjang.",
    },
  ];

  return (
    <div className="relative font-body text-brand-navy">
      {/* Decorative vertical line in background */}
      <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-brand-navy/8 -translate-x-1/2 hidden md:block" />

      <div className="space-y-12 relative">
        {steps.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-start md:items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left/Right Card Panel */}
              <div className="w-full md:w-1/2 px-4 md:px-8">
                <div className="bg-white border border-brand-navy/8 rounded-2xl p-6 shadow-sm hover:border-brand-navy/15 hover:shadow-md transition-all duration-300 relative group">
                  {/* Step label backdrop */}
                  <span className="absolute top-4 right-6 text-5xl font-extrabold font-heading text-brand-navy/4 tracking-wider select-none">
                    {item.step}
                  </span>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-heading text-brand-navy flex items-center gap-2">
                      <span className="md:hidden w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-xs">
                        {item.icon}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-brand-navy/80 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Indicator Dot (Desktop only) */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-brand-navy border-4 border-brand-cream flex items-center justify-center shadow-md cursor-pointer"
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Empty placeholder to align columns */}
              <div className="w-full md:w-1/2 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
