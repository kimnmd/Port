"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Scale,
  UserPlus,
  Gavel,
  Sprout,
  FlaskConical,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/content";

/**
 * Interactive expanding-panel selector, adapted from a 21st.dev component.
 * Each panel is one case study: teal gradient + icon, expands on hover
 * (desktop) and links to the case study page. On mobile it becomes a
 * stacked list of tappable cards. Themed to the site's deep-teal accent
 * and respectful of prefers-reduced-motion.
 */

// Presentational: map each case study to a lucide icon + a distinct teal gradient.
const ICONS: Record<string, LucideIcon> = {
  "compensation-pay-equity": Scale,
  "recruiting-onboarding-pipeline": UserPlus,
  "employee-relations-system": Gavel,
  "raising-talent": Sprout,
  "purpose-or-paycheck": FlaskConical,
};

const GRADIENTS = [
  "linear-gradient(155deg, #5c6b73 0%, #253237 100%)",
  "linear-gradient(155deg, #6b7a82 0%, #2e3e45 100%)",
  "linear-gradient(155deg, #4a575e 0%, #202b30 100%)",
  "linear-gradient(155deg, #7b909a 0%, #313b40 100%)",
  "linear-gradient(155deg, #55636b 0%, #1c262a 100%)",
];

function iconFor(slug: string): LucideIcon {
  return ICONS[slug] ?? Scale;
}

export function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);

  // Staggered entrance; collapses to instant under reduced-motion.
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setRevealed(caseStudies.map((_, i) => i));
      return;
    }

    const timers = caseStudies.map((_, i) =>
      setTimeout(() => setRevealed((prev) => [...prev, i]), 140 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Desktop: expanding row */}
      <div className="hidden gap-2 md:flex md:h-[460px]">
        {caseStudies.map((study, index) => {
          const Icon = iconFor(study.slug);
          const active = activeIndex === index;
          const isRevealed = revealed.includes(index);
          return (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              aria-label={`${study.title}, read case study`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className="group relative flex min-w-[60px] flex-col justify-end overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              style={{
                flex: active ? "7 1 0%" : "1 1 0%",
                backgroundImage: GRADIENTS[index % GRADIENTS.length],
                borderColor: active ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.08)",
                boxShadow: active
                  ? "0 24px 60px -24px rgba(37,50,55,0.85)"
                  : "0 10px 30px -18px rgba(37,50,55,0.6)",
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateX(0)" : "translateX(-48px)",
                zIndex: active ? 10 : 1,
              }}
            >
              <Panel study={study} Icon={Icon} active={active} index={index} />
            </Link>
          );
        })}
      </div>

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {caseStudies.map((study, index) => {
          const Icon = iconFor(study.slug);
          return (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group relative flex min-h-[128px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-5 transition-transform duration-300 active:scale-[0.99]"
              style={{ backgroundImage: GRADIENTS[index % GRADIENTS.length] }}
            >
              <PanelTexture />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-3 opacity-[0.14]"
              >
                <Icon size={104} strokeWidth={1.15} className="text-white" />
              </div>
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/25 backdrop-blur-sm">
                  <Icon size={20} className="text-white" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                    {study.eyebrow}
                  </p>
                  <h3 className="truncate font-display text-lg font-semibold text-white">
                    {study.title}
                  </h3>
                </div>
                <ArrowRight size={18} className="ml-auto shrink-0 text-white/80" aria-hidden="true" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

function Panel({
  study,
  Icon,
  active,
  index,
}: {
  study: CaseStudy;
  Icon: LucideIcon;
  active: boolean;
  index: number;
}) {
  return (
    <>
      <PanelTexture />

      {/* Large practice-area emblem — fully in view, slides + fades in when active */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-7 top-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: active ? 0.24 : 0,
          transform: active ? "translateX(0) scale(1)" : "translateX(28px) scale(0.9)",
        }}
      >
        <Icon size={148} strokeWidth={1.25} className="text-white" />
      </div>

      {/* Bottom scrim for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, rgba(20,28,32,0.85) 0%, rgba(20,28,32,0.38) 45%, transparent 100%)",
        }}
      />

      {/* Collapsed: centered emblem + index */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300"
        style={{ opacity: active ? 0 : 1 }}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-md">
          <Icon size={20} className="text-white/90" />
        </span>
        <span className="font-display text-xs font-semibold tracking-wide text-white/55">
          0{index + 1}
        </span>
      </div>

      <div
        className="relative z-[2] flex items-end gap-4 p-6 transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0 }}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
          <Icon size={22} className="text-white" aria-hidden="true" />
        </span>

        <div
          className="min-w-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateX(0)" : "translateX(24px)",
          }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {study.eyebrow}
          </p>
          <h3 className="mt-1 whitespace-nowrap font-display text-xl font-semibold text-white">
            {study.title}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-white/90">
            Read case study
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </>
  );
}

/** Subtle dotted texture over the gradient. */
function PanelTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    />
  );
}
