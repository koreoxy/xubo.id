import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Code,
  Palette,
  Globe,
  Server,
  GraduationCap,
  Star,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Mail,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Website",
      description:
        "Desain UI/UX yang menarik dan user-friendly untuk website Anda dengan pendekatan modern",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Fullstack Website",
      description:
        "Pengembangan website lengkap dari frontend hingga backend dengan teknologi terkini",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Page",
      description:
        "Landing page yang optimal untuk konversi dan engagement dengan performa tinggi",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Sistem backend yang robust dan scalable untuk aplikasi enterprise Anda",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Website Tugas Mahasiswa",
      description:
        "Bantuan pembuatan website untuk keperluan akademik dengan standar profesional",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      image: "/images/project1.png",
      description:
        "Platform e-commerce modern dengan fitur lengkap, payment gateway, dan dashboard admin yang powerful",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Corporate Website",
      image: "/images/project2.png",
      description:
        "Website perusahaan dengan desain profesional, sistem CMS, dan optimasi SEO yang sempurna",
      tech: ["React", "Tailwind", "Strapi"],
    },
  ];

  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "CEO Startup Tech",
      content:
        "Xubo.id berhasil membuat website yang sangat sesuai dengan visi perusahaan kami. Tim yang profesional dan hasil yang memuaskan! Highly recommended untuk semua kebutuhan web development.",
      rating: 5,
      avatar: "AR",
    },
    {
      name: "Sari Indah",
      role: "Owner UMKM",
      content:
        "Pelayanan yang sangat baik dan website yang dibuat sangat membantu bisnis saya berkembang pesat. Support yang responsif dan hasil yang beyond expectation!",
      rating: 5,
      avatar: "SI",
    },
  ];

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
                  <div className="text-3xl font-bold text-green-400">50+</div>
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
                  src="/images/hero-bg.png"
                  alt="Website Development"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl border border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover:border-green-600/50 transition-all duration-300">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-green-600/20 border border-green-600/30 text-green-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-800/50 rounded-full text-green-400 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Kata Klien Kami
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari
              klien yang telah mempercayai layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    <div className="text-gray-400">+62 812-3456-7890</div>
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
                    <div className="text-gray-400">rayssankn@gmail.com</div>
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
                      50+ project berhasil dengan tingkat kepuasan 100%
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
    </div>
  );
}
