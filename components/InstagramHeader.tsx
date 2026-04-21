// InstagramHeader.tsx
import { instagramProfile } from "@/lib/instagram";
import Image from "next/image";
import InstagramAvatar from "./InstagramAvatar";

export default function InstagramHeader() {
  const p = instagramProfile;

  return (
    <div className="relative overflow-visible p-5 text-center mt-0  md:bg-white md:rounded-2xl md:shadow-lg">
{/* FOLLOW STICKER — top-left, tilted (mobile + desktop only) */}
<div
  className="
    absolute
    top-[-20px]
    left-[-40px]

    block md:hidden lg:block
    pointer-events-none
    z-20
    
  "
>
  <Image
    src="/decor/follow-moments.png"
    alt="Follow our daily moments"
    width={320}
    height={320}
    className="
      w-[200px] lg:w-[320px]
      h-auto
      -rotate-20
      drop-shadow-md
    "
  />
</div>


      
      {/* Instagram ring and photo */}
      <InstagramAvatar />

      {/* Name */}
      <h3 className="font-bold text-xl lg:text-2xl mt-4">{p.name}</h3>
      <p className="text-gray-500 text-sm lg:text-base">{p.username}</p>

      {/* Stats */}
      <div className="flex justify-center gap-8 lg:gap-12 mt-6 text-sm lg:text-base">
        <div>
          <strong className="block text-lg lg:text-xl">{p.posts}</strong>
          <p className="text-gray-500">Posts</p>
        </div>
        <div>
          <strong className="block text-lg lg:text-xl">{p.followers}</strong>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <strong className="block text-lg lg:text-xl">{p.following}</strong>
          <p className="text-gray-500">Following</p>
        </div>
      </div>

      {/* Follow Button */}
      <a
        href={p.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        Follow
      </a>
    </div>
  );
}
