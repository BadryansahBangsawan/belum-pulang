"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

/* ----------------------------------
   CATEGORY DATA (color included)
-----------------------------------*/
const categories = [
  {
    label: "Pizza",
    href: "/segera-hadir",
    bg: "bg-yellow-200",
    text: "text-brown",
  },
  {
    label: "Burger",
    href: "/segera-hadir",
    bg: "bg-orange-200",
    text: "text-brown",
  },
  {
    label: "Pasta",
    href: "/segera-hadir",
    bg: "bg-amber-100",
    text: "text-brown",
  },
  {
    label: "Coffee",
    href: "/segera-hadir",
    bg: "bg-stone-200",
    text: "text-brown",
  },
  {
    label: "Dessert",
    href: "/segera-hadir",
    bg: "bg-pink-200",
    text: "text-brown",
  },
  {
    label: "Snacks",
    href: "/segera-hadir",
    bg: "bg-violet-200",
    text: "text-brown",
  },
];

/* ----------------------------------
   PRODUCT DATA
-----------------------------------*/
const products = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    price: "₹249",
    image: "/images/burger.png",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    price: "₹399",
    image: "/images/pizza.jpg",
  },
  {
    id: "3",
    name: "Creamy Alfredo Pasta",
    price: "₹349",
    image: "/images/pasta.jpg",
  },
  {
    id: "4",
    name: "Caramel Cold Coffee",
    price: "₹199",
    image: "/images/coffee.jpg",
  },
];

export default function ProductsDaily() {
  return (
    <section className=" relative px-4 sm:px-6 lg:px-12 py-16 lg:py-14">
      {/* ================= Coffee Beans Decoration (Left) ================= */}
      <div
        className="
      pointer-events-none
      select-none
      absolute
      z-0

      /* ---------- Mobile ---------- */
      left-[-60px]
      top-[-2%]
      w-[300px]
      h-[300px]
      opacity-[0.12]
      rotate-[-1deg]

      /* ---------- Tablet ---------- */
      sm:left-[-60px]
      sm:top-[12%]
      sm:w-[240px]
      sm:h-[240px]
      sm:opacity-[0.15]

      /* ---------- Desktop ---------- */
      lg:left-[-100px]
      lg:top-[0%]
      lg:w-[820px]
      lg:h-[820px]
      lg:opacity-[0.20]
      lg:rotate-[10deg]
    "
      >
        <Image
          src="/decor/coffee-beans.png"
          alt=""
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* ===============================
          HEADING + CATEGORIES ROW
      =============================== */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        {/* ---------- HEADING ---------- */}
        <div className="max-w-2xl">
          <h2 className="display text-4xl lg:text-5xl font-bold leading-tight">
            Products we bake
            <br />
            <span className="text-brown">
              here <span className="text-yellow-500">daily</span>
            </span>{" "}
            —
          </h2>

          <p className="mt-4 display text-gray-600 text-lg">
            Best sellers you’ll love. Explore categories or jump straight to the
            menu.
          </p>
        </div>

        {/* ---------- CATEGORIES (GRID) ---------- */}
        <div
          className="
            grid
            grid-cols-3 
            lg:grid-cols-3
            gap-4
            max-w-xl
            pb-3
          "
        >
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className={`
                ${c.bg} ${c.text}
                rounded-full
                border-2 border-brown/70
                display
                /* MOBILE */
        px-4 py-2 text-base

        /* DESKTOP */
        lg:px-8 lg:py-3 lg:text-lg
                font-bold
                text-center
                transition
                hover:scale-[1.03]
                hover:shadow-md
              `}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ===============================
          PRODUCTS GRID
      =============================== */}
      <div
        className="
    mt-9

    /* MOBILE: horizontal scroll */
    flex flex-nowrap gap-4
    overflow-x-auto pb-4
    snap-x snap-mandatory

    /* hide scrollbar (optional) */
    scrollbar-hide

    /* DESKTOP */
    lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible
  "
      >
        {products.map((p) => (
          <Card
            key={p.id}
            className="
            relative
    rounded-3xl
    border-2
    bg-white
    shadow-md
    overflow-hidden

    /* MOBILE */
    min-w-[260px]
    shrink-0
    snap-start

    /* DESKTOP */
    lg:min-w-0
  "
          >
            <CardContent className="p-0">
              <div className="relative h-[180px] w-full lg:h-[220px]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="px-6 pt-4">
                <p className="display text-xl font-bold text-brown">{p.name}</p>
                <p className="mt-1 text-gray-600 font-semibold">{p.price}</p>
              </div>
            </CardContent>

            <CardFooter className="px-5 pb-3 pt-3">
              <Button
                className="w-full display text-lg rounded-full border-2 border-brown/70 bg-yellow text-amber-50 font-bold hover:shadow-lg"
                asChild
              >
                <Link href="/segera-hadir">Segera Hadir</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
