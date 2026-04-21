"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MyStory() {
  return (
    <section
      className="
        relative 
        px-4 sm:px-6 lg:px-12
        pt-8 pb-12
        lg:pt-20 lg:pb-20
        overflow-visible  /* ← Prevent sketch from bleeding outside */
      "
    >
      {/* ========== MOBILE CAFÉ SKETCH (LEFT TOP ONLY) ========== */}
<div
  className="
    absolute
    pointer-events-none
    select-none

    block lg:hidden          /* ONLY mobile */
    left-[-12px]            /* Push left partially */
    top-[-66px]              /* Slightly above */
    w-[170px]
    h-[170px]
    opacity-[0.25]           /* Subtle but visible */
    z-0
    overflow-visible
  "
>
  <Image
    src="/decor/cafe-sketch-story1.png"
    alt=""
    fill
    className="object-contain [mask-image:linear-gradient(to_left,transparent,black_12%)]
    [-webkit-mask-image:linear-gradient(to_left,transparent,black_12%)]"
    priority={false}
  />
</div>

      {/* ========== CAFÉ SKETCH - STORYTELLING BACKGROUND ========== */}
      <div
        className="
          absolute
          pointer-events-none
          select-none
          
          /* MOBILE: hidden */
          
          /* DESKTOP: Right side ambient element */
          lg:block
          lg:right-[-120px]    /* Partially cropped */
          lg:top-[2%]          /* Vertically centered with content */
          lg:w-[680px]
          lg:h-[680px]
          lg:opacity-[0.08]     /* Very subtle */
          lg:z-0                /* Behind everything */
        "
      >
        <Image
          src="/decor/cafe-sketch-story.png"  /* Save as separate file */
          alt=""
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* ========== HEADING (z-10) ========== */}
      <div className="relative z-10 lg:mb-14 mb-1 py-8 text-center">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl font-bold">
          Our <span className="text-yellow-500">Story</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
      </div>

      {/* ========== CONTENT GRID (z-10) ========== */}
      <div
        className="
          relative z-10
          grid grid-cols-1 lg:grid-cols-2
          gap-8 lg:gap-16
          items-center
        "
      >
        {/* VIDEO */}
        <div
          className="
            relative
            w-full
            h-[240px] sm:h-[320px] lg:h-[420px]
            rounded-3xl
            overflow-hidden
            shadow-xl  /* Add depth */
          "
        >
          <Image
            src="/images/cafe.jpg"
            alt="Our Story cafe ambience"
            fill
            className="object-cover object-center sm:object-[50%_40%]"
            priority={false}
          />
        </div>

        {/* TEXT & BUTTONS */}
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold">
            Our Journey
          </p>

          <h3 className="display text-4xl font-bold leading-tight">
            A place built on warmth, coffee
            <br />& conversations.
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            What started as a small neighborhood bakehouse is now a place where
            friends meet, stories are shared, and every cup is brewed with care.
            We believe great food tastes even better when enjoyed together.
          </p>

          <div className="mt-4 flex items-center gap-6">
            <Button
              asChild
              className="rounded-full lg:text-xl text-lg bg-yellow px-6 py-3 text-amber-50 font-bold hover:shadow-lg cursor-pointer border-2 border-brown/70"
            >
              <Link href="/segera-hadir">Segera Hadir</Link>
            </Button>

            <Link
              href="/about"
              className="flex items-center gap-1 text-lg lg:text-xl font-bold text-brown hover:underline underline-offset-4"
            >
              <span className="leading-none">Read More</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========== BOTTOM STRING LIGHTS (FLOW TO NEXT SECTION) ========== */}
<div
  className="
    absolute
    lg:hidden
    left-1/2
    -translate-x-1/2
    bottom-[-70px]        /* 👈 pushes lights into next section */
    h-[150px]
    opacity-[0.5]
    w-screen
    pointer-events-none
    select-none
    z-10
    overflow-visible
  "
>
  <Image
    src="/decor/string-lights.png"
    alt=""
    fill
    className="
      object-cover
    "
    priority={false}
  />
</div>

    </section>
  );
}
