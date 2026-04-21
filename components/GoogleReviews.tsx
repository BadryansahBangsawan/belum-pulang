"use client";

import { useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";
import {
  DEFAULT_GOOGLE_MAPS_REVIEW_URL,
  FALLBACK_GOOGLE_REVIEWS,
  FALLBACK_GOOGLE_REVIEW_STATS,
} from "@/lib/google-reviews";

export default function GoogleReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = FALLBACK_GOOGLE_REVIEWS;
  const averageRating = FALLBACK_GOOGLE_REVIEW_STATS.rating;
  const ratingsTotal = FALLBACK_GOOGLE_REVIEW_STATS.userRatingsTotal;
  const googleMapsUrl = DEFAULT_GOOGLE_MAPS_REVIEW_URL;

  const nextSlide = () => {
    if (reviews.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    if (reviews.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const summaryStars = Math.max(1, Math.min(5, Math.round(averageRating)));
  const activeSlide = reviews.length === 0 ? 0 : currentSlide % reviews.length;

  return (
    <section className="py-15 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-center display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 lg:mb-16">
          What Our <span className="text-yellow-400">Customers</span> Say
        </h2>

        {/* Google Reviews Header */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-10 mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            {/* Left: Google branding + rating */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Google Logo - Smaller on mobile */}
              <svg className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                <path fill="#0038FF" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
                <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
              </svg>

              <div>
                {/* Google Reviews Text - Smaller on mobile */}
                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900">
                  <span className="text-blue-600">G</span>
                  <span className="text-red-600">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-600">g</span>
                  <span className="text-green-600">l</span>
                  <span className="text-red-600">e</span>
                  <span className="text-gray-900 ml-1 lg:ml-2">Reviews</span>
                </h3>

                {/* Rating - Smaller on mobile */}
                <div className="flex items-center gap-2 lg:gap-3 mt-1 lg:mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                    {averageRating.toFixed(1)}
                  </span>
                  <div>
                    <StarRating rating={summaryStars} size="sm" />
                    <p className="text-xs lg:text-sm text-gray-500 mt-0.5 lg:mt-1">
                      ({ratingsTotal.toLocaleString()} reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA Button - Smaller on mobile */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all hover:shadow-xl"
            >
              Review us on Google
            </a>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="max-w-6xl mx-auto relative">
          {/* Desktop: 3 cards visible */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <svg className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="24" fill="#4285F4"/>
                      <path fill="white" d="M35 18L21 32l-8-8 2.83-2.83L21 26.34 32.17 15.17z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      {review.verified && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Review text */}
                <p className="text-gray-600 mt-4 leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                {/* Read more */}
                <a
                  href={review.authorUrl || googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold text-sm mt-3 inline-block hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Single card slider */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="min-w-full px-2 pb-2"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      {/* Avatar + Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                          <svg className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full" viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="24" fill="#4285F4"/>
                            <path fill="white" d="M35 18L21 32l-8-8 2.83-2.83L21 26.34 32.17 15.17z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                            {review.verified && (
                              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <StarRating rating={review.rating} />

                      {/* Review text */}
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {review.text}
                      </p>

                      {/* Read more */}
                      <a
                        href={review.authorUrl || googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold text-sm mt-3 inline-block hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute right-16 -bottom-16 bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 -bottom-16 bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              aria-label="Next review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-20">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeSlide ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
