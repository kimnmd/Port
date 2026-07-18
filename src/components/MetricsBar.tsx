"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/content";

/**
 * Headline metrics. Numeric stats count up when the bar scrolls into view;
 * qualitative stats simply reveal. Respects prefers-reduced-motion.
 */
export function MetricsBar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hair bg-sink sm:grid-cols-2 lg:grid-cols-4"
    >
      {metrics.map((m, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 bg-canvas p-6 sm:p-7"
          style={{
            transition: "opacity 0.6s ease",
            transitionDelay: `${i * 90}ms`,
            opacity: active ? 1 : 0,
          }}
        >
          <span className="font-display text-4xl font-semibold leading-none tracking-tight text-accent sm:text-5xl">
            {typeof m.count === "number" ? (
              <>
                <CountUp to={m.count} run={active} />
                {m.suffix}
              </>
            ) : (
              m.display
            )}
          </span>
          <span className="text-sm leading-snug text-fg-soft">{m.label}</span>
        </div>
      ))}
    </div>
  );
}

function CountUp({ to, run }: { to: number; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }
    const duration = 1100;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);

  return <>{value}</>;
}
