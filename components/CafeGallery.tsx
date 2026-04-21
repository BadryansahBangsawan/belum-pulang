"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "place" | "minuman";
}

export default function CafeGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const images: GalleryImage[] = [
    { id: 1, src: "/instagram1.jpg", alt: "Suasana Belum Pulang 1", category: "place" },
    { id: 2, src: "/instagram2.jpg", alt: "Suasana Belum Pulang 2", category: "place" },
    { id: 3, src: "/instagram3.jpg", alt: "Suasana Belum Pulang 3", category: "place" },
    { id: 4, src: "/instagram4.jpg", alt: "Suasana Belum Pulang 4", category: "place" },
    { id: 5, src: "/instagram1.jpg", alt: "Menu Belum Pulang 1", category: "minuman" },
    { id: 6, src: "/instagram2.jpg", alt: "Menu Belum Pulang 2", category: "minuman" },
    { id: 7, src: "/instagram3.jpg", alt: "Menu Belum Pulang 3", category: "minuman" },
    { id: 8, src: "/instagram4.jpg", alt: "Menu Belum Pulang 4", category: "minuman" },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "place", label: "Place" },
    { id: "minuman", label: "Minuman" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="pt-4 text-center mb-8 lg:mb-16">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Explore Our{" "}
          <span className="text-yellow-500">Gallery</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-yellow-400" />
        
        <p className="mt-6 text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
          Every dish tells a story, every corner invites you in
        </p>
      </div>

      {/* Category Filter - Horizontal Scroll on Mobile */}
      <div className="mb-8 lg:mb-12">
        <div className="flex lg:justify-center gap-3 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory lg:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex-shrink-0 snap-start
                px-5 py-2.5 lg:px-6 lg:py-3 
                rounded-full font-bold text-sm lg:text-lg
                border-2 transition-all duration-300
                ${activeCategory === cat.id
                  ? "bg-yellow-400 text-amber-50 border-brown/70 shadow-lg scale-105"
                  : "bg-white text-brown/70 border-brown/30 hover:border-brown/50 hover:scale-105"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery masonry layout */}
      <div className="columns-2 gap-3 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4">
        {filteredImages.map((image, index) => (
          <figure
            key={image.id}
            className="gallery-fade-in mb-3 break-inside-avoid sm:mb-5"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1080}
              height={1350}
              className="block h-auto w-full rounded-[5px]"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12 lg:mt-20">
        <a
          href="https://www.instagram.com/belumpulang.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex overflow-hidden rounded-full border-2 border-brown/70 bg-yellow-400 px-8 py-4 text-amber-50 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="relative z-10 display text-lg lg:text-xl font-extrabold uppercase tracking-wide inline-flex items-center gap-2">
            View Full Gallery
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <span className="absolute inset-0 hero-shine-effect" />
        </a>
      </div>
    </section>
  );
}
