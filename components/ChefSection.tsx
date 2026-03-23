"use client";

import Image from "next/image";
import { ChefHat, Award, Users, Heart } from "lucide-react";

export default function ChefSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-12 lg:py-18 overflow-hidden bg-brown/10">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto">
        {/* Header (same scale as Our Story heading) */}
        <div className="text-center mb-11 lg:mb-14">
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Meet Our <span className="text-yellow-500">Chef</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto mt-4">
            Passionate about crafting exceptional culinary experiences
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* IMAGE SIDE */}
          <div className="order-2 lg:order-1">
            {/* Mobile Horizontal Image */}
            <div className="relative block lg:hidden w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1200&q=80"
                alt="Our Chef"
                fill
                className="object-cover"
              />
            </div>

            {/* Desktop Vertical Image */}
            <div className="relative hidden lg:flex justify-center">
              
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                {/* Decorative border */}
                <div className="absolute -top-5 -left-5 w-full h-full border-4 border-yellow-400 rounded-3xl -z-10" />

                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1600&q=80"
                  alt="Our Chef"
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Experience badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        15+ Years
                      </p>
                      <p className="text-xs text-gray-600">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Floating icon */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-xl">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
              </div>
              
            </div>
          </div>

          {/* TEXT SIDE — EXACT MATCH WITH OUR STORY */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-start gap-4 lg:block overflow-visible">
  {/* LEFT: TEXT */}
  <div className="flex-1">
    <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold">
      Our Chef
    </p>

    <h3 className="display text-4xl font-bold leading-tight text-gray-900">
      Chef Michael Anderson
    </h3>
  </div>

  {/* RIGHT: CHEF SKETCH (MOBILE ONLY) */}
  <div className="relative block lg:hidden w-[120px] h-[130px] opacity-[0.8]">
    <Image
      src="/decor/chef-sketch.png"
      alt=""
      fill
      className="object-contain"
    />
  </div>
</div>


            <p className="text-yellow-600 font-semibold text-lg">
              Head Chef & Culinary Director
            </p>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              With over 15 years of culinary expertise, Chef Michael brings
              passion, creativity, and precision to every dish.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed italic max-w-xl">
              “Food is not just about taste — its about creating memories.”
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { icon: Users, value: "50K+", label: "Customers" },
                { icon: Award, value: "25+", label: "Awards" },
                { icon: Heart, value: "100%", label: "Love" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <item.icon className="w-5 h-5 lg:w-8 lg:h-8 text-yellow-500 mx-auto mb-1 lg:mb-2" />
                  <p className="text-lg lg:text-2xl font-bold text-gray-900">
                    {item.value}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* SIGNATURE */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xl display lg:text-3xl font-signature italic text-gray-800">
                — Chef Michael Anderson
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
