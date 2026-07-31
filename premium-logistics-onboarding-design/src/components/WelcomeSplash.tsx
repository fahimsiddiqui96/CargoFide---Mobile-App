import { useEffect, useState } from "react";
import cargoShipImg from "../assets/cargo-ship.jpg";

interface WelcomeSplashProps {
  onFinished: () => void;
  duration?: number;
}

export function WelcomeSplash({ onFinished, duration = 2500 }: WelcomeSplashProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 400);
    const dismissTimer = setTimeout(onFinished, duration);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(dismissTimer);
    };
  }, [duration, onFinished]);

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#0A1628",
        transition: "opacity 400ms ease-out",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={cargoShipImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          style={{
            objectPosition: "center 35%",
            filter: "brightness(0.55) contrast(1.05)",
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.82) 100%)",
          }}
        />
      </div>

      {/* Centered branding */}
      <div className="relative z-10 flex flex-col items-center">
        {/* CF monogram — same dot pattern as BrandMark */}
        <svg
          width="72"
          height="63"
          viewBox="0 0 100 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_4px_20px_rgba(90,181,255,0.45)]"
        >
          {/* C dots */}
          <circle cx="26" cy="16" r="5.5" fill="#5AB5FF" />
          <circle cx="34" cy="12" r="5.5" fill="#5AB5FF" />
          <circle cx="42" cy="11" r="5.5" fill="#5AB5FF" />
          <circle cx="50" cy="13" r="5.5" fill="#5AB5FF" />
          <circle cx="54" cy="20" r="5.5" fill="#5AB5FF" />
          <circle cx="54" cy="52" r="5.5" fill="#5AB5FF" />
          <circle cx="50" cy="58" r="5.5" fill="#5AB5FF" />
          <circle cx="42" cy="61" r="5.5" fill="#5AB5FF" />
          <circle cx="34" cy="60" r="5.5" fill="#5AB5FF" />
          <circle cx="26" cy="56" r="5.5" fill="#5AB5FF" />
          <circle cx="20" cy="50" r="5.5" fill="#5AB5FF" />
          <circle cx="17" cy="42" r="5.5" fill="#5AB5FF" />
          <circle cx="16" cy="34" r="5.5" fill="#5AB5FF" />
          <circle cx="17" cy="26" r="5.5" fill="#5AB5FF" />
          <circle cx="20" cy="20" r="5.5" fill="#5AB5FF" />
          {/* F dots */}
          <circle cx="64" cy="11" r="5.5" fill="#5AB5FF" />
          <circle cx="72" cy="11" r="5.5" fill="#5AB5FF" />
          <circle cx="80" cy="11" r="5.5" fill="#5AB5FF" />
          <circle cx="88" cy="11" r="5.5" fill="#5AB5FF" />
          <circle cx="64" cy="19" r="5.5" fill="#5AB5FF" />
          <circle cx="64" cy="27" r="5.5" fill="#5AB5FF" />
          <circle cx="64" cy="35" r="5.5" fill="#5AB5FF" />
          <circle cx="64" cy="43" r="5.5" fill="#5AB5FF" />
          <circle cx="64" cy="51" r="5.5" fill="#5AB5FF" />
          <circle cx="64" cy="59" r="5.5" fill="#5AB5FF" />
          <circle cx="72" cy="35" r="5.5" fill="#5AB5FF" />
          <circle cx="80" cy="35" r="5.5" fill="#5AB5FF" />
          {/* Bottom curve */}
          <circle cx="22" cy="68" r="5.5" fill="#5AB5FF" />
          <circle cx="30" cy="72" r="5.5" fill="#5AB5FF" />
          <circle cx="38" cy="75" r="5.5" fill="#5AB5FF" />
          <circle cx="46" cy="77" r="5.5" fill="#5AB5FF" />
          <circle cx="54" cy="78" r="5.5" fill="#5AB5FF" />
          <circle cx="62" cy="77" r="5.5" fill="#5AB5FF" />
          <circle cx="70" cy="75" r="5.5" fill="#5AB5FF" />
          <circle cx="78" cy="72" r="5.5" fill="#5AB5FF" />
          <circle cx="86" cy="68" r="5.5" fill="#5AB5FF" />
        </svg>

        {/* Brand name */}
        <div
          className="mt-5 font-sans"
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          CargoFide
        </div>

        {/* Tagline */}
        <div
          className="mt-2 font-sans"
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Digital Freight Platform
        </div>
      </div>
    </div>
  );
}
