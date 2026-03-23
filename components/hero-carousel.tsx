"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function HeroCarousel() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const coffeeRef = useRef<HTMLImageElement>(null);
  const sketchRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Timeline for initial load animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Heading animation - Split lines fade in from bottom
      tl.from(
        headingRef.current?.children || [],
        {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          clearProps: "all", // ← Clear inline styles after animation
        },
        0.3,
      );

      // 2. Description fade in
      tl.from(
        descRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          clearProps: "all", // ← Clear inline styles
        },
        0.8,
      );

      // 3. Buttons slide in - FIX HERE
      tl.fromTo(
        buttonsRef.current?.children || [],
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1, // ← Explicitly set final opacity
          duration: 0.6,
          stagger: 0.15,
          clearProps: "all", // ← Clear inline styles after animation
        },
        1,
      );

      // 4. Burger image - Scale up with rotation
      tl.from(
        burgerRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotation: -10,
          duration: 1.2,
          ease: "back.out(1.7)",
          clearProps: "all", // ← Clear inline styles
        },
        0.5,
      );

      // 5. Coffee cup - Slide in from left with rotation
      tl.from(
        coffeeRef.current,
        {
          x: -200,
          opacity: 0,
          rotation: -30,
          duration: 1,
          ease: "power2.out",
          clearProps: "all", // ← Clear inline styles
        },
        0.6,
      );

      // ScrollTrigger animations for parallax effects
      gsap.to(burgerRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(coffeeRef.current, {
        y: 30,
        rotation: -15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        grid
        grid-cols-1
        items-center
        gap-1 sm:gap-6 lg:gap-10
        px-4 sm:px-6 lg:px-12
        pt-8 sm:pt-12 lg:pt-0
        lg:grid-cols-2
        min-h-[85vh]
      "
    >
      {/* ================= Decorative Cafe Sketch (Right) ================= */}
      <img
        ref={sketchRef}
        src="/decor/cafe-sketch.png"
        alt=""
        className="
          pointer-events-none
          select-none
          absolute
          z-0

          /* ---------- Mobile (background texture) ---------- */
          right-[-120px]
          top-[47%]
          -translate-y-1/3
          w-[520px]
          opacity-[0.20]

          /* ---------- Desktop (hero decoration) ---------- */
          lg:blur-0
          lg:opacity-[0.2]
          lg:w-[800px]
          lg:top-[10%]
          lg:right-[-220px]
          lg:left-auto
          lg:-translate-x-0
        "
      />

      {/* ================= Coffee Cup (Left Side) ================= */}
      <img
        ref={coffeeRef}
        src="/decor/coffee-cup.png"
        alt=""
        className="
          pointer-events-none
          select-none
          absolute
          z-0

          /* ---------- Mobile ---------- */
          left-[-60px]
          top-[15%]
          w-[180px]
          opacity-[0.20]
          rotate-[-12deg]

          /* ---------- Tablet ---------- */
          sm:left-[-40px]
          sm:top-[12%]
          sm:w-[220px]
          sm:opacity-[0.18]

          /* ---------- Desktop ---------- */
          lg:left-[-5px]
          lg:top-[5%]
          lg:w-[280px]
          lg:opacity-[0.25]
          lg:rotate-[-8deg]
          lg:drop-shadow-2xl

          /* ---------- Hover effect (desktop only) ---------- */
          lg:transition-transform
          lg:duration-700
          lg:hover:scale-105
          lg:hover:rotate-[-5deg]
        "
      />

      {/* ================= TEXT CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex flex-col
          items-center text-center
          gap-3 sm:gap-4 lg:gap-0
          lg:items-start lg:text-left
          pl-0 lg:pl-12
        "
      >
        <h1
          ref={headingRef}
          className="display text-4xl sm:text-5xl lg:text-8xl font-bold"
        >
          <span className="inline-block">Everything</span>
          <br />
          <span className="inline-block">is better</span>
          <br />
          <span className="inline-block">
            with a&nbsp;
            <span className="text-yellow-500 display">Burger</span>
          </span>
        </h1>

        <p
          ref={descRef}
          className="display text-gray-500 text-base sm:text-lg lg:text-2xl max-w-xs sm:max-w-md lg:max-w-2xl"
        >
          Burger is the missing piece that makes every day complete, a simple
          yet delicious joy in life
        </p>

        <div
          ref={buttonsRef}
          className="mt-3 sm:mt-5 flex flex-col items-center sm:flex-row sm:items-start gap-4"
        >
          <Button
            className="
              relative overflow-hidden
              rounded-full
              border border-brown/70
              bg-yellow
              px-5 py-2 sm:px-6 sm:py-3.5
              text-brown
              shadow-soft
              transition
              hover:-translate-y-0.5 hover:shadow-lg
            "
            onClick={() => router.push("/menu?category=burger")}
          >
            <span className="display text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white">
              Order Now
            </span>
            <ChevronRight
              strokeWidth={3}
              className="ml-1 h-5 w-5 sm:h-6 sm:w-6"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full border border-brown/70 opacity-80" />
          </Button>

          <Button
            className="
              flex items-center gap-1
              py-1 sm:py-2
              text-lg sm:text-xl
              text-gray-700
              display font-semibold
              bg-transparent
              hover:bg-transparent
              cursor-pointer
              hover:underline underline-offset-4
            "
            onClick={() => router.push("/menu")}
          >
            Learn More
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* ================= IMAGE CONTENT ================= */}
      <div
        ref={burgerRef}
        className="
          relative
          w-full
          h-[360px]
          sm:h-[480px]
          md:h-[560px]
          lg:h-[720px]
          flex
          items-end
          justify-center
          overflow-visible
          -mt-4 sm:mt-0
        "
      >
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 h-32 w-[240px] sm:h-44 sm:w-[300px] lg:h-40 lg:w-[390px] rounded-full bg-black blur-2xl" />

        <Image
          src="/images/burger.png"
          alt="Burger"
          fill
          className="object-cover object-[50%_85%] lg:object-[10%_100%]"
        />
      </div>
    </section>
  );
}
