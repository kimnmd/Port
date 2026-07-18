import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/content";
import { Container, PrivacyFootnote, VisualPlaceholder } from "@/components/ui";
import { CaseChart } from "@/components/charts";
import { hasChart } from "@/components/chart-slugs";
import { ResearchDeepDive } from "@/components/ResearchDeepDive";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: study.title,
    description: study.summary,
  };
}

const ARC: { key: keyof ArcContent; label: string }[] = [
  { key: "problem", label: "The problem I saw" },
  { key: "call", label: "The call I made" },
  { key: "built", label: "What I built / led" },
  { key: "changed", label: "What changed" },
];

type ArcContent = {
  problem: string;
  call: string;
  built: string[];
  changed: string;
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const others = caseStudies
    .filter((c) => c.slug !== study.slug)
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="border-b border-hair bg-soft">
        <Container className="py-14 sm:py-20">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-faint transition-colors hover:text-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All work
            </Link>
          </Reveal>
          <Reveal delay={70}>
            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {study.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={130}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl">
              {study.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-soft">
              {study.summary}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-hair bg-canvas px-3 py-1 text-xs font-medium text-fg-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </header>

      <Container className="pt-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <div className="max-w-2xl">
            {/* Case figure (chart) or placeholder */}
            <Reveal>
              {hasChart(study.slug) ? (
                <CaseChart slug={study.slug} />
              ) : (
                <VisualPlaceholder caption={study.visualCaption} />
              )}
            </Reveal>

            {/* Full-study deep dive, offered up front */}
            {study.report && study.report.length > 0 && (
              <Reveal className="mt-8">
                <ResearchDeepDive report={study.report} />
              </Reveal>
            )}

            {/* Arc */}
            <div className="mt-14 space-y-14">
              {ARC.map((section) => (
                <Reveal key={section.key} as="section">
                  <h2 className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                    <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
                    {section.label}
                  </h2>
                  <div className="mt-5">
                    {section.key === "built" ? (
                      <ul className="space-y-3.5">
                        {study.built.map((item, i) => (
                          <li key={i} className="flex gap-3 text-[17px] leading-relaxed text-fg-soft">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[17px] leading-relaxed text-fg-soft">
                        {study[section.key as "problem" | "call" | "changed"]}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {study.pullQuote && (
              <Reveal>
                <figure className="mt-14 border-l-2 border-accent pl-6">
                  <blockquote className="font-display text-2xl font-semibold leading-snug text-fg sm:text-[1.7rem]">
                    &ldquo;{study.pullQuote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-fg-faint">
                    {study.pullQuote.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            )}

            {study.note && (
              <Reveal>
                <aside className="mt-14 rounded-2xl border border-accent/25 bg-accent/[0.06] p-6">
                  <p className="flex items-start gap-3 text-[15px] leading-relaxed text-fg-soft">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 11v5M12 7.5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    {study.note}
                  </p>
                </aside>
              </Reveal>
            )}

            <PrivacyFootnote />
          </div>

          {/* Sidebar: results + tools */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Reveal>
              <div className="rounded-2xl border border-hair bg-canvas p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  What changed, in numbers
                </h2>
                <dl className="mt-5 space-y-6">
                  {study.results.map((r, i) => (
                    <div key={i}>
                      <dt className="font-display text-2xl font-semibold leading-none tracking-tight text-accent">
                        {r.stat}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-snug text-fg-soft">
                        {r.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-5 rounded-2xl border border-hair bg-canvas p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  Tools used
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-hair bg-soft px-2.5 py-1 text-xs font-medium text-fg-soft"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {study.related && study.related.length > 0 && (
              <Reveal delay={150}>
                <div className="mt-5 rounded-2xl border border-hair bg-canvas p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
                    Connected cases
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {study.related.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          href={`/work/${rel.slug}`}
                          className="group flex items-start gap-2 text-sm font-medium text-accent transition-colors hover:brightness-110"
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{rel.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </Container>

      {/* Next case studies */}
      <Container className="mt-24">
        <div className="border-t border-hair pt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
            Keep reading
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                className="group rounded-2xl border border-hair bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {o.eyebrow}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-fg">
                  {o.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-soft">
                  {o.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
