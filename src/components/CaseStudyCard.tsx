import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-hair bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_40px_-24px_rgba(37,50,55,0.45)] sm:p-8 ${
        featured ? "lg:col-span-2 lg:flex-row lg:gap-10" : ""
      }`}
    >
      <div className={featured ? "lg:w-1/2" : ""}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {study.eyebrow}
          </span>
          {study.featured && featured && (
            <span className="rounded-full bg-soft px-2.5 py-0.5 text-[11px] font-medium text-fg-faint">
              Headliner
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-[1.7rem]">
          {study.title}
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-fg-soft">
          {study.summary}
        </p>
      </div>

      <div className={featured ? "mt-6 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:justify-between" : "mt-6"}>
        <ul className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-hair bg-soft px-3 py-1 text-xs font-medium text-fg-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Read the case study
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
