import { BrandMark } from "../BrandMark";
import portCraneImg from "../../assets/port-crane.jpg";

export function Slide3Automate() {
  return (
    <div className="relative h-full w-full">
      {/* Background image — no brightness filter */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={portCraneImg}
          alt="Port at dusk"
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
          draggable={false}
        />

        {/* Top scrim — feathered, darkest at very top, fades to transparent below subline */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0"
          style={{
            height: "58%",
            background:
              "linear-gradient(180deg, rgba(4,10,26,0.90) 0%, rgba(4,10,26,0.78) 10%, rgba(4,10,26,0.64) 20%, rgba(4,10,26,0.50) 30%, rgba(4,10,26,0.36) 40%, rgba(4,10,26,0.22) 52%, rgba(4,10,26,0.12) 62%, rgba(4,10,26,0.05) 72%, rgba(4,10,26,0.02) 82%, rgba(4,10,26,0) 92%)",
          }}
        />

        {/* Bottom scrim — extended up for legibility over bright port */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: "62%",
            background:
              "linear-gradient(0deg, rgba(4,10,26,0.94) 0%, rgba(4,10,26,0.86) 6%, rgba(4,10,26,0.76) 12%, rgba(4,10,26,0.66) 18%, rgba(4,10,26,0.54) 26%, rgba(4,10,26,0.44) 34%, rgba(4,10,26,0.34) 42%, rgba(4,10,26,0.26) 50%, rgba(4,10,26,0.18) 58%, rgba(4,10,26,0.11) 66%, rgba(4,10,26,0.06) 74%, rgba(4,10,26,0.02) 84%, rgba(4,10,26,0) 93%)",
          }}
        />

        {/* Subtle grain — consistent with slides 1 & 2 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")",
          }}
        />
      </div>

      {/* Foreground content — top + bottom layout with bright center */}
      <div className="relative z-10 flex h-full w-full flex-col animate-fade-up">
        {/* Top bar: Logo left, badge right */}
        <div className="flex items-center justify-between px-6" style={{ paddingTop: 64 }}>
          <BrandMark color="#FFFFFF" accent="#5AB5FF" size={26} />
          <div className="rounded-full border border-white/20 bg-white/[0.12] px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
            24/7
          </div>
        </div>

        {/* Text block */}
        <div className="mt-8 px-6">
          {/* Category pill with star icon — matches slides 1 & 2 */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.14] px-3 py-1.5 backdrop-blur-md">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L7.5 4.5L11 5.2L8.5 7.8L9.1 11.3L6 9.6L2.9 11.3L3.5 7.8L1 5.2L4.5 4.5L6 1Z" fill="#5AB5FF" fillOpacity="0.9" />
            </svg>
            <span
              className="font-semibold uppercase text-white"
              style={{ fontSize: 10.5, letterSpacing: "0.14em" }}
            >
              End-to-End Support
            </span>
          </div>

          {/* Hero heading — same type scale + serif-italic pattern */}
          <h1
            className="font-serif text-white"
            style={{
              fontSize: 44,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Support,{" "}
            <span className="italic" style={{ color: "#B8E4FF" }}>
              when you need it.
            </span>
          </h1>

          {/* Teal accent underline — flush-left, matches slides 1 & 2 */}
          <div
            className="mt-2 h-[5px] w-8 rounded-full"
            style={{
              background: "linear-gradient(90deg, #5AB5FF 0%, #34D399 100%)",
            }}
          />

          {/* Subline — optional help, no "freight forwarding" */}
          <p className="mt-4 max-w-[300px] text-[14px] leading-[1.55] text-white/90">
            Need help with documentation or customs? Our team is on call.
          </p>
        </div>

        {/* Bright center gap — port crane shows through */}
        <div className="flex-1" />

        {/* Support capabilities — within bottom scrim zone */}
        <div className="px-6" style={{ marginBottom: 172 }}>
          <div className="mb-2 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/80">
            How we help
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Documentation", "Customs clearance", "Compliance", "HS codes", "Cargo insurance"].map(
              (c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/20 bg-white/[0.12] px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md"
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
