"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
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
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
        "top-0 z-40 w-full transition-all",
        isHome ? "fixed bg-transparent" : "sticky",
        !isHome &&
          (scrolled ? "bg-cream/80 backdrop-blur shadow-soft" : "bg-cream")
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-5 md:px-6 md:py-3 lg:py-1">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={cn(
                  "rounded-full p-2.5 shadow-chip",
                  isHome
                    ? "bg-white/10 text-white ring-1 ring-white/40 backdrop-blur"
                    : "bg-white text-brown"
                )}
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-white p-4 shadow-soft">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mb-4">
                <p className="display text-lg font-bold text-[#0038FF]">
                  Belum Pulang
                </p>
                <p className="text-xs text-brown/70">
                  Coffee, stories, and good vibes
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
          <p
            className={cn(
              "display text-base sm:text-xl lg:text-2xl font-extrabold uppercase tracking-tight",
              isHome
                ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                : "text-[#0038FF]"
            )}
          >
            Belum Pulang
          </p>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-2 text-base font-bold uppercase md:flex",
            isHome ? "text-white" : "text-brown"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 transition",
                isHome
                  ? pathname === link.href
                    ? "bg-white/20 text-white backdrop-blur"
                    : "hover:bg-white/15 hover:text-white"
                  : pathname === link.href
                    ? "bg-amber-100 text-brown shadow-chip"
                    : "hover:bg-amber-50 hover:text-brown"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div aria-hidden className="h-10 w-10 md:w-2" />

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
