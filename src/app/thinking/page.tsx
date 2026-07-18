import type { Metadata } from "next";
import { essays } from "@/lib/content";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How I Think",
  description:
    "Short essays on talent, policy modernization, and keeping human judgment in the loop as HR gets more automated.",
};

export default function ThinkingPage() {
  return (
    <div className="pb-24">
      <header className="border-b border-hair bg-soft">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl">
            <Eyebrow>How I think</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl">
              Opinions I&apos;m willing to defend.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-soft">
              Short pieces on the parts of the job I care most about: why the
              number that won&apos;t reconcile is the real work, why the strongest
              audit is the one you run on yourself, and where automation should stop.
            </p>
          </Reveal>
        </Container>
      </header>

      <Container className="pt-14">
        <div className="mx-auto max-w-prose space-y-20">
          {essays.map((essay, i) => (
            <Reveal key={essay.slug} as="article" delay={i * 40}>
              <article id={essay.slug} className="scroll-mt-24">
                <div className="flex items-center gap-3 text-xs font-medium text-fg-faint">
                  <span className="font-display text-lg font-semibold text-accent">
                    0{i + 1}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{essay.readingTime}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-fg">
                  {essay.title}
                </h2>
                <p className="mt-3 text-lg italic leading-relaxed text-fg-faint">
                  {essay.dek}
                </p>
                <div className="mt-7 space-y-5">
                  {essay.body.map((para, p) => (
                    <p key={p} className="text-[17px] leading-[1.75] text-fg-soft">
                      {para}
                    </p>
                  ))}
                </div>
                <p className="mt-8 text-xs font-medium uppercase tracking-widest text-fg-faint">
                  Draft · final version coming
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
