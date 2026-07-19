export function StatusBar({ light = false }: { light?: boolean }) {
  const color = light ? "text-white" : "text-black";
  return (
    <div
      className={`relative z-40 flex items-center justify-between px-8 ${color}`}
      style={{ height: 48, fontSize: 15, fontWeight: 600 }}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1.5 text-[13px]">
        {/* Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="currentColor" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor" />
          <rect x="10" y="2" width="3" height="10" rx="0.5" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path
            d="M8 10.5a1 1 0 100-2 1 1 0 000 2zM4.2 6.5a5.5 5.5 0 017.6 0M1.5 3.8a9.3 9.3 0 0113 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="22"
            height="11"
            rx="2.5"
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
          <rect
            x="23.5"
            y="4"
            width="2"
            height="4"
            rx="1"
            fill="currentColor"
            fillOpacity="0.55"
          />
        </svg>
      </div>
    </div>
  );
}
