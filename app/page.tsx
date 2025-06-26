"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-800/50 rounded-full text-green-400 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Professional Web Development Services
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Build Your
                  <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                    Dream Website
                  </span>
                  <span className="block text-gray-300 text-2xl sm:text-3xl lg:text-4xl font-normal mt-2">
                    with Modern Technology
                  </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                  Layanan profesional untuk membangun website yang modern,
                  responsif, dan sesuai dengan kebutuhan bisnis Anda. Dari
                  konsep hingga deployment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-green-600/25"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Mulai Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-green-600 hover:text-green-400 hover:bg-green-600/10 transition-all duration-200"
                >
                  Lihat Portfolio
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-500">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-500">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero-icon.png"
                  alt="Website Development"
                  width={600}
                  height={400}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-800/50 rounded-full text-green-400 text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Layanan Profesional Kami
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan pengembangan website yang
              disesuaikan dengan kebutuhan bisnis modern Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-600/50 hover:shadow-xl hover:shadow-green-600/10 transition-all duration-300 group"
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-800/50 rounded-full text-green-400 text-sm font-medium mb-4">
              <Code className="w-4 h-4 mr-2" />
              Portfolio
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Terbaru Kami
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beberapa project yang telah kami kerjakan dengan teknologi
              terdepan dan hasil yang memuaskan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover:border-green-600/50 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-green-600/20 backdrop-blur-sm border border-green-600/30 rounded-full p-3">
                        <ExternalLink className="w-6 h-6 text-green-400" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-600/50 border border-green-600/30 text-white text-xs rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Click Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-green-400 text-xs font-medium">
                      Click untuk detail →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-800/50 rounded-full text-green-400 text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Mari Mulai Project Anda
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Siap memulai project website impian Anda? Mari diskusikan
              kebutuhan dan visi Anda dengan tim expert kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Mari Berkolaborasi
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Kami siap membantu mewujudkan website impian Anda dengan
                  teknologi terdepan dan pendekatan yang personal. Hubungi kami
                  melalui channel yang tersedia.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <a
                      className="text-gray-400 hover:text-green-400"
                      href="https://wa.me/6285175086144"
                      target="_blank"
                    >
                      +62 851-7508-6144
                    </a>
                    <div className="text-sm text-green-400">
                      Fast Response 24/7
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a
                      className="text-gray-400 hover:text-green-400"
                      href="mailto:rayssankn@gmail.com"
                      target="_blank"
                    >
                      rayssankn@gmail.com
                    </a>
                    <div className="text-sm text-green-400">
                      Professional Consultation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">
                Kenapa Memilih Kami?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">
                      Pengalaman Terpercaya
                    </div>
                    <div className="text-sm text-gray-400">
                      10+ project berhasil dengan tingkat kepuasan 100%
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">
                      Teknologi Terkini
                    </div>
                    <div className="text-sm text-gray-400">
                      Next.js, React, Node.js, dan framework modern lainnya
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">
                      Support Premium
                    </div>
                    <div className="text-sm text-gray-400">
                      Dukungan penuh 24/7 setelah project selesai
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">
                      Harga Kompetitif
                    </div>
                    <div className="text-sm text-gray-400">
                      Kualitas enterprise dengan investasi yang reasonable
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">
                      Delivery Tepat Waktu
                    </div>
                    <div className="text-sm text-gray-400">
                      Komitmen timeline yang jelas dan dapat diandalkan
                    </div>
                  </div>
                </div>
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
