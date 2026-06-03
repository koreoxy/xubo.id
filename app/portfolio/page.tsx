"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft, ExternalLink, Sparkles, Filter, Inbox } from "lucide-react";

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Portofolio Klien | Xubo.id - Jasa Pembuatan Website Profesional";
  }, []);

  // Extract unique categories dynamically from projects data
  const categories = useMemo(() => {
    const allCats = projects.map((p) => p.category);
    return ["Semua", ...Array.from(new Set(allCats))];
  }, []);

  // Filter projects based on category and search query (search by title, tech stack, or description)
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Semua" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-body antialiased selection:bg-brand-navy/10 selection:text-brand-navy">
      <Navbar />

      {/* Back navigation anchor link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 -mb-12 relative z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy/60 hover:text-brand-navy transition-colors font-heading group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-brand-cream">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-xs font-semibold font-heading">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Explore Our Work
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-brand-navy tracking-tight leading-tight">
            Portofolio Klien Kami
          </h1>
          <p className="text-brand-navy/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-body">
            Jelajahi berbagai solusi digital berkualitas tinggi yang telah kami bangun dengan kode bersih, desain premium, dan performa tinggi.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="pb-16 bg-brand-cream relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-brand-navy/8 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/40" />
                <input
                  type="text"
                  placeholder="Cari nama project atau teknologi (React, YOLOv8...)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-brand-secondary border border-brand-navy/8 rounded-xl text-sm font-semibold placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-navy/30 transition-colors"
                />
              </div>

              {/* Info badge */}
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-brand-navy/50">
                <Filter className="w-3.5 h-3.5" />
                <span>Menampilkan {filteredProjects.length} dari {projects.length} Project</span>
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 border-t border-brand-navy/8 pt-6">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="relative px-4 py-2 text-xs font-bold font-heading rounded-lg transition-colors focus:outline-none"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-portfolio-tab"
                        className="absolute inset-0 bg-brand-cream border border-brand-navy/15 rounded-lg shadow-sm -z-10"
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                      />
                    )}
                    <span className={isActive ? "text-brand-navy" : "text-brand-navy/60 hover:text-brand-navy"}>
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Container */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, type: "spring", stiffness: 100, damping: 15 }}
                  className="group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-brand-navy/8 bg-white group-hover:border-brand-navy/20 shadow-sm group-hover:shadow-md transition-all duration-300 min-h-[380px]">
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-brand-secondary">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm border border-brand-navy/10 rounded-full p-2.5 shadow-md">
                          <ExternalLink className="w-4.5 h-4.5 text-brand-navy" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-brand-navy text-brand-cream text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-0.5 bg-brand-navy/5 text-brand-navy/80 text-[9px] font-bold rounded-lg border border-brand-navy/8"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-base font-extrabold text-brand-navy group-hover:text-brand-navy-light transition-colors duration-200 font-heading">
                          {project.title}
                        </h3>
                        <p className="text-brand-navy/70 text-xs leading-relaxed line-clamp-3 font-body">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-brand-navy/40 font-bold uppercase tracking-wide pt-4 border-t border-brand-navy/6 mt-4">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-16 text-center text-brand-navy/60 bg-white rounded-2xl border border-brand-navy/8 shadow-sm flex flex-col items-center justify-center space-y-3">
                <Inbox className="w-12 h-12 text-brand-navy/20" />
                <h3 className="text-base font-bold font-heading">Tidak ada portofolio yang ditemukan</h3>
                <p className="text-xs text-brand-navy/60 font-body max-w-xs leading-relaxed">
                  Cobalah kata kunci lain atau ubah filter kategori untuk menemukan project yang Anda cari.
                </p>
              </div>
            )}
          </motion.div>
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
