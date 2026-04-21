import Image from "next/image";
import { instagramProfile } from "@/lib/instagram";

export default function InstagramAvatar() {
  return (
    <div className="flex justify-center">
      {/* Gradient Ring */}
      <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400">
        {/* White inner border */}
        <div className="bg-white p-[3px] rounded-full">
          {/* Avatar */}
          <Image
            src={instagramProfile.avatar}
            alt={`${instagramProfile.name} logo`}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
