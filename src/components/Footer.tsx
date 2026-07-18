import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hair bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center font-display text-xl font-semibold text-fg">
              {site.shortName}
              <span className="text-accent">.</span>
              <span className="ml-2 rounded-md border border-hair bg-canvas px-1.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                PHR
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-faint">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-fg-faint">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-fg-soft">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-fg-faint">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-fg-soft">
                <li>
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.resumeFile} className="transition-colors hover:text-accent">
                    Résumé (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hair pt-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {"2026"} {site.name}. Built with Next.js &amp; Tailwind.
          </p>
          <p className="max-w-md">
            Details generalized and sample data used to protect confidentiality.
          </p>
        </div>
      </div>
    </footer>
  );
}
