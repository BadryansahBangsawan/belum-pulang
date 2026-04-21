"use client";

const stackTextShadow =
  "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 9px 9px 0 #001A99, 10px 10px 0 #001A99, 11px 11px 0 #001A99, 12px 12px 0 #001A99, 13px 13px 0 #001A99, 14px 14px 0 #001A99";

export const Component = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0038FF] px-4 selection:bg-[#0038FF] selection:text-white md:px-8">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#6c8bff]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="flex w-full justify-start pl-[8%] md:pl-[20%]">
          <h1
            className="m-0 p-0 text-[clamp(4.5rem,12vw,160px)] leading-[0.85] tracking-tighter text-[#9eb8ff]"
            style={{
              fontFamily: '"Arial Black", Impact, sans-serif',
              textShadow: stackTextShadow,
            }}
          >
            #Temankita
          </h1>
        </div>

        <div className="flex w-full justify-center">
          <h1
            className="m-0 p-0 text-[clamp(5rem,15vw,220px)] leading-[0.85] tracking-tighter text-white"
            style={{
              fontFamily: '"Arial Black", Impact, sans-serif',
              textShadow: stackTextShadow,
            }}
          >
            Belum
          </h1>
        </div>

        <div className="flex w-full justify-start pl-[12%] md:pl-[25%]">
          <h1
            className="m-0 p-0 text-[clamp(4.5rem,12vw,160px)] leading-[0.85] tracking-tighter text-white"
            style={{
              fontFamily: '"Arial Black", Impact, sans-serif',
              textShadow: stackTextShadow,
            }}
          >
            pulang
          </h1>
        </div>
      </div>
    </section>
  );
};
