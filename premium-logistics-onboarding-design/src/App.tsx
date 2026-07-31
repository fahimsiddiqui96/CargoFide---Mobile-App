import { useState } from "react";
import { PhoneFrame } from "./components/PhoneFrame";
import { StatusBar } from "./components/StatusBar";
import { WelcomeSplash } from "./components/WelcomeSplash";
import { Slide1Welcome } from "./components/onboarding/Slide1Welcome";
import { Slide2Global } from "./components/onboarding/Slide2Global";
import { Slide3Automate } from "./components/onboarding/Slide3Automate";

const SLIDES = [Slide1Welcome, Slide2Global, Slide3Automate];

// Read ?slide=N from URL to support deep-linking into a specific slide
function getInitialSlide(): number {
  try {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("slide");
    if (s !== null) {
      const n = parseInt(s, 10);
      if (n >= 0 && n < SLIDES.length) return n;
    }
  } catch { /* ignore */ }
  return 0;
}

// ?fullscreen renders without phone frame for actual mobile viewing
function isFullscreen(): boolean {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("fullscreen") !== null;
  } catch { return false; }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [index, setIndex] = useState(getInitialSlide);
  const Slide = SLIDES[index];
  const isLast = index === SLIDES.length - 1;
  const fullscreen = isFullscreen();

  const next = () => {
    if (isLast) {
      setIndex(0);
    } else {
      setIndex((i) => i + 1);
    }
  };

  const content = (
    <>
      {/* Status bar (over content, light) — only in phone frame mode */}
      {!fullscreen && (
        <div className="absolute inset-x-0 top-0 z-40">
          <StatusBar light />
        </div>
      )}

      {/* Slide content — takes full frame */}
      <div key={index} className="absolute inset-0">
        <Slide />
      </div>

      {/* Bottom pinned CTA + indicators */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        {/* Fade for legibility */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,10,26,0) 0%, rgba(4,10,26,0.55) 45%, rgba(4,10,26,0.92) 100%)",
          }}
        />

        <div className="relative px-6 pb-8 pt-6">
          {/* Page indicators */}
          <div className="mb-5 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1.5 overflow-hidden rounded-full bg-white/25 transition-all duration-500"
                style={{ width: i === index ? 26 : 6 }}
              >
                {i === index && (
                  <span className="block h-full w-full bg-gradient-to-r from-white to-sky-300" />
                )}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            onClick={next}
            className="group relative flex h-[56px] w-full items-center justify-center overflow-hidden rounded-2xl bg-white text-[15.5px] font-semibold text-neutral-900 shadow-[0_20px_50px_-10px_rgba(90,181,255,0.55)] transition active:scale-[0.985]"
            style={{ letterSpacing: "-0.01em" }}
          >
            {/* Subtle shimmer */}
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-60 animate-shimmer" />
            <span className="relative flex items-center gap-2">
              Get Started
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-active:translate-x-1"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Home indicator */}
          <div className="mx-auto mt-4 h-[5px] w-[134px] rounded-full bg-white/70" />
        </div>
      </div>
    </>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 h-dvh w-dvh w-screen overflow-hidden bg-black">
        {showSplash && <WelcomeSplash onFinished={() => setShowSplash(false)} />}
        {content}
      </div>
    );
  }

  return (
    <PhoneFrame>
      {showSplash && <WelcomeSplash onFinished={() => setShowSplash(false)} />}
      {content}
    </PhoneFrame>
  );
}
