// "use client";

// interface Logo {
//   name: string;
//   url: string;
// }

// export default function LogoBanner() {
//   const logos: Logo[] = [
//     { name: "zomato", url: "https://www.zomato.com" },
//     { name: "dineout", url: "https://www.dineout.co.in" },
//     { name: "eazydiner", url: "https://www.eazydiner.com" },
//     { name: "justdial", url: "https://www.justdial.com" },
//     { name: "magicpin", url: "https://www.magicpin.in" },
//   ];

//   return (
//     <section className="relative w-full  my-8 lg:my-16">
//       {/* Diagonal background with gradient */}
//       <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-12 lg:py-16">
//         {/* Decorative top wave */}
//         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//           <svg className="relative block w-full h-8 lg:h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FAF6F0"></path>
//           </svg>
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           {/* Badge style header */}
//           <div className="text-center mb-8 lg:mb-10">
//             <div className="inline-flex items-center gap-2 bg-brown/90 text-yellow-300 px-6 py-2 rounded-full shadow-lg">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               <span className="text-sm text-black lg:text-base font-bold uppercase tracking-wider">
//                 Featured On
//               </span>
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             </div>
//           </div>

//           {/* Scrolling logos with cards */}
//           <div className="relative flex group">
//             <div className="flex gap-6 lg:gap-8 animate-infinite-scroll group-hover:[animation-play-state:paused] pr-6 lg:pr-8">
//               {logos.map((logo, idx) => (
//                 <a
//                   key={`${logo.name}-${idx}`}
//                   href={logo.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-shrink-0 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
//                 >
//                   <div className="bg-white rounded-2xl px-8 lg:px-12 py-4 lg:py-5 shadow-lg hover:shadow-2xl border-2 border-brown/20">
//                     <span className="text-2xl lg:text-3xl font-bold text-brown whitespace-nowrap">
//                       {logo.name}
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Duplicate for seamless scroll */}
//             <div className="flex gap-6 lg:gap-8 animate-infinite-scroll group-hover:[animation-play-state:paused] pr-6 lg:pr-8" aria-hidden="true">
//               {logos.map((logo, idx) => (
//                 <a
//                   key={`${logo.name}-dup-${idx}`}
//                   href={logo.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
//                 >
//                   <div className="bg-white rounded-2xl px-8 lg:px-12 py-4 lg:py-5 shadow-lg hover:shadow-2xl border-2 border-brown/20">
//                     <span className="text-2xl lg:text-3xl font-bold text-brown whitespace-nowrap">
//                       {logo.name}
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Decorative bottom wave */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
//           <svg className="relative block w-full h-8 lg:h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FAF6F0"></path>
//           </svg>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

export default function LogoBanner() {
  const logos: Logo[] = Array.from({ length: 6 }, (_, index) => ({
    src: "/decor/image-1.png",
    alt: `Belum Pulang coffee icon ${index + 1}`,
  }));

  // Repeat logos enough times for smooth flow
  const repeatedLogos = Array.from({ length: 3 }, () => logos).flat();

  return (
    <section className="relative -mt-px mb-8 w-full lg:mb-16">
      {/* Diagonal background with gradient */}
      <div className="relative bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-12 lg:py-16 overflow-hidden">
        {/* Decorative top wave */}
        <div className="absolute -top-px left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-8 lg:h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#0038FF"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Scrolling logos - FIXED FOR SMOOTH FLOW */}
          <div className="relative overflow-hidden">
            <div className="flex">
              {/* First set */}
              <div className="logo-scroll flex shrink-0 gap-6 lg:gap-8">
                {repeatedLogos.map((logo, idx) => (
                  <div key={`set1-${idx}`} className="shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center p-1 lg:h-24 lg:w-24">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={64}
                        height={90}
                        className="h-14 w-auto object-contain lg:h-16"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Second set (exact duplicate for seamless loop) */}
              <div
                className="logo-scroll flex shrink-0 gap-6 lg:gap-8"
                aria-hidden="true"
              >
                {repeatedLogos.map((logo, idx) => (
                  <div key={`set2-${idx}`} className="shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center p-1 lg:h-24 lg:w-24">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={64}
                        height={90}
                        className="h-14 w-auto object-contain lg:h-16"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none rotate-180 z-30">
          <svg
            className="relative block w-full h-8 lg:h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="var(--color-cream)"
            ></path>
          </svg>
        </div>

      </div>
    </section>
  );
}
