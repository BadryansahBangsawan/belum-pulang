"use client";

import { SplitText } from "@/components/split-text";

export function LoaderOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <SplitText
        text="Belum Pulang"
        className="display text-4xl font-extrabold tracking-tight text-[#0038FF] sm:text-5xl"
      />
    </div>
  );
}
