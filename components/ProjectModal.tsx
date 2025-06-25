"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  User,
  Tag,
  Globe,
} from "lucide-react";

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    images: string[];
    tech: string[];
    category: string;
    client: string;
    duration: string;
    year: string;
    liveUrl?: string;
    githubUrl?: string;
    features: string[];
    challenges: string[];
    results: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl transform transition-all duration-500 ease-out ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
        >
          <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Header Section */}
          <div className="relative">
            {/* Image Gallery */}
            <div className="relative h-80 bg-gray-800">
              <Image
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

              {/* Image Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/50 hover:bg-gray-900/70 rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/50 hover:bg-gray-900/70 rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentImageIndex
                            ? "bg-green-400"
                            : "bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-600/20 border border-green-600/30 text-green-400 text-sm rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tentang Project
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Fitur Utama
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tantangan & Solusi
                  </h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                      >
                        <p className="text-gray-400">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Hasil & Impact
                  </h3>
                  <div className="space-y-3">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-600/20 border border-green-600/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-400">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Informasi Project
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-500">Client</div>
                        <div className="text-white font-medium">
                          {project.client}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-500">Tahun</div>
                        <div className="text-white font-medium">
                          {project.year}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Tag className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-500">Kategori</div>
                        <div className="text-white font-medium">
                          {project.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <div className="text-sm text-gray-500">Durasi</div>
                        <div className="text-white font-medium">
                          {project.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-green-600/25"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Lihat Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-6 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-green-600 hover:text-green-400 hover:bg-green-600/10 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Technology Stack */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
