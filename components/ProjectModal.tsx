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
  ChevronLeft,
  ChevronRight,
  Clock
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

  useEffect(() => {
    if (isOpen) {
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
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl border border-brand-navy/10 overflow-hidden shadow-2xl flex flex-col font-body text-brand-navy"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-25 p-2.5 bg-brand-cream/80 hover:bg-brand-cream hover:scale-105 rounded-full shadow-md text-brand-navy border border-brand-navy/10 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          {/* Header Section with Image Slider */}
          <div className="relative h-80 sm:h-96 bg-brand-secondary border-b border-brand-navy/8">
            <Image
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

            {/* Slider Controls */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-brand-navy border border-brand-navy/10 rounded-full transition-all hover:scale-105 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-brand-navy border border-brand-navy/10 rounded-full transition-all hover:scale-105 shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-brand-navy w-6"
                          : "bg-brand-navy/20"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Float Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
              <span className="self-start px-3 py-1 bg-brand-navy text-brand-cream text-xs rounded-full font-bold uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-1 text-brand-navy">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Grid content */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Description & lists */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading border-b border-brand-navy/10 pb-2">
                    Tentang Project
                  </h3>
                  <p className="text-brand-navy/85 leading-relaxed text-sm">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading border-b border-brand-navy/10 pb-2">
                    Fitur Utama
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-2 flex-shrink-0" />
                        <span className="text-brand-navy/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading border-b border-brand-navy/10 pb-2">
                    Tantangan & Solusi
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="p-4 bg-brand-secondary rounded-xl border border-brand-navy/8 text-sm leading-relaxed"
                      >
                        <p className="text-brand-navy/80">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results & Impact */}
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading border-b border-brand-navy/10 pb-2">
                    Hasil & Dampak
                  </h3>
                  <div className="space-y-2 text-sm">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-2.5">
                        <div className="w-5 h-5 bg-brand-navy/5 border border-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-brand-navy rounded-full" />
                        </div>
                        <span className="text-brand-navy/80">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Metadata sidebar */}
              <div className="space-y-6">
                {/* Meta details card */}
                <div className="bg-brand-secondary rounded-2xl p-6 border border-brand-navy/8">
                  <h3 className="text-lg font-bold mb-4 font-heading border-b border-brand-navy/10 pb-2">
                    Informasi Project
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <User className="w-4 h-4 text-brand-navy flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider">Client</div>
                        <div className="font-semibold">{project.client}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="w-4 h-4 text-brand-navy flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider">Tahun</div>
                        <div className="font-semibold">{project.year}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Tag className="w-4 h-4 text-brand-navy flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider">Kategori</div>
                        <div className="font-semibold">{project.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="w-4 h-4 text-brand-navy flex-shrink-0" />
                      <div>
                        <div className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider">Durasi</div>
                        <div className="font-semibold">{project.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech stack card */}
                <div className="bg-brand-secondary rounded-2xl p-6 border border-brand-navy/8">
                  <h3 className="text-lg font-bold mb-4 font-heading border-b border-brand-navy/10 pb-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-white text-brand-navy text-xs font-semibold rounded-lg border border-brand-navy/8"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 font-heading">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center space-x-2 w-full text-sm py-3"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Lihat Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center space-x-2 w-full text-sm py-3"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
