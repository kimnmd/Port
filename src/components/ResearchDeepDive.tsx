"use client";

import { useState } from "react";
import type { ReportSection } from "@/lib/content";
import { InlineChart } from "./charts";

/**
 * Expandable "full study" deep dive for research cases. The condensed case is
 * the quick read; clicking this reveals the detailed report inline, with the
 * interactive charts embedded in the sections that discuss them.
 */
export function ResearchDeepDive({ report }: { report: ReportSection[] }) {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 text-left transition-colors hover:bg-accent/[0.1]"
      >
        <span className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {open ? "The full study" : "Choose your depth"}
          </span>
          <span className="font-display text-xl font-semibold text-fg">
            {open ? "Hide the full study" : "Read the full study"}
          </span>
          <span className="text-sm leading-relaxed text-fg-soft">
            The quick read is just below. Or open the complete research report here:
            methodology, respondent quotes, and interactive charts. About a 6-minute read.
          </span>
        </span>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="mt-10 space-y-12 animate-fade-up">
          {report.map((s, i) => (
            <article key={s.heading}>
              <h3 className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                <span className="text-fg-faint">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h3>

              <div className="mt-4 space-y-4">
                {s.paragraphs.map((p, j) => (
                  <div key={j}>
                    <p className="text-[17px] leading-[1.75] text-fg-soft">{p}</p>
                    {j === 0 &&
                      s.quotes?.map((q, k) => (
                        <figure key={k} className="my-6 border-l-2 border-accent/50 pl-5">
                          <blockquote className="font-display text-lg italic leading-relaxed text-fg">
                            &ldquo;{q.text}&rdquo;
                          </blockquote>
                          <figcaption className="mt-2 text-sm text-fg-faint">
                            {q.attribution}
                          </figcaption>
                        </figure>
                      ))}
                  </div>
                ))}
              </div>

              {s.charts && s.charts.length > 0 && (
                <div className="mt-6 space-y-4">
                  {s.charts.map((id) => (
                    <InlineChart key={id} id={id} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
