"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  UserRound,
  Compass,
  Sprout,
  FlaskConical,
  HeartHandshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { aboutPanels, caseStudies } from "@/lib/content";

/**
 * Interactive expanding-panel selector.
 *
 * The row is split into two shelves by vertical labeled spines:
 *   [ About Me ] · panel · panel · [ Case Studies ] · panel · panel · panel
 *
 * Each panel is a teal-gradient card that expands on hover (desktop) and links
 * to its page. On mobile it collapses to a stacked list with the shelf labels
 * as section headers. Respects prefers-reduced-motion.
 */

const ABOUT_ICONS: Record<string, LucideIcon> = {
  "who-i-am": UserRound,
  "how-i-work": Compass,
};

const CASE_ICONS: Record<string, LucideIcon> = {
  "price-of-belonging": HeartHandshake,
  "raising-talent": Sprout,
  "purpose-or-paycheck": FlaskConical,
};

const GRADIENTS = [
  "linear-gradient(155deg, #4c63d6 0%, #1e2450 100%)",
  "linear-gradient(155deg, #6274e0 0%, #232c58 100%)",
  "linear-gradient(155deg, #4054be 0%, #1a2042 100%)",
  "linear-gradient(155deg, #7d90ea 0%, #2a3363 100%)",
  "linear-gradient(155deg, #4657c8 0%, #171d3c 100%)",
];

type SpineItem = { kind: "spine"; key: string; label: string };
type PanelItem = {
  kind: "panel";
  key: string;
  eyebrow: string;
  title: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  no: number;
};
type Item = SpineItem | PanelItem;

/** Build the ordered list of shelves and panels once (data is static). */
function buildItems(): Item[] {
  const abouts = [...aboutPanels].sort((a, b) => a.order - b.order);
  const cases = [...caseStudies].sort((a, b) => a.order - b.order);

  const items: Item[] = [];
  let g = 0; // gradient + panel counter (panels only)

  items.push({ kind: "spine", key: "spine-about", label: "About Me" });
  abouts.forEach((p) => {
    items.push({
      kind: "panel",
      key: `about-${p.slug}`,
      eyebrow: p.eyebrow,
      title: p.title,
      href: `/about/${p.slug}`,
      icon: ABOUT_ICONS[p.slug] ?? UserRound,
      gradient: GRADIENTS[g % GRADIENTS.length],
      no: ++g,
    });
  });

  items.push({ kind: "spine", key: "spine-cases", label: "Case Studies" });
  cases.forEach((s) => {
    items.push({
      kind: "panel",
      key: `case-${s.slug}`,
      eyebrow: s.eyebrow,
      title: s.title,
      href: `/work/${s.slug}`,
      icon: CASE_ICONS[s.slug] ?? FlaskConical,
      gradient: GRADIENTS[g % GRADIENTS.length],
      no: ++g,
    });
  });

  return items;
}

const ITEMS = buildItems();
const FIRST_PANEL_KEY = (ITEMS.find((i) => i.kind === "panel") as PanelItem).key;

export function InteractiveSelector() {
  const [activeKey, setActiveKey] = useState<string>(FIRST_PANEL_KEY);
  const [revealed, setRevealed] = useState<number[]>([]);

  // Staggered entrance; collapses to instant under reduced-motion.
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setRevealed(ITEMS.map((_, i) => i));
      return;
    }

    const timers = ITEMS.map((_, i) =>
      setTimeout(() => setRevealed((prev) => [...prev, i]), 120 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Desktop: expanding row split by vertical spines */}
      <div className="hidden gap-2 md:flex md:h-[460px]">
        {ITEMS.map((item, index) => {
          const isRevealed = revealed.includes(index);
          const reveal: CSSProperties = {
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateX(0)" : "translateX(-40px)",
          };

          if (item.kind === "spine") {
            return <Spine key={item.key} label={item.label} reveal={reveal} />;
          }

          const active = activeKey === item.key;
          return (
            <Link
              key={item.key}
              href={item.href}
              aria-label={`${item.title}, open`}
              onMouseEnter={() => setActiveKey(item.key)}
              onFocus={() => setActiveKey(item.key)}
              className="group relative flex min-w-[60px] flex-col justify-end overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              style={{
                flex: active ? "7 1 0%" : "1 1 0%",
                backgroundImage: item.gradient,
                borderColor: active ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.08)",
                boxShadow: active
                  ? "0 24px 60px -24px rgba(37,50,55,0.85)"
                  : "0 10px 30px -18px rgba(37,50,55,0.6)",
                zIndex: active ? 10 : 1,
                ...reveal,
              }}
            >
              <Panel item={item} active={active} />
            </Link>
          );
        })}
      </div>

      {/* Mobile: stacked cards with shelf labels as section headers */}
      <div className="flex flex-col gap-3 md:hidden">
        {ITEMS.map((item, index) => {
          if (item.kind === "spine") {
            return (
              <div
                key={item.key}
                className={`flex items-center gap-3 ${index === 0 ? "" : "pt-3"}`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-faint">
                  {item.label}
                </span>
                <span className="h-px flex-1 bg-hair" aria-hidden="true" />
              </div>
            );
          }

          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href}
              className="group relative flex min-h-[120px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-5 transition-transform duration-300 active:scale-[0.99]"
              style={{ backgroundImage: item.gradient }}
            >
              <PanelTexture />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-3 opacity-[0.14]"
              >
                <Icon size={100} strokeWidth={1.15} className="text-white" />
              </div>
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/25 backdrop-blur-sm">
                  <Icon size={20} className="text-white" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                    {item.eyebrow}
                  </p>
                  <h3 className="truncate font-display text-lg font-semibold text-white">
                    {item.title}
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

/** Vertical labeled divider ("shelf") between the two groups. */
function Spine({ label, reveal }: { label: string; reveal: CSSProperties }) {
  return (
    <div
      className="relative flex w-11 shrink-0 items-center justify-center rounded-2xl border border-hair bg-soft transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={reveal}
      aria-hidden="true"
    >
      <span className="absolute top-4 h-1.5 w-1.5 rounded-full bg-accent/60" />
      <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.3em] text-fg-faint">
        {label}
      </span>
      <span className="absolute bottom-4 h-1.5 w-1.5 rounded-full bg-accent/60" />
    </div>
  );
}

function Panel({ item, active }: { item: PanelItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <>
      <PanelTexture />

      {/* Large emblem — slides + fades in when active */}
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
          0{item.no}
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
            {item.eyebrow}
          </p>
          <h3 className="mt-1 whitespace-nowrap font-display text-xl font-semibold text-white">
            {item.title}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-white/90">
            Open
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
