import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Saksham Sharma | CSE (IoT & Intelligent Systems)" },
      {
        name: "description",
        content:
          "Saksham Sharma: B.Tech CSE (IoT & Intelligent Systems) at Manipal University Jaipur, 9.16 CGPA, focused on AI/ML and edge computing.",
      },
      { property: "og:title", content: "About Saksham Sharma" },
      {
        property: "og:description",
        content: "Education, background and interests of Saksham Sharma.",
      },
    ],
  }),
  component: About,
});

const education = [
  {
    school: "Manipal University Jaipur",
    detail: "B.Tech CSE — IoT & Intelligent Systems · 9.16 CGPA · 3rd Year, 5th Sem",
    year: "2024 – 2028",
  },
  { school: "APS International School", detail: "Class XII — 92.2%", year: "2023" },
  { school: "Tithonus International School", detail: "Class X — 97%", year: "2021" },
];

function About() {
  return (
    <div className="grain pt-32">
      <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-primary">About</p>
            <h1 className="display mt-3 text-6xl md:text-8xl">
              Engineer
              <br />
              <span className="text-primary">by curiosity</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              I'm a Computer Science undergraduate specializing in IoT & Intelligent Systems, with
              hands-on experience building full-stack and machine learning applications. Strong
              foundation in data structures, programming and applied AI/ML — currently developing an
              edge-AI predictive maintenance system for a national-level hackathon.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Seeking an internship to apply software and ML skills to real-world engineering
              problems. Languages known: English, Hindi.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <TiltCard intensity={12} className="relative h-full overflow-hidden border border-border bg-card p-10">
            <div
              className="absolute inset-0 -z-10 opacity-40"
              style={{ background: "var(--gradient-crimson)" }}
            />
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="display text-[7vw] leading-none text-foreground/10 md:text-5xl">SS</div>
              <div>
                <p className="font-script text-2xl text-foreground/80">Saksham Sharma</p>
                <p className="mt-2 text-xs tracking-[0.25em] uppercase text-primary">
                  CSE · IoT & Intelligent Systems
                </p>
                <p className="mt-1 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  Manipal University Jaipur
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <div className="display text-3xl text-primary">9.16</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">CGPA</div>
                </div>
                <div>
                  <div className="display text-3xl text-primary">5th</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Semester</div>
                </div>
                <div>
                  <div className="display text-3xl text-primary">2028</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Expected</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <Reveal>
          <h2 className="display text-3xl md:text-4xl">Education</h2>
        </Reveal>
        <div className="mt-10 space-y-px">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 100}>
              <div className="group hairline flex flex-col gap-2 py-6 transition-colors hover:bg-card md:flex-row md:items-center md:justify-between md:px-4">
                <div>
                  <div className="text-lg">{e.school}</div>
                  <div className="text-sm text-muted-foreground">{e.detail}</div>
                </div>
                <div className="text-xs tracking-[0.25em] text-primary">{e.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <Reveal>
          <h2 className="display text-3xl md:text-4xl">Beyond the code</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              t: "Hackathons",
              d: "Core technical team member, focused on rapid prototyping of AI/ML-driven solutions under deadline pressure.",
            },
            {
              t: "Areas of interest",
              d: "Artificial Intelligence, Machine Learning, IoT, Data Science and Software Development.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <TiltCard className="h-full border border-border bg-card p-8">
                <div className="display text-2xl text-primary">{c.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}