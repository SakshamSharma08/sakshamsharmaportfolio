import { useRef, useState, type ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tf, setTf] = useState("rotateX(0deg) rotateY(0deg)");
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  return (
    <div className="scene-3d">
      <div
        ref={ref}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          setPos({ x: px * 100, y: py * 100 });
          setTf(
            `rotateX(${((0.5 - py) * intensity).toFixed(2)}deg) rotateY(${((px - 0.5) * intensity).toFixed(2)}deg) translateZ(18px)`,
          );
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => {
          setActive(false);
          setTf("rotateX(0deg) rotateY(0deg)");
        }}
        className={`relative transition-transform duration-300 ease-out ${className}`}
        style={{ transform: tf, transformStyle: "preserve-3d" }}
      >
        {children}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: active ? 1 : 0,
              background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}