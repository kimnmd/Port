import type { Metadata } from "next";
import { about, site } from "@/lib/content";
import { Container, Cta, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Multi-site, multi-state, bilingual HR. People judgment paired with technical execution.",
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      <header className="border-b border-hair bg-soft">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl">
              People judgment, paired with technical execution.
            </h1>
          </Reveal>
        </Container>
      </header>

      <Container className="pt-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
          {/* Bio + influence story */}
          <div className="max-w-prose">
            <Reveal>
              <div className="space-y-5">
                {about.bio.map((para, i) => (
                  <p key={i} className="text-[17px] leading-[1.75] text-fg-soft">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <section className="mt-14 rounded-2xl border border-hair bg-soft p-7 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-fg">
                  {about.influenceStory.heading}
                </h2>
                <p className="mt-4 text-[17px] leading-[1.75] text-fg-soft">
                  {about.influenceStory.body}
                </p>
              </section>
            </Reveal>
          </div>

          {/* Contact card */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Reveal>
              <div className="rounded-2xl border border-hair bg-canvas p-7">
                <h2 className="font-display text-xl font-semibold text-fg">
                  {about.contact.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-soft">
                  {about.contact.body}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Cta href={`mailto:${site.email}`}>Email me</Cta>
                  <Cta href={site.linkedin} variant="outline" external>
                    LinkedIn
                  </Cta>
                </div>

                <a
                  href={site.resumeFile}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:brightness-110"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download résumé (PDF)
                </a>

                <p className="mt-6 border-t border-hair pt-5 text-xs leading-relaxed text-fg-faint">
                  Public site references my employer generically as {site.employerGeneric}. No phone number is listed here by design.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </div>
  );
}
