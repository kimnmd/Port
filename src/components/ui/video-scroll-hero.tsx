"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * VideoScrollHero — a hero whose video (or placeholder) starts smaller and
 * scales up to fill the viewport as you scroll through a tall section. The
 * intro overlay fades out on scroll, then the page continues below.
 *
 * Drop a video file in /public and pass its path as `src` (e.g. "/who-i-am.mp4").
 * With no `src` it renders a themed gradient placeholder so the page still works.
 */
export interface VideoScrollHeroProps {
  /** Path to a video in /public. Omit to fall back to `image`, then the placeholder. */
  src?: string;
  poster?: string;
  /** Path to a still image in /public (used when there's no video). */
  image?: string;
  /** Alt text for the still image. */
  alt?: string;
  heading?: string;
  kicker?: string;
}

export function VideoScrollHero({
  src,
  poster,
  image,
  alt = "",
  heading = "Who I Am",
  kicker = "A short introduction",
}: VideoScrollHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.56, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.7], [28, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.7], [0.5, 0.18]);

  return (
    <section ref={ref} className="relative h-[180vh] bg-canvas">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-3 sm:px-6">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative aspect-video w-full max-w-6xl overflow-hidden bg-black shadow-[0_40px_120px_-40px_rgba(37,50,55,0.75)]"
        >
          {src ? (
            <video
              className="h-full w-full object-cover"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={alt} className="h-full w-full object-cover" />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(155deg, #6274e0 0%, #1e2450 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          )}

          {/* Legibility scrim */}
          <motion.div
            style={{ opacity: scrimOpacity }}
            className="pointer-events-none absolute inset-0 bg-black"
            aria-hidden="true"
          />

          {/* Intro overlay — fades out as the video grows */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              {kicker}
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              {heading}
            </h1>
            <motion.div
              className="mt-10 flex flex-col items-center gap-1.5 text-white/70"
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
              <ChevronDown size={20} aria-hidden="true" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
