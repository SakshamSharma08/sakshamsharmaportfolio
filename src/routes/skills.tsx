import { createFileRoute } from "@tanstack/react-router";
import { Parallax } from "@/components/fx/Parallax";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Process — Saksham Sharma" },
      {
        name: "description",
        content:
          "Technical skills of Saksham Sharma: C, C++, Python, JavaScript, React, Node.js, XGBoost, LSTM, ONNX/TFLite, Git and Supabase.",
      },
      { property: "og:title", content: "Skills — Saksham Sharma" },
      {
        property: "og:description",
        content: "Languages, web/backend, AI/ML tooling and engineering workflow.",
      },
    ],
  }),
  component: Skills,
});

const groups = [
  { t: "Languages", items: ["C", "C++", "Python", "JavaScript"] },
  { t: "Web & Backend", items: ["React", "Node.js", "Express.js (basics)", "Vite"] },
  { t: "AI / ML", items: ["Random Forest", "XGBoost", "LSTM", "ONNX / TFLite", "Streamlit"] },
  { t: "Tools", items: ["Git", "GitHub", "VS Code", "Supabase"] },
];

const process = [
  { n: "01", t: "Understand", d: "Frame the problem, the data available and the constraints of the target device." },
  { n: "02", t: "Prototype", d: "Build baselines fast — simple models first, measured against a real metric." },
  { n: "03", t: "Engineer", d: "Pipelines, feature engineering and clean service boundaries between ML and app." },
  { n: "04", t: "Optimize", d: "Quantize and convert models for low-latency inference at the edge." },
  { n: "05", t: "Ship", d: "Dashboards, monitoring and deployment readiness so the work is actually usable." },
];

function Skills() {
  return (
    <div className="grain pt-32">
      <section className="relative mx-auto max-w-[1400px] overflow-hidden px-5 md:px-10">
        <Parallax speed={0.6} className="pointer-events-none absolute -top-8 left-0">
          <span className="display text-[18vw] text-foreground/[0.04]">STACK</span>
        </Parallax>
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">Skills</p>
          <h1 className="display mt-3 text-6xl md:text-8xl">What I work with</h1>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-6 px-5 py-20 md:grid-cols-2 md:px-10">
        {groups.map((g, i) => (
          <Reveal key={g.t} delay={i * 90}>
            <TiltCard className="h-full border border-border bg-card p-8">
              <div className="text-xs tracking-[0.3em] uppercase text-primary">{g.t}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-3 py-2 text-xs tracking-[0.12em] uppercase text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <Reveal>
          <h2 className="display text-3xl md:text-4xl">How I work</h2>
        </Reveal>
        <div className="mt-10">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="hairline grid gap-2 py-7 md:grid-cols-[80px_220px_1fr] md:items-baseline">
                <span className="display text-2xl text-primary">{p.n}</span>
                <span className="text-sm tracking-[0.25em] uppercase">{p.t}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{p.d}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}