export function BrandMark({
  color = "#FFFFFF",
  accent = "#5AB5FF",
  size = 28,
}: {
  color?: string;
  accent?: string;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_2px_10px_rgba(90,181,255,0.35)]"
      >
        <line x1="50" y1="50" x2="22" y2="20" stroke={color} strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="50" x2="16" y2="52" stroke={color} strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="50" x2="30" y2="82" stroke={color} strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="50" x2="72" y2="82" stroke={color} strokeWidth="5" strokeLinecap="round" />
        <circle cx="22" cy="20" r="10" fill={color} />
        <circle cx="16" cy="52" r="10" fill={color} />
        <circle cx="30" cy="82" r="10" fill={color} />
        <circle cx="72" cy="82" r="10" fill={color} />
        <circle cx="50" cy="50" r="15" fill={accent} />
      </svg>
      <div
        className="font-sans"
        style={{
          fontSize: size * 0.82,
          fontWeight: 800,
          color,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        CargoFide
      </div>
    </div>
  );
}
