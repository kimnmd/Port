"use client";

import { type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Cta } from "@/components/ui";
import { site } from "@/lib/content";

/**
 * Infinite-grid landing hero. A grid pattern scrolls endlessly in the
 * background; the cursor reveals a brighter grid layer through a radial mask.
 * Retheme'd to the site's Periwinkle tokens with the real hero copy; the
 * primary button scrolls down to the work section.
 */
export function InfiniteGridHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);
  const reduce = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useAnimationFrame(() => {
    if (reduce) return;
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-canvas"
    >
      {/* Base grid (faint, always visible) */}
      <div className="absolute inset-0 z-0 opacity-[0.06]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Cursor-revealed grid (brighter, masked to a circle under the pointer) */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Periwinkle glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute right-[-20%] top-[-20%] h-[45%] w-[45%] rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute right-[8%] top-[-12%] h-[24%] w-[24%] rounded-full bg-[#b4c4f0]/45 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[45%] w-[45%] rounded-full bg-[#6274e0]/30 blur-[120px]" />
      </div>

      {/* Content — just the name */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-5 px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {site.role}
        </p>
        <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg drop-shadow-sm sm:text-7xl md:text-8xl">
          {site.shortName}
        </h1>
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 pt-4">
          <Cta href="#work">Explore my work</Cta>
          <Cta href="/about/who-i-am" variant="outline">
            Get in touch
          </Cta>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to portfolio"
        className="pointer-events-auto absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-faint transition-colors hover:text-accent"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.35em]">Portfolio</span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </a>
    </section>
  );
}

function GridPattern({
  offsetX,
  offsetY,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
}) {
  return (
    <svg className="h-full w-full text-fg-faint">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
