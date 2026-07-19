import { BrandMark } from "../BrandMark";

export function Slide1Welcome() {
  return (
    <div className="relative h-full w-full">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/cargo-ship.jpg"
          alt="Cargo ship at sea"
          className="absolute inset-0 h-full w-full origin-center animate-kenburns object-cover"
          draggable={false}
        />
        {/* Cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,10,26,0.75) 0%, rgba(4,10,26,0.25) 30%, rgba(4,10,26,0.30) 60%, rgba(4,10,26,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 60% at 50% 110%, rgba(10,102,255,0.25) 0%, rgba(10,102,255,0) 60%)",
          }}
        />
        {/* Subtle grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")",
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full w-full flex-col animate-fade-up">
        {/* Top: Brand + trust chip */}
        <div className="flex items-center justify-between px-6 pt-3">
          <BrandMark color="#FFFFFF" accent="#5AB5FF" size={26} />
          <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-live-pulse rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            LIVE OPS
          </div>
        </div>

        {/* Hero copy */}
        <div className="mt-8 px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 backdrop-blur-md">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="#5AB5FF" strokeWidth="1.2" />
              <circle cx="5" cy="5" r="1.5" fill="#5AB5FF" />
            </svg>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Intelligent Cargo Ops
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
            Ship the
            <br />
            <span className="italic text-white/95">world,</span>{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              effortlessly.
            </span>
          </h1>

          <p className="mt-4 max-w-[300px] text-[14px] leading-[1.55] text-white/70">
            The AI-powered logistics platform trusted by modern exporters — from
            quote to delivery, on autopilot.
          </p>
        </div>

        {/* Floating feature badges layered over the ship */}
        <div className="relative flex-1">
          {/* Live shipment card */}
          <div
            className="animate-float-a absolute rounded-2xl border border-white/15 bg-white/[0.10] p-3 shadow-2xl backdrop-blur-xl"
            style={{ top: 24, left: 20, width: 168 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                In Transit
              </div>
              <span className="text-[9px] font-semibold text-white/60">
                MSKU 7742
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_6px_#7dd3fc]" />
                <div className="mt-0.5 h-6 w-px bg-gradient-to-b from-sky-300/60 to-emerald-300/60" />
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div>
                  <div className="text-[8.5px] font-semibold uppercase tracking-wider text-white/50">
                    Origin
                  </div>
                  <div className="text-[11px] font-semibold text-white">
                    Nhava Sheva, IN
                  </div>
                </div>
                <div>
                  <div className="text-[8.5px] font-semibold uppercase tracking-wider text-white/50">
                    Destination
                  </div>
                  <div className="text-[11px] font-semibold text-white">
                    Rotterdam, NL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI docs card */}
          <div
            className="animate-float-b absolute rounded-2xl border border-white/15 bg-white/[0.10] p-3 shadow-2xl backdrop-blur-xl"
            style={{ top: 8, right: 18, width: 140 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l1.9 4.6L18.5 9l-3.7 3.2.9 4.8L12 14.8 8.3 17l.9-4.8L5.5 9l4.6-1.4L12 3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">
                  AI Documents
                </div>
                <div className="text-[9px] text-white/60">Auto-generated</div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-sky-300 to-emerald-300" />
              </div>
              <span className="text-[9px] font-semibold text-white/80">
                82%
              </span>
            </div>
          </div>

          {/* ETA card */}
          <div
            className="animate-float-c absolute rounded-2xl border border-white/15 bg-white/[0.10] p-2.5 shadow-2xl backdrop-blur-xl"
            style={{ bottom: 30, right: 26, width: 130 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="white"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 7v5l3 2"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-wider text-white/60">
                  ETA
                </div>
                <div className="text-[13px] font-bold text-white">
                  14 days
                </div>
              </div>
            </div>
          </div>

          {/* Rate card */}
          <div
            className="animate-float-a absolute rounded-2xl border border-white/15 bg-white/[0.10] p-2.5 shadow-2xl backdrop-blur-xl"
            style={{ bottom: 90, left: 26, width: 138 }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-white/60">
                Best Rate
              </div>
              <div className="text-[8.5px] font-bold text-emerald-300">
                ▼ 12%
              </div>
            </div>
            <div className="mt-0.5 text-[15px] font-bold text-white">
              $1,842
              <span className="ml-1 text-[10px] font-medium text-white/50">
                /40'HC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
