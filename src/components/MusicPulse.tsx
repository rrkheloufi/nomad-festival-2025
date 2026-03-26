/**
 * MusicPulse - concentric rings that expand and fade at ~120 BPM.
 * Subtly evokes a music visualization without being distracting.
 * Fixed behind all page content (z-index: -1).
 */
export function MusicPulse() {
  // 4 rings, each delayed by 0.5s = 120 BPM feel
  const rings = [0, 1, 2, 3];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Center anchor */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        {rings.map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "340px",
              height: "340px",
              marginLeft: "-170px",
              marginTop: "-170px",
              borderRadius: "50%",
              border: "1.5px solid var(--color-primary)",
              animation: `musicPulse 2s ease-out ${i * 0.5}s infinite`,
            }}
          />
        ))}

        {/* Second set offset for depth - uses secondary color */}
        {[0, 1].map((i) => (
          <div
            key={`sec-${i}`}
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              marginLeft: "-110px",
              marginTop: "-110px",
              borderRadius: "50%",
              border: "1px solid var(--color-secondary)",
              animation: `musicPulse 2.4s ease-out ${i * 1.2 + 0.3}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
