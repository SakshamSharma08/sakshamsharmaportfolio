import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Translates children on scroll relative to viewport center. */
export function Parallax({
  children,
  speed = 0.15,
  rotate = 0,
  scale = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  speed?: number;
  rotate?: number;
  scale?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        setT(center / window.innerHeight);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${(-t * speed * 100).toFixed(2)}px, 0) rotate(${(t * rotate).toFixed(2)}deg) scale(${1 + t * scale})`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}