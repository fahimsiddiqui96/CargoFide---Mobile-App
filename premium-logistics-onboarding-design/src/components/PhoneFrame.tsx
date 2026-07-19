import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-neutral-900 p-4 sm:p-8">
      {/* Phone body */}
      <div
        className="relative overflow-hidden bg-black"
        style={{
          width: 390,
          height: 844,
          borderRadius: 54,
          boxShadow:
            "0 0 0 12px #1a1a1a, 0 0 0 14px #2a2a2a, 0 40px 90px rgba(0,0,0,0.6)",
        }}
      >
        {/* Dynamic Island / Notch */}
        <div
          className="absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-black"
          style={{ top: 12, width: 120, height: 34 }}
        />
        {children}
      </div>
    </div>
  );
}
