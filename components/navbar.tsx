"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reserve Table" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "fixed bg-cream/80 backdrop-blur shadow-soft"
          : "bg-cream"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-5 md:px-6 md:py-3 lg:py-1">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-full bg-white p-2.5 text-brown shadow-chip"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-white p-4 shadow-soft">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mb-4">
                <p className="display text-lg font-bold text-[#5B0F0F]">
                  Kunawa Space
                </p>
                <p className="text-xs text-brown/70">
                  Coffee, food, and good vibes
                </p>
              </div>
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-semibold text-brown transition hover:bg-amber-50",
                      pathname === link.href ? "bg-amber-100" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="leading-tight">
          <p className="display text-base sm:text-xl lg:text-2xl font-extrabold uppercase text-[#5B0F0F] tracking-tight">
            Kunawa Space
          </p>
        </Link>

        <nav className="hidden items-center gap-2 text-base font-bold uppercase text-brown md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 transition",
                pathname === link.href
                  ? "bg-amber-100 text-brown shadow-chip"
                  : "hover:bg-amber-50 hover:text-brown"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CartDrawer />
          </div>
          <Button
            size="sm"
            className="relative overflow-hidden rounded-full border lg:border-2 bg-yellow px-4 py-2 text-amber-50 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5 sm:py-3 cursor-pointer"
            onClick={() => router.push("/menu")}
          >
            <span className="display text-sm sm:text-base font-extrabold uppercase tracking-wide">
              Order Now
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-full border border-brown/70 opacity-80" />
          </Button>
        </div>

      </div>
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import { CartDrawer } from "@/components/cart-drawer";
// import { Menu } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Image from "next/image";

// const links = [
//   { href: "/menu", label: "Menu" },
//   { href: "/reserve", label: "Reserve Table" },
//   { href: "/about", label: "About Us" },
//   { href: "/contact", label: "Contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 12);
//     handler();
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <header className="sticky top-10 z-40 w-full">
//       <div
//         className={cn(
//           "mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-5 md:px-6 md:py-3 lg:py-1 transition-all duration-300",
//           scrolled
//             ? "mt-3 rounded-4xl bg-cream/80 backdrop-blur shadow-soft"
//             : "mt-0 bg-cream"
//         )}
//       >
//         {/* LEFT: Hamburger (Mobile Only) */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <button
//                 aria-label="Open menu"
//                 className="rounded-full bg-white p-2.5 text-brown shadow-chip"
//               >
//                 <Menu className="size-6" />
//               </button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-72 bg-white p-4 shadow-soft">
//               <SheetHeader className="sr-only">
//                 <SheetTitle>Navigation</SheetTitle>
//               </SheetHeader>

//               <nav className="flex flex-col gap-2">
//                 {links.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={cn(
//                       "rounded-xl px-3 py-2 text-sm font-semibold text-brown transition hover:bg-amber-50",
//                       pathname === link.href ? "bg-amber-100" : ""
//                     )}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* CENTER: Logo */}
//         <Link href="/" className="flex items-center gap-2 md:flex-none">
//           <Image
//             src="/logo/bakehouse-logo.png"
//             alt="Bakehouse Cafe"
//             width={170}
//             height={170}
//             priority
//             className="
//               h-10 w-auto
//               md:h-12 lg:h-20
//               drop-shadow-sm
//             "
//           />
//           {/* Hide text on mobile, show on desktop */}
//           <div className="leading-tight hidden md:block">
//             <p className="display text-base sm:text-xl lg:text-2xl font-extrabold uppercase text-brown tracking-tight">
//               Bakehouse Café
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Navigation (Hidden on Mobile) */}
//         <nav className="hidden md:flex items-center gap-2 text-base font-bold uppercase text-brown">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "rounded-full px-4 py-2 transition",
//                 pathname === link.href
//                   ? "bg-amber-100 text-brown shadow-chip"
//                   : "hover:bg-amber-50 hover:text-brown"
//               )}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* RIGHT: Cart (Desktop) + Order Now Button */}
//         <div className="flex items-center gap-2">
//           {/* Cart - Desktop Only */}
//           <div className="hidden md:block">
//             <CartDrawer />
//           </div>

//           {/* Order Now Button - Always Visible */}
//           <Button
//             size="sm"
//             className="relative overflow-hidden rounded-full border bg-yellow px-3 py-2 text-brown shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg md:px-5 md:py-3 cursor-pointer"
//             onClick={() => router.push("/menu")}
//           >
//             <span className="display text-base sm:text-sm md:text-base font-extrabold uppercase tracking-wide">
//               Order Now
//             </span>
//             <span className="pointer-events-none absolute inset-0 rounded-full border border-brown/70 opacity-80" />
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }
