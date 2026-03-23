"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
        <SectionWrapper>
          <div className="grid gap-6 rounded-[28px] bg-white p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Badge className="rounded-full bg-yellow text-amber-50 shadow-chip">
                Our story
              </Badge>
              <h1 className="display text-4xl font-extrabold text-brown">
                Warm bakes, bold coffee, playful colors.
              </h1>
              <p className="text-brown/70">
                Bakehouse Café is our love letter to neighborhood bakeries and
                vibrant street cafés. We hand-fold croissants, roast our beans
                in-house, and use cultured butter in every batch.
              </p>
              <p className="text-brown/70">
                The vibe? Creamy walls, chocolate accents, and sprinkles of
                teal. Bring friends, co-work with a latte, or grab a pretzel on
                the go.
              </p>
              <Button
                asChild
                className="rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90"
              >
                <Link href="/menu">View menu</Link>
              </Button>
            </div>
            <div className="relative h-80 overflow-hidden rounded-[24px] bg-amber-100">
              <Image
                src="https://images.unsplash.com/photo-1421622548261-c45bfe178854?w=1000&q=80&auto=format&fit=crop"
                alt="Bakery scene"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="mt-8">
          <div className="rounded-[28px] bg-brown p-6 text-amber-50 shadow-soft sm:p-10">
            <h2 className="display text-3xl font-extrabold">
              Why choose Bakehouse Café?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                "Daily small-batch bakes",
                "Single-origin espresso",
                "Cozy booths & fast Wi‑Fi",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 text-amber-50 shadow-soft"
                >
                  <p className="display text-xl font-extrabold text-yellow">
                    {item}
                  </p>
                  <p className="text-sm text-amber-100/80">
                    Crafted to keep the experience warm and lively.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
