"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Laptop, Layout } from "lucide-react";

interface ServiceTier {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  features: string[];
  ctaText: string;
}

export default function ServiceExplorer() {
  const [activeTab, setActiveTab] = useState("landing");

  const tiers: Record<string, ServiceTier> = {
    landing: {
      id: "landing",
      icon: <Layout className="w-5 h-5" />,
      title: "Landing Page Premium",
      subtitle: "Terbaik untuk Promosi & Profil Bisnis",
      description: "Website satu halaman berkonversi tinggi, dioptimalkan untuk performa cepat dan kampanye iklan digital Anda. Desain unik yang disesuaikan secara khusus dengan brand Anda.",
      duration: "3 - 5 Hari Kerja",
      features: [
        "Desain Kustom Eksklusif (No Template)",
        "Mobile Responsive & SEO Friendly",
        "Integrasi Tombol WhatsApp & Media Sosial",
        "Formulir Kontak / Formulir Leads",
        "Google Analytics & Facebook Pixel Setup",
        "Gratis Hosting & Domain .com selama 1 Tahun",
      ],
      ctaText: "Pesan Landing Page",
    },
    ecommerce: {
      id: "ecommerce",
      icon: <Zap className="w-5 h-5" />,
      title: "Toko Online Modern",
      subtitle: "Terbaik untuk Penjualan Produk Fisik",
      description: "Platform e-commerce mandiri yang dinamis dan berfitur lengkap untuk menjual produk Anda secara online secara aman, lengkap dengan payment gateway dan otomasi ekspedisi.",
      duration: "7 - 14 Hari Kerja",
      features: [
        "Sistem Manajemen Produk & Stok Dinamis",
        "Keranjang Belanja & Checkout Mandiri",
        "Kalkulator Ongkos Kirim Otomatis (RajaOngkir)",
        "Payment Gateway Terintegrasi (Midtrans, dll.)",
        "Dashboard Laporan Penjualan Bisnis",
        "Keamanan SSL & Backup Data Mingguan",
      ],
      ctaText: "Bangun Toko Online",
    },
    custom: {
      id: "custom",
      icon: <Laptop className="w-5 h-5" />,
      title: "Web Portal & Custom App",
      subtitle: "Terbaik untuk Sistem Internal & Portal Khusus",
      description: "Aplikasi web kustom yang dibangun dari nol menggunakan arsitektur modern (Next.js/React/Node.js) untuk memproses kebutuhan alur kerja bisnis internal Anda yang kompleks.",
      duration: "14 - 30 Hari Kerja",
      features: [
        "Arsitektur Next.js Modern & API Terintegrasi",
        "Sistem Login Multi-Role (RBAC)",
        "Kalkulasi Data & Ekspor Dokumen Dinamis",
        "Optimasi Kecepatan & Kapasitas Database Tinggi",
        "Dukungan Skalabilitas Jangka Panjang",
        "Dokumentasi Teknis Lengkap & Kode Clean",
      ],
      ctaText: "Mulai Diskusi Kustom",
    },
  };

  const currentTier = tiers[activeTab];

  return (
    <div className="bg-white border border-brand-navy/8 rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Navigation tabs */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-brand-navy/8 pb-4 mb-8">
        {Object.values(tiers).map((tier) => {
          const isActive = activeTab === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setActiveTab(tier.id)}
              className="relative flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 text-sm font-bold font-heading rounded-lg transition-colors focus:outline-none flex-1"
            >
              {isActive && (
                <motion.div
                  layoutId="active-explorer-tab"
                  className="absolute inset-0 bg-brand-cream border border-brand-navy/15 rounded-lg shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />
              )}
              <span className={isActive ? "text-brand-navy font-extrabold" : "text-brand-navy/60 hover:text-brand-navy"}>
                {tier.icon}
              </span>
              <span className={isActive ? "text-brand-navy font-extrabold" : "text-brand-navy/60 hover:text-brand-navy"}>
                {tier.title.split(" ")[0] + " " + (tier.title.split(" ")[1] || "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explorer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[320px]">
        {/* Detail Panel */}
        <motion.div
          key={activeTab + "-detail"}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="px-3 py-1 bg-brand-navy/5 text-brand-navy border border-brand-navy/10 text-xs font-bold rounded-full uppercase tracking-wider">
              {currentTier.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy">
              {currentTier.title}
            </h3>
          </div>

          <p className="text-brand-navy/85 text-sm leading-relaxed font-body">
            {currentTier.description}
          </p>

          <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-navy bg-brand-navy/5 border border-brand-navy/8 rounded-xl p-3 w-fit">
            <ShieldCheck className="w-4 h-4" />
            <span>Estimasi Durasi Pengerjaan: <strong>{currentTier.duration}</strong></span>
          </div>
        </motion.div>

        {/* Features Checklist */}
        <motion.div
          key={activeTab + "-features"}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-brand-secondary rounded-xl p-6 border border-brand-navy/6 space-y-6"
        >
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy/50 font-heading">
            Fitur Yang Termasuk:
          </h4>
          <ul className="space-y-3 text-sm">
            {currentTier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 font-body">
                <span className="w-5 h-5 rounded-full bg-brand-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand-navy" />
                </span>
                <span className="text-brand-navy/80 font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/6285175086144?text=Halo%20Xubo.id,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(currentTier.title)}.%20Bisa%20berdiskusi%20lebih%20lanjut?`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2 w-full text-sm font-heading py-3"
          >
            {currentTier.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
