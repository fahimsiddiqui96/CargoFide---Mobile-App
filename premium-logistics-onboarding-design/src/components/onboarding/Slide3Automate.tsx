import { BrandMark } from "../BrandMark";

export function Slide3Automate() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/port-crane.jpg"
          alt="Port at dusk"
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,10,26,0.72) 0%, rgba(4,10,26,0.25) 30%, rgba(4,10,26,0.35) 60%, rgba(4,10,26,0.95) 100%)",
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
            AI · AUTOPILOT
          </div>
        </div>

        <div className="mt-8 px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 backdrop-blur-md">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Zero paperwork
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
            Docs, in{" "}
            <span className="italic bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              seconds.
            </span>
          </h1>

          <p className="mt-4 max-w-[300px] text-[14px] leading-[1.55] text-white/70">
            Invoices, packing lists, BL drafts, HS codes — generated,
            validated and filed by AI while you focus on scaling.
          </p>
        </div>

        {/* Doc stack */}
        <div className="relative mx-auto mt-8 h-64 w-full max-w-[320px]">
          {[
            {
              t: "Commercial Invoice",
              s: "INV-2081 · Rotterdam",
              tag: "SIGNED",
              rot: -8,
              y: 40,
              x: -20,
              delay: "0s",
            },
            {
              t: "Packing List",
              s: "PL-2081 · 24 CTNs",
              tag: "READY",
              rot: 4,
              y: 8,
              x: 10,
              delay: "0.15s",
            },
            {
              t: "Bill of Lading",
              s: "MSKU 7742 · Draft",
              tag: "AI DRAFT",
              rot: -2,
              y: -25,
              x: -8,
              delay: "0.3s",
            },
          ].map((d, i) => (
            <div
              key={d.t}
              className="animate-fade-up absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-white/[0.10] p-3.5 shadow-2xl backdrop-blur-xl"
              style={{
                transform: `translate(calc(-50% + ${d.x}px), calc(-50% + ${d.y}px)) rotate(${d.rot}deg)`,
                zIndex: 10 + i,
                animationDelay: d.delay,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"
                        stroke="white"
                        strokeWidth="1.6"
                      />
                      <path d="M14 3v5h5" stroke="white" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-white">
                      {d.t}
                    </div>
                    <div className="text-[10px] text-white/60">{d.s}</div>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-emerald-300">
                  {d.tag}
                </span>
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-[72%] rounded-full bg-white/10" />
                <div className="h-1.5 w-[88%] rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
