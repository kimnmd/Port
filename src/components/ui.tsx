import Link from "next/link";
import type { ReactNode } from "react";
import { privacyNote } from "@/lib/content";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
};

export function Cta({ href, children, variant = "solid", external }: CtaProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "solid"
      ? "bg-accent-solid text-white hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(37,50,55,0.45)]"
      : "border border-hair text-fg hover:border-accent/50 hover:text-accent";

  const inner = (
    <>
      {children}
      {variant === "solid" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {inner}
    </Link>
  );
}

/** Fabricated-data visual placeholder slot. */
export function VisualPlaceholder({ caption }: { caption: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-hair bg-soft">
      <div className="relative flex aspect-[16/9] items-center justify-center bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:20px_20px]">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-hair bg-canvas text-accent">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="m3 15 4-4 3 3 4-5 4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="9" r="1.4" fill="currentColor" />
            </svg>
          </span>
          <span className="max-w-xs px-4 text-sm font-medium text-fg-faint">
            {caption}
          </span>
        </div>
      </div>
    </figure>
  );
}

export function PrivacyFootnote() {
  return (
    <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-fg-faint">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      {privacyNote}
    </p>
  );
}
