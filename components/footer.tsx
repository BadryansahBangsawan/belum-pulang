import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("mt-10 bg-[#0038FF] text-white", className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl font-extrabold">Belum Pulang</p>
          <p className="text-sm text-white/80">
            Coffee, food, and good vibes in one place.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/about" className="hover:text-[#9eb8ff]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#9eb8ff]">
            Contact
          </Link>
          <Link
            href="/segera-hadir"
            className="rounded-full bg-white px-3 py-2 font-semibold text-[#0038FF] shadow-chip hover:bg-white/90"
          >
            Segera Hadir
          </Link>
        </div>
      </div>
    </footer>
  );
}
