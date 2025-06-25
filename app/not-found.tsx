"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search, Mail, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent leading-none animate-bounce-in">
            404
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-3xl"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-900/30 border border-red-800/50 rounded-full text-red-400 text-sm font-medium">
            <Search className="w-4 h-4 mr-2" />
            Page Not Found
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Oops! Halaman Tidak Ditemukan
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            telah dipindahkan, dihapus, atau URL yang Anda masukkan salah.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-green-600/25 group"
          >
            <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            Kembali ke Beranda
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-green-600 hover:text-green-400 hover:bg-green-600/10 transition-all duration-200 group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            Halaman Sebelumnya
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-6">
            Mungkin Anda Mencari:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Link
              href="/#services"
              className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 hover:border-green-600/50 border border-gray-600 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center mr-3">
                <Search className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-medium text-white group-hover:text-green-400 transition-colors duration-200">
                  Layanan Kami
                </div>
                <div className="text-sm text-gray-400">Lihat semua layanan</div>
              </div>
            </Link>

            <Link
              href="/#projects"
              className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 hover:border-green-600/50 border border-gray-600 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center mr-3">
                <Search className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-medium text-white group-hover:text-green-400 transition-colors duration-200">
                  Portfolio
                </div>
                <div className="text-sm text-gray-400">Lihat project kami</div>
              </div>
            </Link>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4">Butuh bantuan? Hubungi kami:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rayssankn@gmail.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-green-400 transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                rayssankn@gmail.com
              </a>
              <a
                href="https://wa.me/6285175086144"
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-green-400 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Fun Element */}
        <div className="mt-12 text-center">
          <div className="inline-block animate-bounce">
            <div className="text-6xl mb-2">🚀</div>
          </div>
          <p className="text-gray-500 text-sm">
            Jangan khawatir, mari kita buat website impian Anda!
          </p>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-green-500/50 rounded-full animate-bounce"></div>
    </div>
  );
}
