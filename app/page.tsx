"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Mail,
  Sparkles,
  Zap,
  Shield,
  ExternalLink,
} from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

// New interactive modules
import ServiceExplorer from "@/components/ServiceExplorer";
import PriceCalculator from "@/components/PriceCalculator";
import RoadmapTimeline from "@/components/RoadmapTimeline";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Framer Motion spring presets
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-body antialiased selection:bg-brand-navy/10 selection:text-brand-navy">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-16 overflow-hidden">
        {/* Soft elegant gradient blur behind hero */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-navy/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand-navy/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
            {/* Left Content Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-3.5 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs sm:text-sm font-semibold font-heading"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Professional Web Development Agency
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy leading-[1.1] tracking-tight font-heading"
                >
                  Mewujudkan Website
                  <span className="block text-brand-navy-light mt-1">
                    Impian Bisnis Anda
                  </span>
                  <span className="block text-brand-navy/60 text-xl sm:text-2xl lg:text-3xl font-medium mt-3 tracking-normal font-body">
                    dengan Teknologi Terdepan & Desain Eksklusif
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-brand-navy/80 max-w-xl leading-relaxed font-body"
                >
                  Kami merancang dan mengembangkan website modern yang responsif, berkecepatan tinggi, dan berkonversi maksimal untuk kemajuan brand digital Anda.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 font-heading">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center text-sm"
                >
                  <Zap className="mr-2 w-4 h-4" />
                  Mulai Project Anda
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="btn-secondary inline-flex items-center justify-center text-sm"
                >
                  Lihat Portfolio
                </a>
              </motion.div>

              {/* Quick Metrics */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-10 pt-4 border-t border-brand-navy/8 font-heading"
              >
                <div>
                  <div className="text-3xl font-extrabold text-brand-navy">10+</div>
                  <div className="text-xs text-brand-navy/50 font-bold uppercase tracking-wider mt-0.5">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-brand-navy">100%</div>
                  <div className="text-xs text-brand-navy/50 font-bold uppercase tracking-wider mt-0.5">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-brand-navy">24/7</div>
                  <div className="text-xs text-brand-navy/50 font-bold uppercase tracking-wider mt-0.5">Premium Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Illustration Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative z-10 w-full max-w-sm sm:max-w-md animate-float">
                <Image
                  src="/images/hero-icon.png"
                  alt="Website Development Illustration"
                  width={480}
                  height={320}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-navy/3 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-brand-secondary border-t border-b border-brand-navy/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs font-semibold font-heading mb-4">
              <Shield className="w-3.5 h-3.5 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 font-heading">
              Layanan Profesional Kami
            </h2>
            <p className="text-base sm:text-lg text-brand-navy/70 max-w-2xl mx-auto leading-relaxed">
              Kami menyediakan berbagai layanan pengembangan website berskala penuh yang disesuaikan secara khusus dengan kebutuhan model bisnis modern Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-brand-navy/8 hover:border-brand-navy/20 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-brand-navy mb-4 group-hover:scale-105 transition-transform duration-250">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 font-heading">
                  {service.title}
                </h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed font-body">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Explorer Section (NEW Tab Panel) */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-3 font-heading">
              Eksplorasi Paket Layanan Detail
            </h2>
            <p className="text-brand-navy/70 max-w-xl mx-auto text-sm leading-relaxed">
              Temukan transparansi lingkup pengerjaan dan pilih tipe paket website yang paling relevan dengan arah perkembangan bisnis Anda.
            </p>
          </div>

          <ServiceExplorer />
        </div>
      </section>

      {/* Process Roadmap Timeline Section (NEW Process Guide) */}
      <section className="py-20 bg-brand-secondary border-t border-b border-brand-navy/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-3 font-heading">
              Alur Kerja Pengerjaan Project
            </h2>
            <p className="text-brand-navy/70 max-w-xl mx-auto text-sm leading-relaxed">
              Bagaimana kami memproses ide Anda mulai dari konsep riset dasar hingga situs siap diluncurkan ke pasar global secara profesional.
            </p>
          </div>

          <RoadmapTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs font-semibold font-heading mb-4">
              <Code className="w-3.5 h-3.5 mr-2" />
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 font-heading">
              Project Terbaru Kami
            </h2>
            <p className="text-base sm:text-lg text-brand-navy/70 max-w-2xl mx-auto leading-relaxed">
              Beberapa project yang telah kami kerjakan dengan keandalan kode, performa prima, serta desain yang memanjakan mata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const position = index % 3;
              const isWide = position === 0 || position === 2;
              const spanClass = isWide ? "lg:col-span-2 lg:row-span-1" : "lg:col-span-1 lg:row-span-2";
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.05 }}
                  className={`${spanClass} group cursor-pointer`}
                  onClick={() => openProjectModal(project)}
                >
                  {isWide ? (
                    // Wide Bento Card (lg:col-span-2 lg:row-span-1)
                    <div className="relative h-full flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-brand-navy/8 bg-white group-hover:border-brand-navy/20 shadow-sm group-hover:shadow-md transition-all duration-300 min-h-[240px]">
                      <div className="relative w-full lg:w-1/2 h-48 lg:h-auto overflow-hidden bg-brand-secondary">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-full p-3 shadow-md">
                            <ExternalLink className="w-5 h-5 text-brand-navy" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-brand-navy text-brand-cream text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 w-full lg:w-1/2 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-0.5 bg-brand-navy/5 text-brand-navy/80 text-[10px] font-bold rounded-lg border border-brand-navy/8"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-navy-light transition-colors duration-200 font-heading">
                            {project.title}
                          </h3>
                          <p className="text-brand-navy/70 text-xs leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-brand-navy/40 font-bold uppercase tracking-wide pt-3 border-t border-brand-navy/6 mt-2">
                          <span>{project.client}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Tall Bento Card (lg:col-span-1 lg:row-span-2)
                    <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-brand-navy/8 bg-white group-hover:border-brand-navy/20 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <div className="relative h-72 sm:h-96 overflow-hidden bg-brand-secondary">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-full p-3 shadow-md">
                            <ExternalLink className="w-5 h-5 text-brand-navy" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-brand-navy text-brand-cream text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-0.5 bg-brand-navy/5 text-brand-navy/80 text-[10px] font-bold rounded-lg border border-brand-navy/8"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-lg font-bold text-brand-navy mb-1.5 group-hover:text-brand-navy-light transition-colors duration-200 font-heading">
                            {project.title}
                          </h3>
                          <p className="text-brand-navy/70 text-xs leading-relaxed mb-4 line-clamp-4">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-brand-navy/40 font-bold uppercase tracking-wide pt-4 border-t border-brand-navy/6">
                          <span>{project.client}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Grid Balancer Card */}
            {projects.length % 3 !== 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: projects.length * 0.05 }}
                className={`${
                  projects.length % 3 === 1 ? "lg:col-span-1 lg:row-span-1" : "lg:col-span-2 lg:row-span-1"
                } group`}
              >
                {projects.length % 3 === 1 ? (
                  // Simple 1x1 Balancer Card
                  <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-navy/8 bg-brand-navy text-brand-cream p-6 shadow-sm hover:border-brand-navy/20 transition-all duration-300 min-h-[220px]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cream/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-2 relative z-10">
                      <span className="px-2 py-0.5 bg-brand-cream/10 border border-brand-cream/20 text-brand-cream text-[9px] font-bold uppercase tracking-wider rounded-lg">
                        Tech Stack & Standards
                      </span>
                      <h3 className="text-base font-extrabold font-heading tracking-tight">
                        Premium Capabilities
                      </h3>
                      <p className="text-brand-cream/70 text-xs leading-relaxed font-body">
                        Kami membangun ekosistem web yang andal, scalable, dan ultra-cepat dengan standar teknologi terdepan dunia.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-cream/10 relative z-10">
                      {["Next.js", "React 19", "Tailwind v4", "Motion", "TypeScript"].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-brand-cream/5 border border-brand-cream/10 text-brand-cream text-[10px] font-semibold rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // 2x1 Balancer Card
                  <div className="relative h-full flex flex-col sm:flex-row justify-between overflow-hidden rounded-2xl border border-brand-navy/8 bg-brand-navy text-brand-cream p-6 shadow-sm hover:border-brand-navy/20 transition-all duration-300 min-h-[220px]">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cream/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="p-4 sm:w-1/2 flex flex-col justify-between space-y-4">
                      <div className="space-y-2 relative z-10">
                        <span className="px-2 py-0.5 bg-brand-cream/10 border border-brand-cream/20 text-brand-cream text-[9px] font-bold uppercase tracking-wider rounded-lg">
                          Mulai Project
                        </span>
                        <h3 className="text-xl font-extrabold font-heading tracking-tight">
                          Punya Ide Website Impian?
                        </h3>
                        <p className="text-brand-cream/70 text-xs leading-relaxed font-body">
                          Mari diskusikan kebutuhan digital bisnis Anda bersama tim kami. Kami siap menghadirkan solusi web dengan performa tinggi.
                        </p>
                      </div>
                      <a
                        href="#contact"
                        className="btn-secondary w-fit text-xs font-heading py-2 px-4 bg-brand-cream text-brand-navy border-none hover:bg-brand-cream/90 flex items-center gap-1.5"
                      >
                        Mulai Sekarang
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="p-4 sm:w-1/2 flex flex-col justify-end">
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t sm:border-t-0 sm:border-l border-brand-cream/10 sm:pl-4 relative z-10">
                        <div className="text-[10px] text-brand-cream/50 font-bold uppercase tracking-wider w-full mb-1">
                          Standar Mutu Kami:
                        </div>
                        {["Clean Code", "SEO Friendly", "Responsive Design", "Fast Loading", "Premium UI"].map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 bg-brand-cream/5 border border-brand-cream/10 text-brand-cream text-[10px] font-semibold rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="btn-secondary inline-flex items-center gap-2 text-sm font-heading"
            >
              Lihat Semua Portofolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Budget & Price Estimator Section (NEW Calculator) */}
      <section className="py-20 bg-brand-secondary border-t border-b border-brand-navy/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-3 font-heading">
              Kalkulator Anggaran Proyek
            </h2>
            <p className="text-brand-navy/70 max-w-xl mx-auto text-sm leading-relaxed">
              Gunakan estimator dinamis kami untuk merancang fitur website Anda dan dapatkan kalkulasi awal investasi secara instan dan transparan.
            </p>
          </div>

          <PriceCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs font-semibold font-heading mb-4">
              <MessageCircle className="w-3.5 h-3.5 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 font-heading">
              Mari Mulai Project Anda
            </h2>
            <p className="text-base sm:text-lg text-brand-navy/70 max-w-2xl mx-auto leading-relaxed">
              Siap membangun portal web modern impian bisnis Anda? Hubungi tim expert kami untuk merencanakan visi digital Anda secara optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Content column */}
            <div className="space-y-8 font-body">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-heading">
                  Mari Berkolaborasi
                </h3>
                <p className="text-brand-navy/80 text-sm leading-relaxed mb-6">
                  Kami siap membantu memformulasikan solusi website terbaik yang personal, scalability tinggi, serta andal dari segi coding. Hubungi kami melalui channel komunikasi resmi berikut:
                </p>
              </div>

              {/* Consultation Boxes */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-brand-navy/8 shadow-sm">
                  <div className="w-10 h-10 bg-brand-navy/5 border border-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm font-heading">WhatsApp Support</div>
                    <a
                      className="text-brand-navy/80 hover:text-brand-navy font-semibold text-xs transition-colors"
                      href="https://wa.me/6285175086144"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +62 851-7508-6144
                    </a>
                    <div className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider mt-0.5">
                      Fast Response 24/7
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-brand-navy/8 shadow-sm">
                  <div className="w-10 h-10 bg-brand-navy/5 border border-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm font-heading">Email Consultation</div>
                    <a
                      className="text-brand-navy/80 hover:text-brand-navy font-semibold text-xs transition-colors"
                      href="mailto:rayssankn@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rayssankn@gmail.com
                    </a>
                    <div className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider mt-0.5">
                      Professional Proposal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Checklist Box */}
            <div className="bg-white p-8 rounded-2xl border border-brand-navy/8 shadow-sm font-body">
              <h3 className="text-lg font-bold text-brand-navy mb-6 font-heading border-b border-brand-navy/8 pb-3">
                Kenapa Memilih Kami?
              </h3>
              <div className="space-y-4 text-xs font-semibold">
                {[
                  { title: "Pengalaman Sukses", desc: "10+ project sukses dengan kepuasan klien penuh." },
                  { title: "Arsitektur Kode Modern", desc: "Next.js 15, Tailwind v4, & Framer Motion premium." },
                  { title: "Layanan Dukungan 24/7", desc: "Maintenance penuh pasca-rilis secara proaktif." },
                  { title: "Pricing Transparan", desc: "Harga rasional dengan kalkulasi awal yang detail." },
                  { title: "Timeline Presisi", desc: "Penyelesaian tepat waktu sesuai kesepakatan tertulis." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-navy mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-brand-navy leading-normal">{item.title}</div>
                      <div className="text-[11px] text-brand-navy/60 font-medium leading-normal mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      )}
    </div>
  );
}
