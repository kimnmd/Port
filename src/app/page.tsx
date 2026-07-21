import { howIWork } from "@/lib/content";
import { Container, Eyebrow } from "@/components/ui";
import { MetricsBar } from "@/components/MetricsBar";
import { InteractiveSelector } from "@/components/ui/interactive-selector";
import { InfiniteGridHero } from "@/components/ui/infinite-grid-hero";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* Landing hero */}
      <InfiniteGridHero />

      {/* Work — scrolled to from "Explore my work" */}
      <section id="work" className="scroll-mt-24 border-t border-hair">
        <Container className="py-20 sm:py-24">
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              The work, and the story behind it.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <InteractiveSelector />
            <p className="mt-4 flex items-center gap-2 text-sm text-fg-faint">
              <span className="hidden sm:inline">
                Hover a panel to explore · click to open it.
              </span>
              <span className="sm:hidden">Tap any panel to open it.</span>
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
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
