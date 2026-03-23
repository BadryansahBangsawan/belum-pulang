import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 bg-brown text-amber-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl font-extrabold">Kunawa Space</p>
          <p className="text-sm text-amber-100/80">
            Coffee, food, and good vibes in one place.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
          <Link href="/menu" className="rounded-full bg-yellow px-3 py-2 font-semibold text-amber-50 shadow-chip hover:bg-yellow/90">
            Start Order
          </Link>
        </div>
      </div>
    </footer>
  );
}
