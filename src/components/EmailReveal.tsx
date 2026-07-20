"use client";

import { useState } from "react";

/**
 * Click-to-reveal email button. Starts as an "Email me" call to action; on
 * click it reveals the address, copies it to the clipboard, and shows a brief
 * "Copied" confirmation. Styled to match the solid `Cta` button.
 */
export function EmailReveal({
  email,
  variant = "button",
  label = "Email me",
}: {
  email: string;
  variant?: "button" | "link";
  label?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const className =
    variant === "button"
      ? "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 bg-accent-solid text-white hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(37,50,55,0.45)]"
      : "inline-flex items-center gap-2 transition-colors hover:text-accent";

  const handleClick = async () => {
    setRevealed(true);
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable (permissions, insecure context); the
      // address is still revealed as plain text so it can be copied manually.
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {revealed ? email : label}
      {!revealed && variant === "button" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 6h16v12H4zM4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {copied && (
        <span
          className={
            variant === "button"
              ? "rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-medium"
              : "text-[11px] font-medium text-accent"
          }
        >
          Copied
        </span>
      )}
    </button>
  );
}
