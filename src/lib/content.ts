/**
 * content.ts — single source of truth for all site copy.
 *
 * Edit text here without touching components. Everything the site renders
 * (hero, metrics, case studies, essays, bio, contact) reads from this file.
 *
 * PRIVACY: Employer is referenced generically. No real employee names, salary
 * data, policy/claim numbers, or identifying details of actual ER/legal cases.
 * Performance metrics are the operator's own outcomes; sample data only in visuals.
 */

export type Metric = {
  /** Numeric value to count up to on scroll; omit for qualitative stats. */
  count?: number;
  /** Rendered after the counted number (e.g. "%", "+"). */
  suffix?: string;
  /** The large display value (used when there is no count). */
  display?: string;
  /** Supporting label under the value. */
  label: string;
};

export type Principle = {
  title: string;
  body: string;
};

export type CaseStudyResult = {
  /** Large pull-quote stat. */
  stat: string;
  label: string;
};

export type RelatedCase = {
  slug: string;
  label: string;
};

/** A section of a long-form "full study" deep dive (research cases). */
export type Quote = { text: string; attribution: string };

export type ReportSection = {
  heading: string;
  /** Rendered in order; quotes (if any) appear after the first paragraph. */
  paragraphs: string[];
  quotes?: Quote[];
  /** Inline chart ids to embed at the end of the section (see charts.tsx). */
  charts?: string[];
};

export type CaseStudy = {
  slug: string;
  order: number;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  /** The report arc */
  problem: string;
  call: string;
  built: string[];
  changed: string;
  results: CaseStudyResult[];
  tools: string[];
  note?: string;
  /** Cross-links to connected cases (the five read as one operator). */
  related?: RelatedCase[];
  visualCaption: string;
  /** A standout quote surfaced in the quick read. */
  pullQuote?: Quote;
  /** Optional long-form "full study" deep dive, revealed on demand. */
  report?: ReportSection[];
};

export type Essay = {
  slug: string;
  title: string;
  dek: string;
  readingTime: string;
  body: string[];
};

/* ------------------------------------------------------------------ */
/*  Site-wide                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  /** Full name — used in metadata/titles and the About page. */
  name: "Alex Dojun Kim, PHR",
  /** Short mark — used in the nav + footer logo. */
  shortName: "Alex Dojun Kim",
  role: "HR Operations Leader, PHR",
  // Employer referenced generically to protect confidentiality.
  employerGeneric: "a multi-site manufacturer (750+ employees, 15 pay groups)",
  email: "djkcasper@gmail.com",
  linkedin: "https://www.linkedin.com/in/dojunkimm/",
  resumeFile: "/alex-kim-resume.pdf",
  tagline:
    "HR run as systems, not events. People judgment paired with technical execution.",
  metaDescription:
    "Alex Dojun Kim, PHR. An HR operations leader who finds systemic problems, quantifies them with regulator-grade methodology, and builds the controls and monitoring that keep them solved. Compensation, recruiting, employee relations, audits, and lifecycle.",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "What I Do", href: "/about/how-i-work" },
  { label: "About", href: "/about/who-i-am" },
];

/* ------------------------------------------------------------------ */
/*  Homepage                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  kicker: "HR leader who builds",
  statement:
    "I find the systemic problems nobody assigned me: a 32% pay-equity gap, an 8-hour onboarding day, a 34% turnover rate. Then I quantify them with regulator-grade rigor and build the monitoring that keeps them solved. It's HR run as systems, not events.",
  primaryCta: { label: "Get in touch", href: "/about/who-i-am" },
  secondaryCta: { label: "How I think", href: "/thinking" },
};

export const metrics: Metric[] = [
  {
    count: 32,
    suffix: "%",
    label: "compa-ratio pay-equity gap identified and remediated via a funded 3-year plan",
  },
  {
    display: "32 → 17%",
    label: "voluntary turnover cut over five years by rebuilding earned recognition",
  },
  {
    count: 750,
    suffix: "+",
    label: "employee population supported as primary HR contact",
  },
  {
    display: "19 → 42%",
    label: "employee satisfaction more than doubled by growth-focused programs",
  },
];

export const howIWork: Principle[] = [
  {
    title: "Follow what doesn't add up",
    body: "The job description says process what's approved. I decided the figures that wouldn't reconcile were the real work, and went looking for the systemic problems no one assigned me.",
  },
  {
    title: "Audit yourself first",
    body: "Every discrepancy you find internally is one a regulator, plaintiff's attorney, or acquirer doesn't find later. I'd rather surface it, quantify it, and price it than carry unpriced risk.",
  },
  {
    title: "Build monitoring, not just fixes",
    body: "A gap fixed once and never watched reopens silently. I build the standing rhythm that keeps the problem solved after the project ends: monthly testing, documented controls, pulse data.",
  },
];

/* ------------------------------------------------------------------ */
/*  Case Studies — restructured by HR practice area                   */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    slug: "price-of-belonging",
    order: 1,
    featured: true,
    eyebrow: "Culture",
    title: "The Price of Belonging",
    summary:
      "A warm, close-knit “family” company was quietly losing almost a third of its people every year. The same word kept coming up in exit interviews: acknowledgment. There was no official way to get credit for your work, so it had turned into a game of who was close to the boss. I built simple, formal ways to give recognition and feedback back to everyone. Turnover dropped about five points the first year and kept falling, from 32% to 17% over five years, and 95% of employees said they wanted a more professional culture.",
    tags: ["Organizational Culture", "Retention", "Performance Management", "Change Management"],
    problem:
      "On paper, this made no sense. When people feel looked after at work, they usually stay. Here they didn't. It was a mid-size company with a real “family” culture, the kind where coworkers genuinely had each other's backs and you felt safe walking in every day. And yet about a third of the staff left every year, and everyone had gotten so used to it that it felt normal. The warmth wasn't fake, and that was the whole puzzle. It was the best thing about the place, which made the turnover impossible to explain. Then I read five years of exit interviews, and one word kept showing up: acknowledgment. People weren't leaving because they were angry at their coworkers or buried in work, or even, mostly, because of pay. They were leaving because they felt invisible.",
    call:
      "The easy move would have been to go after the obvious stuff: crack down on favoritism, break up the cliques, double-check the promotions. I didn't think that would work, because all of those problems came from the same place. There was no official way for recognition or feedback to reach people, so both had quietly become things you earned through relationships, and relationships reward who you're close to, not what you actually do. So instead of tearing down a culture people loved, I decided to build some structure underneath it, giving feedback and recognition a real, official home so the warmth could go back to just being warmth, instead of doing a job it was never meant to do.",
    built: [
      "Mapped out what was actually happening before changing anything. With no real way to get credit for good work, people had started earning it through face time instead: coffee for the manager, showing up to the lunches, a little extra deference. Meanwhile the once-a-year review had turned into a formality that told people nothing, so the exit interview had become the only honest feedback anyone got, right when it was too late to matter.",
      "Switched performance reviews from once a year to every quarter, so problems got named while there was still time to fix them and no manager could sit on a year of unspoken opinions.",
      "Gave every new hire a clear 30-60-90 day plan tied to team and company goals, so people knew what was expected from week one instead of guessing, which is what favoritism feeds on.",
      "Made biweekly one-on-ones a requirement between every manager and their reports, so time with your manager was just part of the schedule, not a favor you had to earn. Same conversation whether or not you ever bought the coffee.",
      "Set up two clear ways to recognize people, peer-to-peer and manager-to-employee, so credit was public, specific, and tied to the actual work. Recognition became part of a manager's job, not a popularity prize.",
    ],
    changed:
      "Turnover dropped about five points the first year. What mattered more is that it kept dropping, down to about 17% by year five, fifteen points below where we started at 32%. And it didn't bounce back the way a short-lived morale boost would. It just kept sliding down, because real structure sticks where feel-good campaigns fade. Then the follow-up survey gave me the result I still think about: about 95% of people said they'd rather have a professional culture. That sounds like they were rejecting the family they loved, but it's actually the opposite. They weren't asking their coworkers to care less. They just wanted fairness kept separate from friendship: honest feedback, recognition you earned, and promotions you couldn't get just by being close to someone. They wanted care they could tell apart from evaluation.",
    results: [
      { stat: "32%", label: "the yearly turnover this warm “family” culture had come to treat as normal" },
      { stat: "32 → 17%", label: "turnover over five years, a steady drop that held long after the first year" },
      { stat: "95%", label: "of employees said they'd rather have a professional culture, fairness kept separate from friendship" },
    ],
    tools: ["Exit-interview & turnover analysis", "Quarterly performance reviews", "30-60-90 onboarding", "Biweekly 1:1s", "Peer & manager recognition"],
    note:
      "This is a look back at one company over about five to seven years. The employer is kept anonymous, the quotes are paraphrased, and the chart numbers are sample data. The roots of the culture ran deeper than any single round of changes could fully reach.",
    pullQuote: {
      text: "People were loved but left in the dark. The exit interview had quietly become the only honest review anyone got, and it came at the one moment it couldn't help.",
      attribution: "From the analysis",
    },
    related: [
      { slug: "purpose-or-paycheck", label: "What recognition actually buys" },
      { slug: "raising-talent", label: "The same levers, run as a retention system" },
    ],
    visualCaption: "Turnover decline over five years (sample data)",
    report: [
      {
        heading: "The setting",
        paragraphs: [
          "For six or seven years I worked in HR leadership at a mid-size company where “family” wasn't a poster on the wall, it was just how the place felt day to day. People took care of each other and looked out for each other, and it gave everyone a sense of safety most companies would kill for. I want to be clear about that up front, because none of the rest makes sense otherwise: the warmth was not an act. It was real, and it was the best thing about the company.",
          "And that's exactly why the numbers were so confusing. A place that took care of its people this well should have held onto them. It didn't.",
        ],
      },
      {
        heading: "The part that didn't add up",
        paragraphs: [
          "Turnover was running about 32% a year. The “family” was losing almost a third of its people every year and had gotten used to it. The exit interviews held the clue. Year after year, one word came up more than any other: acknowledgment. The people leaving weren't complaining about their coworkers, their workload, or even, mostly, their pay. They said their work was never seen. They left a warm place feeling invisible.",
          "The paradox came down to how managers thought about kindness. A lot of them genuinely believed that taking care of someone was the acknowledgment, that being warm already said “I see how hard you work” without anyone having to actually say it. But kindness and recognition aren't the same thing. Kindness is personal; it says you matter to me. Recognition is information; it says your work matters, and here's where you stand. The company was fluent in the first and had let the second fade away. People were loved, and left in the dark.",
        ],
      },
      {
        heading: "What was really going on",
        paragraphs: [
          "When there's no official way to get recognized, people don't stop wanting it, they just find another way. What I watched over those years was a whole workforce quietly inventing its own market for credit, and like any improvised market, the currency got strange. Since you couldn't earn standing through your work, people went after it through closeness instead: coffee for the manager, showing up to the lunches, a little extra deference. Over time the staff split into two groups. One worked on getting close to management; the other kept their head down and let the work speak. The second group's complaint, over and over in exit interviews, wasn't that networking existed, it was that being close to the boss had come unglued from actually doing the job. If promotions run on coffee instead of contribution, they asked, what's the point of the contribution?",
          "It got worse at the manager level. Newer managers, who hadn't learned to tell flattery from real performance, were the easiest to win over this way. In the worst cases, work done by quiet high performers got credited to people with better rapport, and promotion decisions carried that bias out into the open for everyone to see. The last casualty was the review itself. In a culture where being honest felt unkind, managers wouldn't name people's weaknesses, or even, oddly, their strengths. The annual review turned into a ritual that said nothing, and people only found out where they really stood once it was too late to do anything about it. The exit interview had become the only honest review in the building, and it showed up at the exact moment it couldn't help.",
        ],
        quotes: [
          {
            text: "If promotions run on coffee instead of contribution, what's the point of the contribution?",
            attribution: "The recurring exit-interview complaint, paraphrased",
          },
        ],
      },
      {
        heading: "What I concluded",
        paragraphs: [
          "The obvious move would have been to go after the symptoms: crack down on favoritism, break up the cliques, audit the promotions. My team and I decided that would fail, because all of those problems grew from the same root. There was no official channel for recognition or feedback, so both had turned into things you got through personal relationships, and relationships reward closeness, not contribution. That's not anyone being a bad person; it's just what any system does when informal ties are the only thing holding it together.",
          "We also accepted one hard limit that shaped everything: you can't replace a culture built over decades with a memo, and honestly we shouldn't have tried. People loved it. The goal was never to tear down the family feel, it was to build real structure underneath it, to give feedback and recognition an official home so the warmth could go back to just being warmth.",
        ],
      },
      {
        heading: "What I changed",
        paragraphs: [
          "We went back to basics. Four tools, nothing fancy, each one picked because it turns something informal and optional into something structured and guaranteed. Quarterly reviews replaced the once-a-year one, so feedback came four times as often, problems got named while there was still time to fix them, and no manager could sit on a year of unspoken judgment. A 30-60-90 day plan for every new hire tied their work to team and company goals, so from week one the expectations were clear instead of vague, and vagueness is what favoritism runs on.",
          "Biweekly one-on-ones made time with your manager a standing part of the schedule instead of a favor, so someone who never bought the coffee got the same real conversation as someone who always did. And recognition ran on two official channels, peer-to-peer and manager-to-employee, so credit was public, specific, and tied to the actual work, part of a manager's job instead of a popularity contest. Every one of the four did the same thing in its own way: it took something optional, whether feedback, access, credit, or recognition, and made it a guarantee.",
        ],
      },
      {
        heading: "What happened",
        paragraphs: [
          "Turnover dropped about five points the first year. I'll add the same caveat we gave leadership back then: we never fully controlled turnover and knew we wouldn't, because the roots ran too deep for one round of changes to reach. The better evidence showed up slowly. When we lined up five years of data, the line didn't dip and bounce back the way a short-lived boost would. It just kept dropping, down to about 17% by year five, fifteen points below where we started. Structure sticks; campaigns fade.",
          "The follow-up survey gave me the result I keep coming back to: about 95% of people said they'd rather have a professional culture. Read quickly, that sounds like they were rejecting the family culture. Read closely, it's nothing of the sort. They weren't asking their coworkers to care less. They wanted fairness kept separate from friendship: honest feedback, recognition you earned, and promotions you couldn't buy with closeness. A “professional culture,” the way they meant it, was just a place where being seen didn't have to be bought.",
        ],
        charts: ["turnoverDecline"],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "A “family” culture is an asset that needs upkeep. Leave it alone and its warmth will quietly take over jobs it can't actually do: kindness fills in for feedback, closeness for merit, loyalty for engagement. And nobody notices, because everyone's being so nice. That's what makes it dangerous, it looks like a virtue. The fix isn't less warmth, it's more structure: when recognition is guaranteed, nobody has to chase it, and the real affection in the place is finally free of the suspicion that it's just currency.",
          "The biggest lesson is about where to look. The problem was hiding inside the company's proudest trait, which is exactly where nobody thinks to check. Everybody knows to audit their weaknesses; almost nobody audits their strengths. This case is my argument for learning how.",
        ],
        quotes: [
          {
            text: "They didn't want less care. They wanted care they could tell apart from evaluation.",
            attribution: "The case in one line",
          },
        ],
      },
    ],
  },
  {
    slug: "raising-talent",
    order: 2,
    featured: true,
    eyebrow: "Talent Strategy",
    title: "Raising Talent, Not Headcount",
    summary:
      "A competitor poached 145 of our people, and that first wave dragged 52 more out the door, a 27% loss. We hired like crazy and refilled the org chart to 97%, but the new people were so green that our veterans spent all day training instead of working. The fix wasn't hiring more, it was building up the people we already had. Voluntary turnover fell from 31% to 12%.",
    tags: ["Talent Strategy", "Retention", "Workforce Planning", "Performance Systems"],
    problem:
      "The company started with 725 people. A competitor ran a targeted poaching campaign and took 145 of them, one in five. And that first wave set off a second one: 52 more left in the aftermath, 197 gone in total, a 27% loss that dropped us to 528. The second wave is the one that matters, because the first wave caused it. Every person who left sent the same message to everyone still there, that other options were out there and people were taking them. It also pulled out coworkers who made the job manageable and dumped their work onto whoever stayed, so each departure spurred about a third of another one. Sales stalled as knowledge walked out the door, morale sank, and a workforce carrying the load of 725 with the hands of 528 started to burn out, which threatened a third wave.",
    call:
      "With the spiral picking up speed, HR did the instinctive thing first and hired in bulk: three agencies, every HR hand pulled onto recruiting, headcount rebuilt to 703. It hit the number everyone could see while quietly wrecking the one that actually mattered. So I made the call to flip the whole approach: stop chasing headcount and start building up the people already in the building.",
    built: [
      "Set clear KPIs so every role had a visible standard, because if you never define what good looks like, you can't spot who's struggling or who's excelling, and you can't act on either.",
      "Turned training from a random burden dumped on the veterans into a real, structured program that people were actually held accountable for finishing.",
      "Invested in team events to rebuild the social glue the poaching had torn apart, which the contagion had already proven was a real reason people stayed.",
      "Paid top-performing managers and employees noticeably more than average ones, so being great was visibly worth more than being okay, and the strongest people, the ones most likely to get poached next, could see that staying paid off.",
      "Held people who refused to do the work to a consistent standard, because rewarding the top while ignoring the bottom means you don't really have a standard at all.",
      "Expanded benefits and wellbeing, more vacation and an Employee Assistance Program especially, to repair the burnout the crisis caused, because no performance standard fixes exhaustion.",
    ],
    changed:
      "Voluntary turnover fell from 31% at the worst of the crisis to 12% after the pivot, a 19-point drop, more than sixty percent lower, landing below the typical rate for the market. A company that had been losing almost one in three people a year by choice started keeping almost nine in ten. And it did it without going back to mass hiring. It stopped the bleeding not by out-recruiting the competitor, but by becoming a place that was harder to leave.",
    results: [
      { stat: "31 → 12%", label: "voluntary turnover, down by more than sixty percent" },
      { stat: "97%", label: "headcount refilled by mass hiring, but the actual skill kept dropping" },
      { stat: "0.36", label: "for every person poached, about a third of another one quit too" },
    ],
    tools: ["KPI design", "Structured training", "Differentiated rewards", "EAP & benefits design"],
    note:
      "This case builds on the Purpose or Paycheck study: the same visible, believable investment that doubled satisfaction is what kept people from walking out the door.",
    pullQuote: {
      text: "Headcount isn't capability. We rebuilt 97% of the org chart and kept bleeding.",
      attribution: "The central lesson",
    },
    related: [
      { slug: "purpose-or-paycheck", label: "The study this case extends" },
      { slug: "price-of-belonging", label: "Recognition as a retention system" },
    ],
    visualCaption: "Headcount cascade: 725 to 528 to 703 (sample data)",
    report: [
      {
        heading: "How the losses snowballed",
        paragraphs: [
          "The company started the period with 725 employees. A competitor ran a targeted poaching campaign, and 145 people, one in five, took offers and left. What came next wasn't a bunch of unrelated resignations, it was a chain reaction: 52 more left right behind the first group, bringing the total to 197 people, 27% of the workforce, and dropping headcount to 528.",
          "The second wave is the one that really matters, because the competitor's offers didn't cause it, the first wave did. When people leave, it tells everyone who stays something: that other options are out there and coworkers are taking them. It also removes the people who made the work manageable and shifts their workload onto everyone left behind. Here, every person who got poached led to about a third of another person quitting on their own, a contagion multiplier of roughly 0.36. Sales stalled, morale dropped, and the people who remained, now doing the work of 725 with the hands of 528, started to burn out.",
        ],
        charts: ["departures"],
      },
      {
        heading: "The knee-jerk fix: hire like crazy",
        paragraphs: [
          "With the losses speeding up, HR went into full firefighting mode, and fairly so. Three outside agencies got hired at once, and recruiting stopped being one person's job: everyone on the HR team was put on hiring. On its own terms, it worked. Headcount climbed back from 528 to 703, about 97% of where we'd started.",
          "As a numbers operation, that was fast and it worked. As a talent operation, it had a flaw you couldn't see until later: all that speed came at the cost of being picky. Hiring that fast, through three pipelines at once, with no clear list of the skills we needed, no real scorecard, and no consistent interviewing, meant we nailed the one thing we could measure, headcount, while quietly lowering the one that mattered, how capable the average new hire actually was.",
        ],
      },
      {
        heading: "Refilled, but not rebuilt",
        paragraphs: [
          "The fallout showed up within months. With about a quarter of the staff brand new and a hiring process that hadn't screened for readiness, training swallowed the people who were actually productive. The veterans, the ones who'd survived the poaching and were already stretched thin, ended up spending most of their days training new hires instead of doing their own jobs. The math is brutal: every hour a proven performer spends training is an hour of their own work lost, borrowed from your best people to prop up your newest.",
          "The money told the same story. Instead of sales recovering as headcount recovered, the company bled from both ends: payroll climbed back toward where it had been while sales kept falling. Headcount, the number the whole effort had chased and hit, turned out to be a vanity metric. The org chart said 703; the actual working capacity was much lower. That's the idea behind the case's title. What drives output isn't the number of people, it's talent density, how many of them can do the job at a high level without eating up everyone else's time, and it's completely possible to refill your headcount while destroying that.",
        ],
      },
      {
        heading: "The pivot: build people, don't just add them",
        paragraphs: [
          "The fix flipped the direction of the investment: instead of grabbing more people, develop and hold onto the ones already here. The program stood on six deliberately basic things, the groundwork the crisis hiring had skipped. Clear KPIs gave every role a visible standard, so both struggling and excelling became easy to see. Real, enforced training turned the hidden tax on veterans into a managed program people were accountable for. Team events rebuilt the social fabric the poaching had ripped up. Paying top performers noticeably more than average ones made being great visibly worth it, and told the strongest people, the ones most likely to get poached next, that staying paid off. Holding the people who refused to work to a consistent standard closed the loop, because a standard you only enforce at the top isn't a standard. And better benefits, more vacation plus an Employee Assistance Program, repaired the burnout, because no performance standard fixes exhaustion.",
          "It holds together if you think about what actually motivates people: clear KPIs let everyone see how their effort connects to the result, paying top performers more restores the sense of fairness your best people are always quietly checking for, consistent discipline makes both of those believable, and the wellbeing piece rebuilds the basic floor of rest and support that steady performance depends on. In the language of the Purpose or Paycheck study, the program made the real motivators more believable while taking away the things dragging people down.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "Voluntary turnover fell from 31% at the peak of the crisis to 12% after the pivot: a 19-point drop, more than sixty percent lower, and below the typical rate for the market. A company that had been losing almost one in three people a year by choice started keeping almost nine in ten.",
          "The cause deserves some honesty. The drop came after the full pivot, all six pieces together, and the case can't single out any one of them. What it can say is that the drop happened without going back to mass hiring and without trying to out-bid the competitor on offers. Some of the improvement is also just a healthier mix of people: the committed ones staying longer while the uncommitted ones leave through managed exits instead of quitting, which is exactly what a working performance system is supposed to do, not a side effect.",
        ],
        charts: ["turnover"],
      },
      {
        heading: "Three lessons",
        paragraphs: [
          "First, turnover is a group event, not an individual one. That 52-person second wave shows that every departure is also a message and a workload handed to someone else, so any retention model that treats people as independent decision-makers will underestimate crisis losses by the size of that ripple effect. The practical takeaway: a poaching hit isn't the moment to start retention work on the people who left, it's the moment to start it on everyone who's still there.",
          "Second, headcount is a lagging vanity number and density is the real lever. The company hit 97% headcount recovery while skill, sales, and morale all kept sliding, because hiring fast without being picky turns payroll into a training burden instead of output. The cost of hiring slower is visible and has a limit; the cost of hiring watered-down is hidden, keeps compounding, and gets paid by your best people.",
          "Third, you keep people with the same thing that motivates them. The pivot that cut turnover by two-thirds is basically the same set of moves that doubled satisfaction in the Purpose or Paycheck study: visible, believable, differentiated investment in the people already there. Two separate measurements, one mechanism.",
        ],
        quotes: [
          {
            text: "It stopped the bleeding not by out-recruiting the competitor, but by becoming harder to poach from.",
            attribution: "From the analysis",
          },
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "The case starts with a company losing its people to a competitor and ends with a company that made itself the harder one to leave. In between is the whole point: the instinctive response to losing talent, replace the bodies fast, can make the wound worse. Mass hiring refilled the org chart and drained the company, because output comes from the density of skill, not the count of heads, and density is exactly what hiring fast and unselectively destroys.",
        ],
        quotes: [
          {
            text: "When talent walks out the door, the real question isn't how fast you can refill the seats. It's whether the company the next person is joining is one the last person would have stayed at.",
            attribution: "The case in one line",
          },
        ],
      },
      {
        heading: "The limits",
        paragraphs: [
          "This is a look back at one company with no control group, so I can't cleanly split the turnover drop across the six pieces, and outside factors like the competitor's appetite for hiring or a looser job market may account for some of it. The numbers are annual voluntary turnover and leave out involuntary exits, so read the disciplinary program's effect on the mix with that in mind. The sales and payroll effects are described in direction rather than exact figures, and the training load on the veterans was something I saw firsthand rather than formally measured. A good follow-up would track the quality of the mass-hired group over time, pin down the contagion analysis with exit-timing data, and test whether the drop holds through the next hiring cycle.",
        ],
      },
    ],
  },
  {
    slug: "purpose-or-paycheck",
    order: 3,
    featured: true,
    eyebrow: "People Research",
    title: "Purpose or Paycheck",
    summary:
      "I ran a survey to settle a simple question: for younger workers, does pay or growth actually keep them around? Growth beat pay two to one, and the programs I built around growth more than doubled satisfaction, from 19% to 42%, without touching anyone's pay.",
    tags: ["People Research", "Retention", "Engagement", "Program Design"],
    problem:
      "The popular story says Gen Z is wired differently, that they care more about purpose and flexibility than a paycheck. But this same group entered the workforce with living costs so high that the old theories say they should be glued to their paychecks. Both can't be fully true, and each one lines up with a classic motivation framework: Maslow, where pay and security have to come first, versus Herzberg, where pay only keeps people from being unhappy while growth and recognition are what actually build commitment. Underneath all the theory was a real, practical problem: satisfaction was low, and I needed to know which lever actually moved retention before spending money on it.",
    call:
      "Instead of guessing from a checkbox survey, I decided to run a real study and then actually act on it. I set up a two-phase, mixed-method investigation designed to separate what people say they value from what would actually make them quit, borrowing Herzberg's own critical-incident method, and I committed to rolling out and measuring real programs based on whatever the data showed.",
    built: [
      "Ran a two-phase study: short one-on-one interviews to hear people's reasoning in their own words, then the same core question sent out to the wider workforce to see if those themes held up at scale.",
      "Separated 'what do you value' from 'what would make you leave' on purpose, so I could tell a real motivator apart from a basic dissatisfier, and read the results against both Maslow and Herzberg.",
      "Surfaced the main finding: growth and learning was the top value at 50%, beating pay two to one even with real cost-of-living pressure, and younger workers saw growth as a down payment on future pay.",
      "Rolled out three growth-focused programs from the findings: company-paid open courses, a tenure-gated tuition-reimbursement program for certifications and coursework (with retention terms so we weren't just training people for the competition), and four employee resource groups.",
      "Measured everything with before-and-after pulse surveys, and was upfront about the limits: a single-company pilot with no control group.",
    ],
    changed:
      "Satisfaction went up because the programs gave people exactly what they said they wanted most: room to grow and learn. After the tuition-reimbursement benefit and the other growth offers launched, satisfaction more than doubled, from 19% to 42% in a single cycle, with no raises and no shakeup of management. The credible, career-linked education benefit got twice the sign-ups of the generic course, 8% versus 4%, exactly like the findings predicted: growth offers land in proportion to how believably they turn into earning power. The most telling part is that the boost reached way beyond the handful of people who actually enrolled, which is the whole point: a funded, believable path to grow tells the entire workforce that the company is investing in them. You don't buy retention with perks; you earn it by making that investment obvious.",
    results: [
      { stat: "19 → 42%", label: "satisfaction more than doubled after the growth programs, without a single raise" },
      { stat: "2 : 1", label: "growth and learning beat pay two to one as what people valued most" },
      { stat: "4 → 8%", label: "sign-ups doubled once the growth offer was actually credible" },
    ],
    tools: ["In-depth interviews", "Pulse surveys", "Herzberg & Maslow analysis", "Education-benefit & ERG design"],
    note:
      "A single-company pilot. The quotes are paraphrased to keep people anonymous, with no identifying details, and the chart numbers are sample data.",
    pullQuote: {
      text: "Better skills mean better pay down the line, so I'm not focused on pay right now. I know it'll come as I keep building myself.",
      attribution: "Respondent E, paraphrased",
    },
    related: [
      { slug: "price-of-belonging", label: "When recognition goes missing" },
      { slug: "raising-talent", label: "The same levers at workforce scale" },
    ],
    visualCaption: "Value distribution, satisfaction, and enrollment (sample data)",
    report: [
      {
        heading: "The question",
        paragraphs: [
          "The popular story says this generation is motivated differently, that they care more about purpose and flexibility than pay. But the same group walked into the workforce facing some of the highest living costs in memory, which the old theories say should tie people tightly to their paychecks. Both can't be fully true, and each one lines up with one of the two most-taught motivation frameworks in HR.",
          "Maslow's hierarchy says needs come in order: pay that covers the bills and a stable job have to be reasonably handled before belonging, esteem, and growth can motivate anyone. Herzberg's two-factor theory says it works the other way around. Things like pay and working conditions can only keep people from being unhappy, while the real motivators, achievement, recognition, growth, are what create actual commitment.",
          "So the question was simple. Does a young workforce follow Maslow's order, where pay and security have to be met before culture and purpose can keep people, or Herzberg's split, where pay only stops people from leaving while growth, recognition, and relationships are what make them stay?",
        ],
      },
      {
        heading: "How the study worked",
        paragraphs: [
          "The study ran in two phases. First, employees from a bunch of different roles sat down for short one-on-one interviews built around three questions: which of five things they value most (pay, benefits, a good manager and coworkers, growth and learning, or flexibility), why, and which one, if it got worse, would most likely push them to leave. Then the same 'what do you value most' question went out to the whole workforce to see if the interview themes held up at scale.",
          "The design deliberately kept 'what do you value' separate from 'what would make you leave,' following Herzberg's own critical-incident method. That separation earned its keep: in several cases, the open-ended 'why' completely flipped the meaning of the checkbox answer.",
        ],
      },
      {
        heading: "What people said they valued",
        paragraphs: [
          "Growth and learning was the most-picked value at 50%, well ahead of pay at 25%, a good manager and coworkers at 12%, flexibility at 10%, and benefits at just 3%, as the ring above shows. There's one wrinkle worth flagging. Under a strict Herzberg reading, relationships count as a hygiene factor, which puts the pure-motivator share at 50%, growth on its own. But the people who picked manager and coworker quality described it as a way to grow, a source of learning and a condition for growing together, which bumps the motivator-leaning share up to 62%. Either way, growth by itself beats pay two to one, even in a workforce feeling real cost-of-living pressure.",
        ],
      },
      {
        heading: "What you value and what makes you quit are two different things",
        paragraphs: [
          "The clearest example came from one of the longer-tenured people. Asked what they valued most, they talked about constant learning and getting better at their craft, growing so they could contribute more and be a better person for their family. Asked what would make them leave, they answered in one line.",
          "What you value and what makes you leave lived on two different ladders. Growth is what kept them committed, while a broken working relationship, a basic hygiene factor, was the thing that would push them out. Another person showed the same split with growth itself: happy with everything else, they said they'd still start job-hunting if their chances to grow dried up, a motivator working exactly like the commitment anchor Herzberg describes.",
        ],
        quotes: [
          {
            text: "If the working relationships are strained, nothing else can function.",
            attribution: "Respondent B, paraphrased",
          },
        ],
      },
      {
        heading: "Growth is really just future pay",
        paragraphs: [
          "The most important answer came from a younger employee who picked growth and learning, but whose reasoning changed what that answer meant. They were soaking up as much as they could right now, confident that better skills would turn into better pay later, so pay just wasn't the priority today.",
          "On paper, that's a motivator answer. Underneath, it's a pay strategy on a delay: they chose growth because it's the most reliable path to more money later. A checkbox survey would have filed this person under 'purpose-driven' and gotten it wrong. For younger workers the two ladders are joined at the top, because building skills is how they bargain for future pay.",
        ],
      },
      {
        heading: "A bad environment can switch motivation off",
        paragraphs: [
          "Two people, answering separately, described not what motivates them but what had happened to the motivation they used to have.",
          "Constant operational chaos, a broken-down work environment, had killed the drive to grow that the employee had walked in with. A second person named the result: when neither the pay nor the management is holding up, people fall back on the one thing the job still reliably delivers. That reframes the study's pay-first answers. At least some of them aren't pay-motivated people at all, they're worn-down people expressing it as pay. Sometimes picking pay is a symptom, not a preference.",
        ],
        quotes: [
          {
            text: "This place made me stop caring about growth. Everything is an emergency and we only ever do damage control. There is nothing that sets us up for the future.",
            attribution: "Respondent H, paraphrased",
          },
          {
            text: "People focus on money because everything else already feels broken. There is little hope for anything more unless management genuinely listens to us and acts on it.",
            attribution: "Respondent K, paraphrased",
          },
        ],
      },
      {
        heading: "What I rolled out",
        paragraphs: [
          "The findings pointed at the motivator side, so that's where I acted, with three programs. First, company-paid open courses, free and voluntary, with a gentle nudge toward job-relevant skills. Second, a tuition-reimbursement benefit for people past their first year: professional certifications and coursework at recognized schools, on the company's dime, with retention terms attached so it wouldn't just subsidize the competition. Third, an employee resource group program, aimed at the belonging and peer-learning that a quarter of interviewees ranked highly.",
          "The retention terms on the education benefit weren't an afterthought. They came straight out of the study: in a workforce that chases growth partly to raise its market value, a no-strings education benefit just pays to train the people who'll hire your employees next.",
        ],
      },
      {
        heading: "The results",
        paragraphs: [
          "The open courses drew about 4% of the workforce, right at the known industry baseline for voluntary learning benefits. The tuition-reimbursement program drew about 8%, double that, even though it was harder to qualify for and came with binding conditions. Higher bar, twice the sign-ups. What changed wasn't how generous it was, it was how credible and portable: a recognized certification in your field has visible market value, which is exactly the kind of growth the younger employees said they wanted.",
          "Then the pulse surveys. Satisfaction rose from 19% to 42% in a single cycle, more than doubling, with no change to pay. The starting point is a finding on its own: fewer than one in five people said they were satisfied beforehand, which matches the interviews describing motivation that had been actively ground down. The jump is big for one cycle, and it reached far beyond the few who actually enrolled, which is the study's most useful lesson for practice. A funded, believable path to grow tells the whole workforce that the company is investing in its people, and that message spreads much wider than the programs actually get used.",
        ],
        charts: ["enrollment", "satisfaction"],
      },
      {
        heading: "What it means",
        paragraphs: [
          "Set against the two theories, the evidence knocks Maslow down from a gate to more of a dial. Low pay didn't lock motivation out, it taxed it: a quarter of the workforce answered pay-first, the most stressed-out people collapsed into pure transaction mode, and the non-credible course offer only converted at 4%. But motivators that believably turned into future income cleared the bar anyway. Herzberg's two-factor structure basically holds, with one tweak: for this workforce the biggest motivator got its power precisely from its link to future pay, so the two ladders are woven together rather than separate.",
          "And both theories are quiet on the thing the data keeps pointing at. Pay and benefits work like a language, a constant signal of whether the relationship is a mutual investment or just extraction, and a workforce reads that signal together, far beyond the people who use any one program. In one line: loyalty here hasn't disappeared, it's been repriced. You can't pay for it in tenure and gratitude, and you can't buy it with perks. You earn it by credibly investing in where the employee is trying to go.",
        ],
      },
      {
        heading: "The limits",
        paragraphs: [
          "The claims have limits, and they're worth stating plainly. This is a single-company pilot with no control group, so the satisfaction jump can't be cleanly pinned on any one program or separated from other things happening at the same time. The two education programs differed in who could join and how they were built, not just in credibility, so comparing them is suggestive, not proof. Satisfaction is an early indicator, not retention itself, and sign-ups measure who started, not who finished. The honest summary: the work moved the workforce from badly struggling to genuinely mixed, a strong trajectory rather than a finished fix, which is exactly why the follow-up round matters.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  About Me — two selector slides, each with its own dedicated page    */
/*  who-i-am -> video-scroll intro; how-i-work -> animated section      */
/* ------------------------------------------------------------------ */

export type AboutPanel = {
  slug: string;
  order: number;
  /** Small label above the title in the panel. */
  eyebrow: string;
  title: string;
};

export const aboutPanels: AboutPanel[] = [
  { slug: "who-i-am", order: 1, eyebrow: "About Me", title: "Who I Am" },
  { slug: "how-i-work", order: 2, eyebrow: "About Me", title: "What I Do" },
];

/* ------------------------------------------------------------------ */
/*  How I Think — essay drafts                                         */
/* ------------------------------------------------------------------ */

export const essays: Essay[] = [
  {
    slug: "the-anomaly-is-the-assignment",
    title: "The anomaly is the assignment",
    dek: "Why the figure that won't reconcile is the most valuable thing on your desk, and why processing past it is the real error.",
    readingTime: "3 min read",
    body: [
      "Every operational role comes with an implicit instruction: process what's approved. Run the payroll, close the case, onboard the hire, file the report. The instruction is reasonable, since throughput matters, but it quietly trains people to treat anomalies as friction to be smoothed over rather than signal to be investigated. The number that won't reconcile becomes something you force into the total instead of the thing you stop and chase.",
      "I think that's backwards. The anomaly is the most information-dense thing in the whole process. A figure that reconciles tells you the system worked as designed; a figure that doesn't is the system trying to tell you something it wasn't designed to say. The quarterly payroll audit that kept surfacing compensation that didn't track to role, tenure, or performance wasn't noise in an otherwise clean process. It was a 32% pay-equity gap announcing itself, one irreconcilable row at a time.",
      "The reason anomalies get ignored isn't laziness. It's that chasing them is nobody's assigned job. The job description says process what's approved, not interrogate why it was approved. So the work of turning an anomaly into a finding is almost always work you assign yourself. That's the part people miss when they call it initiative: it isn't enthusiasm, it's a decision to treat the discrepancy as your problem before anyone tells you it is.",
      "There's a discipline to doing this well, because not every anomaly is a crisis. The skill is triage: quantify quickly, distinguish structure from randomness, and escalate only what survives the test. A single odd number is a rounding error; the same pattern across roles and tenure bands is a liability. Compa-ratios, market benchmarks, and four-fifths rule testing exist precisely to tell those two apart before you spend anyone's political capital.",
      "Process what's approved is a fine baseline. But the value you add above the baseline lives entirely in the moments you refuse to. The anomaly isn't the interruption to the work. It is the work.",
    ],
  },
  {
    slug: "run-the-audit-on-yourself",
    title: "Run the audit on yourself first",
    dek: "Most HR functions experience audits as something done to them. The stronger posture is to get there first.",
    readingTime: "4 min read",
    body: [
      "There are two ways to encounter an audit. In the first, someone external (a regulator, a plaintiff's attorney, an acquirer's diligence team) examines your operation and tells you what's wrong. In the second, you examine your own operation before any of them can, and fix what you find. The same discrepancies exist in both scenarios. The only variable is who discovers them, and how much it costs when they do.",
      "The instinct to avoid looking is understandable. If you don't run the audit, you don't have to know, and not knowing feels safer than a list of problems with your name on it. But unpriced risk doesn't disappear because it's unmeasured; it just moves to a worse moment. Every discrepancy you don't find internally is one that surfaces later, in a venue you don't control, at a price set by someone whose interests are opposed to yours.",
      "So I treat the audit as an offensive tool, not a defensive one. Running quarterly payroll audits across the operation wasn't about proving we were clean; it was about finding what routine processing is designed to miss, while the finding was still cheap to fix. That posture is what surfaced the pay-equity gap. The audit went looking for trouble on purpose, before trouble had a reason to come looking for us.",
      "But auditing exposes a deeper truth: you cannot audit against a standard that doesn't exist. The first few passes across 750-plus employees and fifteen pay groups revealed that the real problem wasn't isolated errors. It was that core workflows lived in institutional memory rather than documented controls. Execution varied by whoever performed it, and errors clustered exactly where a process depended on one person remembering. So the audit program and the controls framework had to be built together: fifteen-plus SOPs, each with a named owner, a control point, and an escalation path, placed at the error clusters the data actually surfaced.",
      "The payoff isn't just a clean record, though cutting compliance findings from 12 to 3 across FLSA, ACA, ERISA, and COBRA is the kind of thing that makes diligence boring, which is exactly what you want. The real payoff is that the function becomes auditable, teachable, and resilient. Any process can be verified against its documented standard by anyone. That's the actual definition of audit readiness: not surviving the audit, but never needing to fear one.",
    ],
  },
  {
    slug: "systems-not-events",
    title: "Systems, not events",
    dek: "A gap you fix once and never watch reopens silently. The durable work is the monitoring, not the fix.",
    readingTime: "4 min read",
    body: [
      "The satisfying part of operational work is the fix. You find the broken thing, you repair it, you close the ticket, and for a moment the number is where it should be. But a fix is an event, and events fade. The gap you closed reopens the moment the conditions that created it return, and because everyone remembers fixing it, nobody is watching it. The most dangerous problem isn't the one you never solved. It's the one you solved once and stopped monitoring.",
      "Pay equity is the clearest example. Correcting a compensation gap is a project with a start and an end; it feels like a resolution. But every subsequent merit cycle, every off-cycle adjustment, every new hire slotted against an outdated band is a chance for the gap to quietly reform. Fix it once and walk away, and you've simply reset a clock. The only way it stays solved is if closing it graduates from a project into a rhythm: monthly pay-data analysis, overtime allocation reviewed by demographic, four-fifths rule testing run before anyone external has a reason to run it.",
      "The same logic runs through the whole function. Onboarding isn't a day-one event; it's a 30-60-90 arc with pulse surveys at each gate, so disengagement shows up at day 30 instead of in the exit interview. Offboarding isn't an administrative afterthought; it's a data-generating process whose exit patterns route straight back into onboarding design. Employee relations isn't a series of individual cases handled from memory; it's a system of consistent intake and documentation, so any file pulled at random tells a complete, neutral story.",
      "This is also where I'd draw the line on automation. The repeatable scaffolding around a decision (the reconciliation, the validation, the standardized intake) should be systematized aggressively, because consistency is exactly what humans do worst under volume. But the judgment inside the system stays human: what a person is paid, how a sensitive case resolves, whether a pattern is signal or noise. Automate the process, keep the judgment. (I've built a résumé-grading side project largely to understand where that line has to sit, and the design choices that mattered were all about keeping a human accountable for the outcome.)",
      "An event asks: is it fixed? A system asks: how will I know when it breaks again? The second question is harder, less satisfying, and far more valuable, because it's the only one whose answer survives you moving on to the next thing.",
    ],
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Global privacy footnote                                            */
/* ------------------------------------------------------------------ */

export const privacyNote =
  "Details generalized and sample data used to protect confidentiality. No identifying details of actual employee-relations or legal matters are included.";
