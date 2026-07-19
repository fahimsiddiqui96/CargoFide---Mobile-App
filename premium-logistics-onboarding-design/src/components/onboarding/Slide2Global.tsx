import { BrandMark } from "../BrandMark";

export function Slide2Global() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/world-map.jpg"
          alt="Aerial ship view"
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,10,26,0.70) 0%, rgba(4,10,26,0.20) 35%, rgba(4,10,26,0.35) 65%, rgba(4,10,26,0.92) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col animate-fade-up">
        <div className="flex items-center justify-between px-6 pt-3">
          <BrandMark color="#FFFFFF" accent="#5AB5FF" size={26} />
          <div className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md">
            150+ COUNTRIES
          </div>
        </div>

        <div className="mt-8 px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 backdrop-blur-md">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Global Network
            </span>
          </div>

          <h1
            className="font-serif text-white"
            style={{
              fontSize: 44,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            One platform.{" "}
            <span className="italic bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              Every port.
            </span>
          </h1>

          <p className="mt-4 max-w-[300px] text-[14px] leading-[1.55] text-white/70">
            Live rates from 40+ carriers, real-time visibility across 150+
            countries — all in one intelligent workspace.
          </p>
        </div>

        {/* Carrier row */}
        <div className="mt-auto mb-40 px-6">
          <div className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/50">
            Connected carriers
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["MSC", "Maersk", "CMA CGM", "Hapag", "ONE", "Evergreen", "COSCO"].map(
              (c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/85 backdrop-blur-md"
                >
                  {c}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
