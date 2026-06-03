"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Calculator, Check, ArrowRight } from "lucide-react";

export default function PriceCalculator() {
  const [siteType, setSiteType] = useState<"landing" | "ecommerce" | "custom">("landing");
  const [pages, setPages] = useState(3);
  const [seo, setSeo] = useState(false);
  const [payment, setPayment] = useState(false);
  const [database, setDatabase] = useState(false);
  const [animations, setAnimations] = useState(false);
  const [total, setTotal] = useState(0);

  // Pricing formula coefficients
  const basePrices = {
    landing: 1000000,
    ecommerce: 2500000,
    custom: 5000000,
  };

  const pagePrice = 100000;
  const seoPrice = 500000;
  const paymentPrice = 750000;
  const databasePrice = 1500000;
  const animationPrice = 300000;

  useEffect(() => {
    let cost = basePrices[siteType];
    
    // Add page pricing (first page included in base, subsequent pages extra)
    if (pages > 1) {
      cost += (pages - 1) * pagePrice;
    }

    if (seo) cost += seoPrice;
    if (payment) cost += paymentPrice;
    if (database) cost += databasePrice;
    if (animations) cost += animationPrice;

    setTotal(cost);
  }, [siteType, pages, seo, payment, database, animations]);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getWhatsAppLink = () => {
    const siteTypeLabels = {
      landing: "Landing Page Premium",
      ecommerce: "Toko Online Modern",
      custom: "Web Portal / Custom App",
    };

    let selectedFeatures: string[] = [];
    if (seo) selectedFeatures.push("Optimasi SEO Premium");
    if (payment) selectedFeatures.push("Integrasi Payment Gateway");
    if (database) selectedFeatures.push("Database & Kustom Admin Dashboard");
    if (animations) selectedFeatures.push("Premium Motion Animations");

    const featuresText = selectedFeatures.length > 0 
      ? selectedFeatures.map(f => `  - ${f}`).join("\n")
      : "  - Tidak ada fitur tambahan";

    const text = `Halo Xubo.id! 👋

Saya baru saja mencoba kalkulator estimasi di website Anda dan ingin berkonsultasi mengenai kebutuhan project berikut:

- *Tipe Website*: ${siteTypeLabels[siteType]}
- *Jumlah Halaman*: ${pages} Halaman
- *Fitur Tambahan*:
${featuresText}

*Estimasi Biaya*: ~${formatPrice(total)}~

Apakah kita bisa mengatur jadwal sesi konsultasi gratis untuk membahas project ini lebih lanjut? Terima kasih!`;

    return `https://wa.me/6285175086144?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white border border-brand-navy/8 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-2 border-b border-brand-navy/8 pb-3">
            <Calculator className="w-5 h-5 text-brand-navy" />
            <h3 className="text-lg font-bold font-heading text-brand-navy">Estimator Project Website</h3>
          </div>

          {/* 1. Website Type */}
          <div className="space-y-3 font-heading">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">
              1. Pilih Tipe Website
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(["landing", "ecommerce", "custom"] as const).map((type) => {
                const labels = {
                  landing: "Landing Page",
                  ecommerce: "Toko Online",
                  custom: "Portal Kustom",
                };
                const isActive = siteType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setSiteType(type);
                      // Set default pages based on site type
                      if (type === "landing") setPages(1);
                      if (type === "ecommerce") setPages(5);
                      if (type === "custom") setPages(10);
                    }}
                    className={`px-4 py-3 rounded-lg border text-sm font-bold text-center transition-all ${
                      isActive
                        ? "bg-brand-navy border-brand-navy text-brand-cream shadow-sm"
                        : "bg-white border-brand-navy/10 text-brand-navy hover:bg-brand-navy/3"
                    }`}
                  >
                    {labels[type]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Pages Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center font-heading">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">
                2. Jumlah Halaman
              </label>
              <span className="text-sm font-extrabold text-brand-navy px-2.5 py-0.5 bg-brand-navy/5 rounded-full border border-brand-navy/10">
                {pages} Halaman
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full h-2 bg-brand-navy/10 rounded-lg appearance-none cursor-pointer accent-brand-navy"
            />
            <div className="flex justify-between text-[10px] text-brand-navy/40 font-bold uppercase font-heading">
              <span>1 Halaman</span>
              <span>20 Halaman</span>
            </div>
          </div>

          {/* 3. Addon Features */}
          <div className="space-y-3 font-body">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50 font-heading block">
              3. Fitur Tambahan (Opsional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { state: seo, setState: setSeo, label: "SEO Optimization", desc: "Meningkatkan ranking Google" },
                { state: payment, setState: setPayment, label: "Payment Gateway", desc: "Menerima pembayaran digital otomatis" },
                { state: database, setState: setDatabase, label: "Database / Admin Portal", desc: "Manajemen data bisnis mandiri" },
                { state: animations, setState: setAnimations, label: "Motion Animation", desc: "Animasi interaktif premium" },
              ].map((addon, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => addon.setState(!addon.state)}
                  className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                    addon.state
                      ? "bg-brand-navy/5 border-brand-navy"
                      : "bg-white border-brand-navy/10 hover:border-brand-navy/20"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                    addon.state ? "bg-brand-navy border-brand-navy" : "border-brand-navy/20"
                  }`}>
                    {addon.state && <Check className="w-3 h-3 text-brand-cream stroke-[3px]" />}
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy leading-tight">{addon.label}</div>
                    <div className="text-[11px] text-brand-navy/60 leading-normal mt-0.5">{addon.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Price Breakdown Card */}
        <div className="lg:col-span-2 bg-brand-secondary rounded-xl p-6 border border-brand-navy/8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy/50 font-heading">
              Kalkulasi Estimasi
            </h4>

            {/* Calculations Breakdown */}
            <div className="space-y-2 text-xs font-semibold font-body text-brand-navy/70 border-b border-brand-navy/8 pb-4">
              <div className="flex justify-between">
                <span>Biaya Dasar Website</span>
                <span className="text-brand-navy">{formatPrice(basePrices[siteType])}</span>
              </div>
              {pages > 1 && (
                <div className="flex justify-between">
                  <span>Halaman Tambahan (+{pages - 1})</span>
                  <span className="text-brand-navy">{formatPrice((pages - 1) * pagePrice)}</span>
                </div>
              )}
              {seo && (
                <div className="flex justify-between">
                  <span>Optimasi SEO</span>
                  <span className="text-brand-navy">{formatPrice(seoPrice)}</span>
                </div>
              )}
              {payment && (
                <div className="flex justify-between">
                  <span>Payment Gateway</span>
                  <span className="text-brand-navy">{formatPrice(paymentPrice)}</span>
                </div>
              )}
              {database && (
                <div className="flex justify-between">
                  <span>Database / Admin Portal</span>
                  <span className="text-brand-navy">{formatPrice(databasePrice)}</span>
                </div>
              )}
              {animations && (
                <div className="flex justify-between">
                  <span>Motion Animations</span>
                  <span className="text-brand-navy">{formatPrice(animationPrice)}</span>
                </div>
              )}
            </div>

            {/* Total display */}
            <div className="space-y-1 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/40 font-heading">
                Total Estimasi Investasi
              </span>
              <div className="text-3xl font-extrabold font-heading text-brand-navy tracking-tight">
                {formatPrice(total)}
              </div>
            </div>
          </div>

          <div className="space-y-3 font-heading">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-full text-sm py-3.5 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-brand-cream fill-current" />
              Konsultasi WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-[10px] text-center text-brand-navy/40 font-bold uppercase leading-relaxed font-body">
              *Estimasi awal untuk konsultasi gratis. Harga final disesuaikan kembali dengan alur sistem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
