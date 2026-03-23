"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
};

export function SplitText({
  text,
  className = "",
  delay = 0.03,
  duration = 0.6,
  ease = "power3.out",
}: SplitTextProps) {
  const chars = useMemo(() => Array.from(text), [text]);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const targets = charsRef.current.filter(Boolean);
    if (targets.length === 0) return;

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 28, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        ease,
        stagger: delay,
      }
    );

    return () => {
      tween.kill();
    };
  }, [chars, delay, duration, ease]);

  return (
    <span aria-label={text} className={className}>
      {chars.map((char, idx) => (
        <span
          key={`${char}-${idx}`}
          ref={(el) => {
            if (el) charsRef.current[idx] = el;
          }}
          aria-hidden="true"
          className="inline-block will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
