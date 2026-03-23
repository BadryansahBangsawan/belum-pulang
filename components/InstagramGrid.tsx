"use client";

import Image from "next/image";
import { useState } from "react";
import { instagramPosts } from "@/lib/instagram";

export default function InstagramGrid() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  // Mobile: 4 images per slide (2x2)
  const MOBILE_ITEMS = 4;
  const mobileTotalSlides = Math.ceil(instagramPosts.length / MOBILE_ITEMS);

  // Desktop: 6 images per slide (3x2)
  const DESKTOP_ITEMS = 6;
  const desktopTotalSlides = Math.ceil(instagramPosts.length / DESKTOP_ITEMS);

  const mobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % mobileTotalSlides);
  };

  const mobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + mobileTotalSlides) % mobileTotalSlides);
  };

  const desktopNext = () => {
    setDesktopIndex((prev) => (prev + 1) % desktopTotalSlides);
  };

  const desktopPrev = () => {
    setDesktopIndex((prev) => (prev - 1 + desktopTotalSlides) % desktopTotalSlides);
  };

  return (
    <>
      {/* ================= MOBILE SLIDER (2x2) ================= */}
      <div className="relative md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${mobileIndex * 100}%)`,
          }}
        >
          {Array.from({ length: mobileTotalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="grid grid-cols-2 gap-[2px] min-w-full"
            >
              {instagramPosts
                .slice(
                  slideIndex * MOBILE_ITEMS,
                  slideIndex * MOBILE_ITEMS + MOBILE_ITEMS
                )
                .map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open Instagram photo: ${post.alt}`}
                    className="group relative aspect-square overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={600}
                      height={600}
                      className="aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                ))}
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        {mobileIndex > 0 && (
          <button
            onClick={mobilePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {mobileIndex < mobileTotalSlides - 1 && (
          <button
            onClick={mobileNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* ================= DESKTOP SLIDER (3x2) ================= */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${desktopIndex * 100}%)`,
            }}
          >
            {Array.from({ length: desktopTotalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-3 grid-rows-2 gap-2 lg:gap-3 min-w-full"
              >
                {instagramPosts
                  .slice(
                    slideIndex * DESKTOP_ITEMS,
                    slideIndex * DESKTOP_ITEMS + DESKTOP_ITEMS
                  )
                  .map((post) => (
                    <a
                      key={post.id}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open Instagram photo: ${post.alt}`}
                      className="group relative aspect-square overflow-hidden bg-gray-100 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Image
                        src={post.image}
                        alt={post.alt}
                        width={600}
                        height={600}
                        className="aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                    </a>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Arrows */}
        {desktopIndex > 0 && (
          <button
            onClick={desktopPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {desktopIndex < desktopTotalSlides - 1 && (
          <button
            onClick={desktopNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: desktopTotalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setDesktopIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === desktopIndex ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
