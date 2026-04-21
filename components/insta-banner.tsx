"use client";

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
  >
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#5B51D8', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#C13584', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FD1D1D', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="instagram-radial" cx="30%" cy="100%" r="130%">
        <stop offset="0%" style={{ stopColor: '#0038FF', stopOpacity: 1 }} />
        <stop offset="25%" style={{ stopColor: '#FF543E', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#C837AB', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#5B51D8', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    
    {/* Outer rounded square */}
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      stroke="url(#instagram-radial)"
      strokeWidth="2"
      fill="none"
    />
    
    {/* Camera circle */}
    <circle
      cx="12"
      cy="12"
      r="4.5"
      stroke="url(#instagram-radial)"
      strokeWidth="2"
      fill="none"
    />
    
    {/* Camera dot */}
    <circle
      cx="17.5"
      cy="6.5"
      r="1.5"
      fill="url(#instagram-radial)"
    />
  </svg>
);

export function InstaBanner() {
  const texts = [
    "Follow Us On Instagram",
    "Join Our Community",
    "Share Your Moments",
    "Tag Us @belumpulang.co",
  ];

  // Repeat pattern enough times
  const pattern = Array.from({ length: 6 }, (_, i) => 
    texts.map(text => ({ id: `${i}-${text}`, text }))
  ).flat();

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex">
          {/* First set */}
          <div
            className="flex items-center gap-10 whitespace-nowrap marquee-seamless shrink-0"
          >
            {pattern.map((item) => (
              <span
                key={`set1-${item.id}`}
                className="inline-flex items-center gap-3 text-lg font-extrabold uppercase tracking-wide shrink-0"
              >
                <InstagramIcon />
                <span className="text-white text-2xl">{item.text}</span>
              </span>
            ))}
          </div>

          {/* Second set (exact duplicate) */}
          <div
            className="flex items-center gap-10 whitespace-nowrap marquee-seamless shrink-0"
            aria-hidden="true"
          >
            {pattern.map((item) => (
              <span
                key={`set2-${item.id}`}
                className="inline-flex items-center gap-3 text-lg font-extrabold uppercase tracking-wide shrink-0"
              >
                <InstagramIcon />
                <span className="text-white text-2xl display">{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
