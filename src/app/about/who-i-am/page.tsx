import type { Metadata } from "next";
import { VideoScrollHero } from "@/components/ui/video-scroll-hero";
import { Container, Cta, Eyebrow } from "@/components/ui";
import { EmailReveal } from "@/components/EmailReveal";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who I Am",
  description:
    "An HR operations leader who works where people and numbers meet. People judgment paired with technical execution, bilingual, HR run as systems.",
};

export default function WhoIAmPage() {
  return (
    <div className="pb-24">
      <VideoScrollHero
        image="/who-i-am.png"
        alt="An illustrated journey from curious kid to graduate to HR leader collaborating with a team."
        heading="Who I Am"
        kicker="A short introduction"
      />

      {/* Intro: a clean, editorial single column that rises over the hero */}
      <section className="relative -mt-8 rounded-t-3xl border-t border-hair bg-canvas">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <Eyebrow>About Me</Eyebrow>
              <h2 className="mt-6 max-w-[16ch] text-balance font-display text-[2rem] font-semibold leading-[1.14] tracking-tight text-fg sm:text-[2.6rem]">
                HR built on empathy and evidence.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-5 text-lg leading-[1.75] text-fg-soft">
                <p>
                  I&rsquo;m an HR operations leader who works where people and numbers meet. As the
                  primary HR contact for a workforce of more than 750 across 15 pay groups and five
                  departments, I run the full function: compensation and total rewards, high-volume
                  recruiting and onboarding, employee relations and legal response, audits and
                  internal controls, and development across the whole employee lifecycle.
                </p>
                <p>
                  I care about the human behind every policy and pay stub, and I back every decision
                  with data that holds up. I work bilingually in English and Korean, I&rsquo;m a
                  relentless learner, and I run HR as systems, not events, with the documentation
                  discipline of someone who assumes every file will one day be read in a deposition.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <hr className="my-14 border-hair" />
            </Reveal>

            <div className="space-y-12">
              <Reveal as="section">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  My approach
                </h3>
                <p className="mt-4 text-[17px] leading-[1.8] text-fg-soft">
                  My work starts with listening and ends with proof. Empathy tells me where the real
                  problem is: what people actually need, what&rsquo;s quietly driving them out the
                  door, how a policy feels from the other side of the desk. Then I quantify it,
                  turning messy human situations into clear metrics, defensible cases, and systems
                  that keep working long after the project ends. People point me to the right
                  question; data tells me whether I&rsquo;ve answered it.
                </p>
              </Reveal>

              <Reveal as="section">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  The through-line
                </h3>
                <p className="mt-4 text-[17px] leading-[1.8] text-fg-soft">
                  What ties the work together is a habit of looking where no one else is looking,
                  then building the system that answers the question. It&rsquo;s the compensation
                  analysis that quantified a 32% equity gap, the density-first recovery that cut
                  voluntary turnover from 31% to 12%, and the survey that showed growth-focused
                  programs more than doubled employee satisfaction.
                </p>
              </Reveal>
            </div>

            <Reveal delay={60}>
              <section className="mt-14 rounded-2xl border border-hair bg-soft p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-fg">How I got here</h3>
                <div className="mt-4 space-y-4 text-[17px] leading-[1.75] text-fg-soft">
                  <p>
                    My HR career started out of necessity. I was paying my own way through college,
                    so I took a full-time job as an HR Coordinator in learning and development while
                    carrying a full course load in the afternoons. For four years I did the
                    unglamorous work: planning training schedules, coordinating for directors,
                    running engagement surveys, and leading sessions. It taught me how organizations
                    really run.
                  </p>
                  <p>
                    Then I met a mentor who genuinely invested in my growth. Through their guidance I
                    learned payroll, recruiting, employee relations, and compliance.
                  </p>
                  <p>
                    Today the story has come full circle. The student who once ran training sessions
                    is now the one teaching, and I still learn something new every day.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={60}>
              <section className="mt-8 rounded-2xl border border-hair bg-canvas p-7 text-center sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-fg">Let&rsquo;s talk</h3>
                <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-fg-soft">
                  The best way to reach me is by email, and I&rsquo;m happy to walk through any of
                  this in more detail, with the confidential specifics filled in where they belong.
                  If that sounds like the kind of partner you&rsquo;re looking for, I&rsquo;d love to
                  connect.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <EmailReveal email={site.email} />
                  <Cta href={site.linkedin} variant="outline" external>
                    LinkedIn
                  </Cta>
                </div>
                <a
                  href={site.resumeFile}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:brightness-110"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download résumé (PDF)
                </a>
              </section>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
