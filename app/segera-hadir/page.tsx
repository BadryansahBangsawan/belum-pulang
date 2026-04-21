import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function SegeraHadirPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-10 sm:px-6">
        <section className="w-full rounded-[28px] bg-white p-6 text-center shadow-soft sm:p-10">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-amber-100">
            <Image
              src="/file/profile_pic.jpg"
              alt="Belum Pulang Instagram logo"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-brown/60">
            Belum Pulang
          </p>
          <h1 className="display mt-2 text-4xl font-extrabold text-brown sm:text-5xl">
            TikTok & YouTube
            <br />
            Segera Hadir
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brown/70">
            Untuk update terbaru, follow Instagram kami dulu di username:
          </p>

          <a
            href="https://www.instagram.com/belumpulang.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-yellow px-6 py-3 text-base font-bold text-amber-50 shadow-chip hover:bg-yellow/90"
          >
            @belumpulang.co
          </a>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-brown/55">
            <span className="rounded-full bg-amber-100 px-3 py-1.5">TikTok</span>
            <span className="rounded-full bg-amber-100 px-3 py-1.5">YouTube</span>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full border border-brown/20 px-5 py-2.5 text-sm font-semibold text-brown hover:bg-amber-50"
          >
            Kembali ke Beranda
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
