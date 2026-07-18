import { hero, howIWork } from "@/lib/content";
import { Container, Cta, Eyebrow } from "@/components/ui";
import { MetricsBar } from "@/components/MetricsBar";
import { InteractiveSelector } from "@/components/ui/interactive-selector";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero + interactive work selector */}
      <section id="work" className="relative scroll-mt-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(60% 55% at 18% 0%, rgba(157,180,192,0.20), transparent 62%), radial-gradient(48% 50% at 100% 8%, rgba(157,180,192,0.12), transparent 62%)",
          }}
        />
        <Container className="pb-16 pt-16 sm:pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{hero.kicker}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl">
                HR leader who builds.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-soft sm:text-xl">
                {hero.statement}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Cta href="/about">Get in touch</Cta>
                <Cta href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </Cta>
              </div>
            </Reveal>
          </div>

          {/* The selector: five case studies, hover to expand, click to open */}
          <Reveal delay={120} className="mt-14">
            <InteractiveSelector />
            <p className="mt-4 flex items-center gap-2 text-sm text-fg-faint">
              <span className="hidden sm:inline">
                Hover a project to explore · click to open the case study.
              </span>
              <span className="sm:hidden">Tap a project to open the case study.</span>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Metrics */}
      <section className="py-10 sm:py-14">
        <Container>
          <Reveal className="mb-8 max-w-2xl">
            <Eyebrow>By the numbers</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              What the work has added up to.
            </h2>
          </Reveal>
          <MetricsBar />
        </Container>
      </section>

      {/* How I work */}
      <section className="border-t border-hair bg-soft py-20 sm:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>How I work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Three principles I keep coming back to.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {howIWork.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-hair bg-canvas p-7">
                  <span className="font-display text-2xl font-semibold text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-soft">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
