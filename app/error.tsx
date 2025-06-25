"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600/20 border-2 border-red-600/30 rounded-full mb-6 animate-bounce-in">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent leading-none">
            Oops!
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-900/30 border border-red-800/50 rounded-full text-red-400 text-sm font-medium">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Something Went Wrong
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Terjadi Kesalahan Sistem
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah
            diberitahu dan sedang menangani masalah ini. Silakan coba lagi dalam
            beberapa saat.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-left max-w-2xl mx-auto">
              <h3 className="text-sm font-semibold text-red-400 mb-2">
                Error Details (Development):
              </h3>
              <p className="text-xs text-gray-400 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-green-600/25 group"
          >
            <RefreshCw className="mr-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Coba Lagi
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-green-600 hover:text-green-400 hover:bg-green-600/10 transition-all duration-200 group"
          >
            <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Support Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            Butuh Bantuan?
          </h3>
          <p className="text-gray-400 mb-6">
            Jika masalah ini terus berlanjut, jangan ragu untuk menghubungi tim
            support kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@xubo.id"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-green-400 transition-all duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-green-400 transition-all duration-200"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Laporkan Bug
            </a>
          </div>
        </div>

        {/* Status Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Error ID: {error.digest || "Unknown"} •{" "}
            {new Date().toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
}
