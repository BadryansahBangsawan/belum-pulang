import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// export function ReservePromo() {
//   return (
//     <SectionWrapper className="mt-6">
//       <div className="grid gap-6 overflow-hidden rounded-[28px] bg-brown text-amber-50 shadow-soft md:grid-cols-[1fr_1.1fr]">
//         <div className="relative min-h-[240px]">
//           <Image
//             src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80&auto=format&fit=crop"
//             alt="Restaurant interior"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-brown/70 to-transparent" />
//         </div>
//         <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
//           <p className="display text-sm uppercase tracking-wide text-yellow">
//             Reserve a table
//           </p>
//           <h2 className="display text-3xl font-extrabold leading-tight">
//             Bring friends for coffee dates & cozy dinners.
//           </h2>
//           <p className="max-w-2xl text-base text-amber-100/80">
//             Lock your slot, share your cravings, and we’ll keep your favorite
//             bakes warm when you walk in.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <Link href="/reserve">
//               <Button className="rounded-full bg-yellow text-brown shadow-chip hover:bg-yellow/90">
//                 Reserve Table
//               </Button>
//             </Link>
//             <Badge className="rounded-full bg-amber-100/20 text-amber-50">
//               Instant WhatsApp confirmation
//             </Badge>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }

const featured = [
  {
    title: "Bagel with Seeds",
    color: "bg-yellow",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Sliced Rustic Bread",
    color: "bg-sky",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Chunky Cookies",
    color: "bg-orange",
    img: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=600&q=80&auto=format&fit=crop",
  },
];

export function FeaturedBakes() {
  return (
    <SectionWrapper className="mt-10 space-y-4">
      <div className="flex flex-col gap-2">
        <p className="display text-sm font-semibold text-brown/70">
          Product we bake here daily
        </p>
        <h2 className="display text-3xl font-extrabold text-brown sm:text-4xl">
          Fresh batches, morning to evening.
        </h2>
        <p className="max-w-2xl text-brown/70">
          Choose from sourdough loaves, pretzels, cookies, and special cruffins.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((item) => (
          <div
            key={item.title}
            className={cn(
              "relative overflow-hidden rounded-[26px] p-4 shadow-soft",
              item.color
            )}
          >
            <div className="absolute right-3 top-3 rounded-full bg-brown/80 px-3 py-1 text-xs font-bold text-amber-100 shadow-chip">
              Daily
            </div>
            <div className="relative h-48 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="rounded-[18px] object-cover"
              />
            </div>
            <p className="mt-3 display text-xl font-extrabold text-brown">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CravingPills() {
  const pills = [
    { label: "Pizza", href: "/menu?category=pizza" },
    { label: "Pasta", href: "/menu?category=pasta" },
    { label: "Burgers", href: "/menu?category=burgers" },
    { label: "Momos", href: "/menu?category=momos" },
    { label: "Drinks", href: "/menu?category=drinks" },
  ];
  return (
    <SectionWrapper className="mt-6">
      <div className="flex flex-col gap-3 rounded-[24px] bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl font-extrabold text-brown">
            What are you craving today?
          </p>
          <p className="text-brown/70">
            Jump straight to a category and build your order.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-brown shadow-chip hover:bg-yellow hover:text-amber-50"
            >
              {pill.label}
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function StaffSection() {
  return (
    <SectionWrapper className="mt-10">
      <div className="grid gap-6 rounded-[28px] bg-brown text-amber-50 shadow-soft md:grid-cols-[1fr_0.9fr]">
        <div className="relative min-h-[260px]">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop"
            alt="Chef at work"
            fill
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-1 text-xs font-bold text-amber-50 shadow-chip">
            COMBO
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <h3 className="display text-3xl font-extrabold leading-tight">
            Chefs who love the craft.
          </h3>
          <p className="text-amber-100/80">
            Our team of bakers and baristas fold, whisk, and brew with real
            butter, organic flour, and single-origin beans.
          </p>
          <p className="rounded-2xl bg-white/10 p-4 text-sm italic text-amber-100">
            “Baking is a craft in itself, and we love these delicate flavors.” —
            Ashton Cooper, Head Baker
          </p>
          <Button className="w-fit rounded-full bg-yellow text-amber-50 shadow-chip hover:bg-yellow/90">
            Meet the team
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function WhyChooseUs() {
  const cards = [
    {
      title: "Fresh ingredients",
      desc: "Organic flour, cultured butter, house-roasted beans daily.",
    },
    {
      title: "Cozy ambience",
      desc: "Warm lighting, soft jazz playlists, and cushiony booths.",
    },
    {
      title: "Quick service",
      desc: "Order at table, pickup counter, or WhatsApp without queues.",
    },
  ];
  return (
    <SectionWrapper className="mt-10">
      <div className="rounded-[30px] bg-brown p-6 text-amber-50 shadow-soft sm:p-10">
        <h3 className="display text-3xl font-extrabold">
          Why our café is so special to customers?
        </h3>
        <p className="mt-2 max-w-3xl text-amber-100/80">
          Crafted spaces, playful colors, and a menu that hugs you back. We keep
          every batch small so it stays warm when you arrive.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/10 p-4 shadow-soft backdrop-blur"
            >
              <p className="display text-xl font-extrabold text-yellow">
                {card.title}
              </p>
              <p className="text-sm text-amber-100/80">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function ReviewsSection() {
  return (
    <SectionWrapper className="mt-10">
      <div className="rounded-[26px] bg-sky p-6 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="display text-2xl font-extrabold text-brown">
              “With enough butter, anything is good!”
            </p>
            <p className="text-brown/70">
              Our guests say the same after the first bite of our chunky
              cookies.
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-brown shadow-chip">
            <span className="display text-xl font-extrabold">4.7</span>
            <span className="ml-2 text-sm text-brown/70">
              Based on 350+ reviews
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Plain Cake", "Croissant", "Cookies", "Pretzel", "Apple Pie"].map(
            (pill) => (
              <span
                key={pill}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brown shadow-chip"
              >
                {pill}
              </span>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function VisitSection() {
  return (
    <SectionWrapper className="mt-10 mb-16">
      <div className="grid gap-6 rounded-[26px] bg-white p-6 shadow-soft md:grid-cols-[1fr_0.9fr]">
        <div className="space-y-3">
          <p className="display text-2xl font-extrabold text-brown">Visit us</p>
          <p className="text-brown/80">
            Belum Pulang, RCJQ+JC4, Jl. Mapala Raya, Tidung, Kec. Rappocini, Kota
            Makassar, Sulawesi Selatan
          </p>
          <p className="text-brown/70">Rating Google: 4.7</p>
          <p className="text-brown/70">
            Jam operasional: cek langsung di Google Maps
          </p>
          <p className="text-brown/70">
            No. telepon: belum dicantumkan di Google Maps
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social) =>
              social.href ? (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className="flex items-center justify-center rounded-full bg-amber-100 p-2 text-brown shadow-chip"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ) : (
                <span
                  key={social.name}
                  aria-label={social.name}
                  className="flex items-center justify-center rounded-full bg-amber-100 p-2 text-brown shadow-chip"
                >
                  <SocialIcon name={social.icon} />
                </span>
              )
            )}
          </div>
        </div>
        <div className="h-52 overflow-hidden rounded-2xl">
          <iframe
            title="Belum Pulang location"
            src="https://www.google.com/maps?q=-5.1684875,119.4385803&z=17&output=embed"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

function SocialIcon({ name }: { name: "instagram" | "tiktok" | "youtube" }) {
  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Zm4.25-4.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </svg>
    );
  }
  if (name === "tiktok") {
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.44v13.53a2.9 2.9 0 1 1-2.9-2.9 2.9 2.9 0 0 1 .88.13V9.3a6.34 6.34 0 1 0 5.46 6.23V8.64a8.25 8.25 0 0 0 4.8 1.53V6.69Z" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M21.8 7.2c-.2-.7-.7-1.3-1.4-1.5C19 5.3 12 5.3 12 5.3s-7 0-8.4.4c-.7.2-1.2.8-1.4 1.5-.4 1.5-.4 4.7-.4 4.7s0 3.2.4 4.7c.2.7.7 1.2 1.4 1.4C5 18.7 12 18.7 12 18.7s7 0 8.4-.4c.7-.2 1.2-.7 1.4-1.4.4-1.5.4-4.7.4-4.7s0-3.2-.4-4.7ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

const socialLinks: {
  name: string;
  icon: "instagram" | "tiktok" | "youtube";
  href?: string;
}[] = [
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/belumpulang.co/",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    href: "/segera-hadir",
  },
  { name: "YouTube", icon: "youtube", href: "/segera-hadir" },
];
