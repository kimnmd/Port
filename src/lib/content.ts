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
  // TODO: replace with your real LinkedIn URL before deploying.
  linkedin: "https://www.linkedin.com/in/your-handle",
  resumeFile: "/resume-placeholder.pdf",
  tagline:
    "HR run as systems, not events. People judgment paired with technical execution.",
  metaDescription:
    "Alex Dojun Kim, PHR. An HR operations leader who finds systemic problems, quantifies them with regulator-grade methodology, and builds the controls and monitoring that keep them solved. Compensation, recruiting, employee relations, audits, and lifecycle.",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "How I Think", href: "/thinking" },
  { label: "About", href: "/about" },
];

/* ------------------------------------------------------------------ */
/*  Homepage                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  kicker: "HR leader who builds",
  statement:
    "I find the systemic problems nobody assigned me: a 32% pay-equity gap, an 8-hour onboarding day, a 34% turnover rate. Then I quantify them with regulator-grade rigor and build the monitoring that keeps them solved. It's HR run as systems, not events.",
  primaryCta: { label: "Get in touch", href: "/about" },
  secondaryCta: { label: "How I think", href: "/thinking" },
};

export const metrics: Metric[] = [
  {
    count: 32,
    suffix: "%",
    label: "compa-ratio pay-equity gap identified and remediated via a funded 3-year plan",
  },
  {
    display: "31 → 12%",
    label: "voluntary turnover cut by a density-first talent recovery",
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
    title: "The anomaly is the assignment",
    body: "The job description says process what's approved. I decided the figures that wouldn't reconcile were the real work, and went looking for the systemic problems no one assigned me.",
  },
  {
    title: "Run the audit on yourself first",
    body: "Every discrepancy you find internally is one a regulator, plaintiff's attorney, or acquirer doesn't find later. I'd rather surface it, quantify it, and price it than carry unpriced risk.",
  },
  {
    title: "Build the monitoring, not just the fix",
    body: "A gap fixed once and never watched reopens silently. I build the standing rhythm that keeps the problem solved after the project ends: monthly testing, documented controls, pulse data.",
  },
];

/* ------------------------------------------------------------------ */
/*  Case Studies — restructured by HR practice area                   */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    slug: "compensation-pay-equity",
    order: 1,
    featured: true,
    eyebrow: "Compensation",
    title: "The Audit Nobody Asked For",
    summary:
      "Running quarterly payroll audits, I kept finding pay that wouldn't reconcile. I built the analysis that quantified a 32% equity gap, then the monthly monitoring that keeps it closed.",
    tags: ["Pay Equity", "Compensation Analytics", "Total Rewards", "Adverse-Impact Testing"],
    problem:
      "Pay inequity is a compounding liability. Every merit cycle built on an inequitable base widens the gap and raises the cost of the eventual correction, and it grows the legal exposure, since California's Equal Pay Act puts the burden of justification on the employer. The most dangerous version of the problem is the one nobody has quantified; the second most dangerous is the one that got fixed once and never monitored again. While running quarterly payroll audits, I kept seeing compensation figures that wouldn't reconcile against role, tenure, or performance.",
    call:
      "A payroll administrator's job description says to process what's approved. I decided the anomalies were the job. Rather than let the discrepancies pass, I built a full compensation analysis to find out whether they were noise or structure.",
    built: [
      "Benchmarked internal pay against market data and calculated compa-ratios by role and tenure band, isolating pay decisions with no defensible business rationale. The analysis surfaced a 32% compensation equity gap.",
      "Framed the finding as a fundable business case on three pillars: quantified Equal Pay Act exposure, retention risk (below-market employees are the ones recruiters call first), and a three-year phased remediation sequenced through existing merit cycles, inside budget guardrails leadership could actually commit to.",
      "Built equity monitoring into a standing monthly rhythm: pay-data analysis of representation ratios by department, overtime-allocation analysis by demographic, and four-fifths (80%) rule testing, the same statistical screen regulators and plaintiffs' attorneys apply.",
      "Anchored the analytics on full-stack compensation operations: end-to-end payroll across 15 pay groups, monthly stock-option administration in partnership with Morgan Stanley, annual bonus payroll for 750+, and open-enrollment leadership across the total-rewards stack (medical, dental, vision, 401(k), Roth) with 100% election completion.",
    ],
    changed:
      "The 32% gap moved from invisible to quantified, funded, and on a glide path to closure, and the monthly monitoring means new gaps now surface within thirty days instead of at the next lawsuit. It's initiative backed by regulator-grade methodology: find the systemic problem no one assigned, quantify it, convert it into funded executive action, and build the rhythm that keeps it solved.",
    results: [
      { stat: "32%", label: "compa-ratio equity gap identified and remediated via a funded 3-year plan" },
      { stat: "Monthly", label: "adverse-impact monitoring with four-fifths rule testing" },
      { stat: "95%", label: "payroll accuracy across all compensation programs" },
    ],
    tools: ["Compa-ratio analysis", "Market benchmarking", "Four-fifths rule testing", "Morgan Stanley (equity admin)", "Excel"],
    note:
      "This gap surfaced during routine quarterly payroll audits, which find exactly what routine processing is designed to miss.",
    visualCaption: "Equity glide-path chart (fabricated sample data)",
  },
  {
    slug: "recruiting-onboarding-pipeline",
    order: 2,
    featured: true,
    eyebrow: "Recruiting",
    title: "Nine Hires a Month, Three Hours to Productive",
    summary:
      "Requisitions were filling; the pipeline broke at the seam between recruiting and operations. I re-engineered day one from 8 hours to 3, with zero compliance gaps and perfect payroll starts.",
    tags: ["Talent Acquisition", "Onboarding Operations", "New-Hire Compliance", "HRIS"],
    problem:
      "Recruiting doesn't end at the signed offer. It ends when the new hire is productive, paid correctly, and convinced they made the right choice. A pipeline moving nine hires a month has no slack for a broken handoff. The bottleneck wasn't sourcing; requisitions were filling. It was the seam between recruiting and operations. Day one was an 8-hour administrative marathon (I-9, E-Verify, California new-hire reporting, HRIS record creation, direct deposit, tax withholding, benefits deductions), all run sequentially, manually, and differently depending on who ran it. The candidate experience the ATS had carefully built collapsed at the finish line.",
    call:
      "I decided onboarding was a recruiting deliverable, not a back-office afterthought, and that day one should prove the company had its act together rather than undercut the offer the candidate had just accepted.",
    built: [
      "Re-engineered the day-one workflow end to end, cutting administrative time from 8 hours to 3 while keeping every compliance checkpoint intact: I-9, E-Verify, and California new-hire reporting on time, every hire.",
      "Made payroll setup a recruiting deliverable, with direct deposit, withholding, and deductions configured and verified before the first payroll run, achieving 100% day-one payroll accuracy. (In an earlier role I ran this same standard as sole administrator across 40+ hires.)",
      "Connected the funnel to the first 90 days, handing the pipeline directly into the structured 30-60-90 ramp so the investment in attracting each candidate wasn't abandoned the moment they signed.",
    ],
    changed:
      "The pipeline now reliably absorbs about 108 hires a year with a 3-hour day one, perfect payroll starts, and full new-hire reporting compliance, feeding a structured 30-60-90 ramp that turns new hires into contributors instead of early churn. Recruiting spend stopped leaking out the back of the funnel. I treat recruiting as a pipeline that ends at productivity, not at the offer letter.",
    results: [
      { stat: "~108/yr", label: "hires processed through a 3-hour day one" },
      { stat: "8 → 3 hrs", label: "onboarding cycle time, down 62%" },
      { stat: "100%", label: "day-one payroll accuracy, zero new-hire reporting gaps" },
    ],
    tools: ["Greenhouse (ATS)", "ADP Workforce Now (HRIS)", "I-9 / E-Verify", "CA new-hire reporting", "30-60-90 ramp"],
    related: [{ slug: "purpose-or-paycheck", label: "What actually retains this workforce" }],
    visualCaption: "Onboarding hours 8 to 3 chart (fabricated sample data)",
  },
  {
    slug: "employee-relations-system",
    order: 3,
    featured: true,
    eyebrow: "Employee Relations",
    title: "Twenty-Five Cases a Month, Run as a Defensible System",
    summary:
      "At 25+ ER cases a month with about 10 subpoena responses layered on, there's no room for improvisation. I run employee relations as a system, with consistent intake, documentation, and dual-framework compliance, and a sustained zero-violation record.",
    tags: ["Employee Relations", "Workplace Investigations", "Legal Response", "Compliance"],
    problem:
      "Employee relations is where HR's credibility is won or lost. Handle a case well and employees learn the system can be trusted; handle it badly and every future complaint goes to a lawyer instead of to HR. At 25+ cases a month, with roughly 10 monthly subpoena cases layered on top, volume breaks informal approaches. Cases handled from memory produce inconsistent outcomes, and inconsistent outcomes produce discrimination claims. Every case file is a potential exhibit, and California's employee-protection framework is among the least forgiving in the country.",
    call:
      "I decided the only way to run 25+ concurrent cases defensibly was to run them as a system, with consistent intake, consistent documentation, and consistent standards for resolution, so that any file pulled at random tells a complete and neutral story.",
    built: [
      "Managed a caseload of 25+ monthly matters as primary HR contact for 750+ employees, with documentation standards built for the possibility that any file could one day be read by opposing counsel.",
      "Coordinated about 10 subpoena cases monthly, producing timely, complete, and compliant records, where HR administration meets litigation support and sloppy record-keeping becomes an organizational liability.",
      "Resolved every case against both federal law and California's stricter standards (wage-and-hour, leave protections, anti-retaliation), applying whichever framework protects the employee more.",
      "Standardized incident-reporting SOPs so cases enter the system uniformly rather than depending on who received the complaint.",
    ],
    changed:
      "A caseload of 25+ monthly matters and about 10 monthly subpoena responses, all resolved on time and in compliance, sustained alongside compliance findings across FLSA, ACA, ERISA, and COBRA that fell from 12 to 3. Employee relations operates as a trusted, defensible function, not a liability generator. I carry a heavy, legally sensitive caseload with the documentation discipline of someone who assumes every file will be read in a deposition, because at roughly 10 subpoenas a month, some of them will be.",
    results: [
      { stat: "25+/mo", label: "ER cases managed intake to resolution" },
      { stat: "~10/mo", label: "subpoena responses coordinated, compliant and on time" },
      { stat: "Zero", label: "compliance violations sustained (federal and California)" },
    ],
    tools: ["Workplace investigations", "Subpoena / records production", "Incident-reporting SOPs", "Dual-framework compliance"],
    note:
      "Cases enter the system through standardized incident-reporting controls, giving uniform intake instead of ad-hoc handling.",
    visualCaption: "Monthly caseload composition, 25 cases and ~10 subpoenas (sample data)",
  },
  {
    slug: "raising-talent",
    order: 4,
    featured: true,
    eyebrow: "Talent Strategy",
    title: "Raising Talent, Not Headcount",
    summary:
      "A competitor poached 145 people and a contagion wave took 52 more, a 27% loss. Mass rehiring refilled the org chart to 97% but diluted capability until veterans spent their days training. The fix wasn't more hiring, it was raising the talent already there. Voluntary turnover fell from 31% to 12%.",
    tags: ["Talent Strategy", "Retention", "Workforce Planning", "Performance Systems"],
    problem:
      "The company started with 725 employees. A competitor's targeted poaching campaign took 145 of them, one in five, and that first wave triggered a second. 52 more left in its wake, 197 departures in total, a 27% loss that dropped headcount to 528. The second wave is the important one, because the first wave caused it. Each exit signaled that outside options existed and were being taken, removed colleagues who made the work sustainable, and dumped their workload onto everyone left, a measured contagion multiplier of about 0.36. Sales stagnated as institutional knowledge walked out, morale dropped, and a workforce carrying the load of 725 with the hands of 528 began to burn out, threatening a third wave.",
    call:
      "Facing an accelerating spiral, HR first did the instinctive thing and mass-rehired: three agencies, every HR hand redirected to hiring, headcount rebuilt to 703. It hit the number the company could see while quietly degrading the one that mattered. So I made the call to reverse the direction of investment: stop chasing headcount and start raising the talent already in the building.",
    built: [
      "Defined KPIs so every role had a visible standard, because without defined expectations neither underperformance nor excellence is observable, and neither can be acted on.",
      "Turned training from an ad-hoc burden absorbed by veterans into a heavily enforced, structured program with accountability for completion.",
      "Invested in team events to rebuild the social fabric the poaching wave had torn, which the contagion had shown was a retention asset in its own right.",
      "Differentiated rewards for top-performing managers and employees, making excellence visibly worth more than adequacy and signaling to the strongest performers, the ones most vulnerable to poaching, that staying pays.",
      "Applied consistent discipline for those refusing to perform, closing the credibility loop: standards rewarded at the top but unenforced at the bottom aren't standards.",
      "Expanded benefits and wellbeing, notably more vacation and an Employee Assistance Program, to repair the burnout the crisis produced, because performance standards can't fix exhaustion.",
    ],
    changed:
      "Annualized voluntary turnover fell from 31% at the height of the crisis to 12% after the pivot, a 19-point drop, more than sixty percent in relative terms, landing below typical market rates. A company losing nearly one in three people a year by choice began keeping almost nine in ten. And it did this without returning to mass external hiring. It stopped the bleeding not by out-recruiting its poacher, but by making itself harder to poach from.",
    results: [
      { stat: "31 → 12%", label: "voluntary turnover, cut by more than sixty percent" },
      { stat: "97%", label: "headcount refilled by mass hiring, yet capability kept falling" },
      { stat: "0.36", label: "contagion multiplier: each poached exit spurred a third of another" },
    ],
    tools: ["KPI design", "Structured training", "Differentiated rewards", "EAP & benefits design"],
    note:
      "This case extends the Purpose or Paycheck study: the same visible, credible investment that doubled satisfaction is what kept people from walking out the door.",
    pullQuote: {
      text: "Headcount is not capability. We rebuilt 97% of the org chart and kept bleeding.",
      attribution: "The central lesson",
    },
    related: [
      { slug: "purpose-or-paycheck", label: "The study this case extends" },
      { slug: "recruiting-onboarding-pipeline", label: "Hiring done with a foundation" },
    ],
    visualCaption: "Headcount cascade: 725 to 528 to 703 (sample data)",
    report: [
      {
        heading: "The poaching cascade",
        paragraphs: [
          "The company entered the period with 725 employees. A competing firm ran a targeted poaching campaign, and 145 people, one in five, accepted offers and left. What followed wasn't independent attrition, it was a chain reaction: 52 more departed in the wake of the first wave, bringing total losses to 197, or 27% of the workforce, and dropping headcount to 528.",
          "The secondary wave is the analytically important one, because the competitor's offers didn't cause it. The first wave did. Departures are informative events: each exit tells the people who remain that outside opportunities exist and are being taken, removes colleagues whose presence made the work sustainable, and transfers the departed workload onto those left behind. Here, each poached employee generated roughly a third of an additional voluntary departure, a measured contagion multiplier of about 0.36. Sales stagnated, morale dropped, and the remaining workforce, now carrying the load of 725 with the hands of 528, began to burn out.",
        ],
        charts: ["departures"],
      },
      {
        heading: "The instinctive response: mass rehiring",
        paragraphs: [
          "Facing an accelerating loss spiral, HR mobilized what was, fairly, a firefighting operation. Three external agencies were engaged at once, and recruiting stopped being a specialist function: every member of the HR team was redirected to hiring. On its own terms it worked. Headcount rebuilt from 528 to 703, restoring 97% of the pre-crisis baseline.",
          "Judged as a volume operation, that was fast and effective. Judged as a talent operation, it carried a flaw that wasn't visible until later: speed had been bought at the cost of selectivity. Hiring at that pace, through three parallel pipelines, with no foundation of defined competencies, a structured selection rubric, or calibrated interviewing, meant the organization optimized the one variable it could see, headcount, while silently degrading the one that mattered, the average capability of the people it hired.",
        ],
      },
      {
        heading: "Refilled, but not rebuilt",
        paragraphs: [
          "The consequences surfaced within months. With about a quarter of the workforce newly hired and a process that hadn't filtered for readiness, the training burden overwhelmed the productive core. Veterans, the survivors of the poaching wave and already stretched, began spending the majority of their days training new hires instead of doing their own jobs. The arithmetic is unforgiving: every hour a proven performer spends training is an hour of output lost from the top of the capability distribution to subsidize the bottom of it.",
          "The financial signature followed. Rather than sales recovering as headcount recovered, the company bled from both ends: payroll climbed back toward pre-crisis levels while sales kept falling. Headcount, the metric the operation had targeted and hit, turned out to be a vanity indicator. The org chart said 703; productive capacity said far less. This is the principle the case takes as its title. Talent density, the concentration of people who can perform at standard without consuming others' capacity, is the variable that drives output, and it is entirely possible to restore headcount while destroying density.",
        ],
      },
      {
        heading: "The pivot: raising talent over increasing it",
        paragraphs: [
          "The correction reversed the direction of investment: rather than acquiring more people, develop and sustain the ones already here. The program stood on six deliberately basic elements, the foundation the crisis response had skipped. Defined KPIs gave every role a visible standard, so under- and over-performance both became observable. Enforced training turned the hidden tax on veterans into a managed program with accountability. Team events rebuilt the social fabric the poaching had torn. Differentiated rewards made excellence visibly worth more than adequacy, telling the strongest performers, the ones most exposed to the next poach, that staying pays. Consistent discipline for those refusing to work closed the credibility loop. And expanded benefits, more vacation plus an Employee Assistance Program, repaired the burnout, because performance standards can't fix exhaustion.",
          "The logic holds together in motivation-theory terms: defined KPIs create the line of sight from effort to outcome, differentiated rewards restore the equity balance high performers audit constantly, discipline makes both believable, and the wellbeing expansion repairs the hygiene floor of rest and support that sustained performance depends on. In the vocabulary of the Purpose or Paycheck study, the program raised the credibility of the motivators while easing the headwind.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "Annualized voluntary turnover fell from 31% at the height of the crisis to 12% after the pivot: a 19-point reduction, a decline of more than sixty percent in relative terms, and a landing point below typical market benchmarks. A company that had been losing nearly one in three people a year by choice began retaining almost nine in ten.",
          "The causal story deserves care. The reduction followed the full pivot, all six elements together, and the case can't isolate any single one. What it can say is that the reduction came without a return to mass external hiring and without competing on acquisition. Some of the improvement also reflects a healthier composition: committed people staying longer while uncommitted ones exit through managed rather than voluntary channels, which is the intended shape of a working performance system, not a side effect.",
        ],
        charts: ["turnover"],
      },
      {
        heading: "Three lessons",
        paragraphs: [
          "First, turnover is a network event, not an individual one. The 52-person second wave shows that each departure is also a message and a burden transferred, so retention models that treat employees as independent decision-makers underestimate crisis losses by the size of the contagion multiplier. The practical implication: a poaching event is not the moment to start retention work on the poached, it is the moment to start it on everyone else.",
          "Second, headcount is a lagging vanity metric and density is the operating variable. The company hit 97% headcount recovery while capability, sales, and morale kept declining, because unselective volume hiring converts payroll into training burden rather than output. The cost of hiring slower is visible and bounded; the cost of hiring diluted is hidden, compounding, and paid by your best people.",
          "Third, retention is bought with the same currency as motivation. The pivot that cut turnover by two-thirds is, in substance, the same intervention family that doubled satisfaction in the Purpose or Paycheck study: visible, credible, differentiated investment in the people already present. Two independent measurements, one mechanism.",
        ],
        quotes: [
          {
            text: "It stopped the bleeding not by out-recruiting its poacher, but by making itself harder to poach from.",
            attribution: "From the analysis",
          },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The case began with a company losing its people to a competitor and ends with a company that made itself the harder one to leave. In between is its contribution: the instinctive response to talent loss, replace the bodies fast, can deepen the wound it treats. Mass hiring restored the org chart and drained the organization, because output comes from the density of capability, not the count of employees, and density is exactly what unselective speed destroys.",
        ],
        quotes: [
          {
            text: "When talent walks out the door, the question is not how fast the seats can be refilled. It is whether the company the next person joins is one the last person would have stayed at.",
            attribution: "The case in one line",
          },
        ],
      },
      {
        heading: "The limits",
        paragraphs: [
          "This is a single-company retrospective without a control group, so the turnover reduction can't be cleanly apportioned among the six elements, and external conditions like the competitor's hiring appetite or a looser labor market may account for part of it. The figures are annualized voluntary rates and exclude involuntary separations, so the disciplinary program's compositional effect should be read as noted above. Sales and payroll effects are described directionally rather than in figures, and the training burden on veterans was observed rather than formally measured. A follow-up should track quality-of-hire for the mass-hired cohort, formalize the contagion analysis with exit-timing data, and test whether the reduction holds through the next external hiring cycle.",
        ],
      },
    ],
  },
  {
    slug: "purpose-or-paycheck",
    order: 5,
    featured: true,
    eyebrow: "People Research",
    title: "Purpose or Paycheck",
    summary:
      "I ran a mixed-method survey to settle whether pay or growth actually drives retention in an early-career workforce. Growth outpolled pay two to one, and motivator-side programs more than doubled satisfaction, from 19% to 42%, with no change to pay.",
    tags: ["People Research", "Retention", "Engagement", "Program Design"],
    problem:
      "Popular discourse says Gen Z is motivated differently, that they prize purpose and flexibility over pay. But this same cohort entered the workforce facing living costs that classical theory says should anchor them to their paychecks. Both claims can't be fully true, and each maps onto one of the two most-taught motivation frameworks: Maslow's sequential hierarchy, where pay and security must be met first, versus Herzberg's two-factor theory, where pay only prevents dissatisfaction while growth and recognition create commitment. Underneath the theory sat a practical problem: baseline satisfaction was low, and I needed to know which lever actually moved retention before spending budget on it.",
    call:
      "Rather than guess from a checkbox survey, I decided to run a real study and then act on it. I designed a two-phase, mixed-method investigation that deliberately separated what people say they value from what would actually make them leave, following Herzberg's own critical-incident method, and I committed to deploying and measuring interventions based on whatever the data said.",
    built: [
      "Designed and ran a two-phase study: short in-depth interviews for the reasoning in people's own words, then the identical value question extended across the wider workforce to test whether the interview themes held at scale.",
      "Separated stated value from exit trigger by design, so the analysis could tell a commitment driver apart from a dissatisfier, and read the results against both Maslow and Herzberg.",
      "Surfaced the core findings: growth and learning was the top value at 50%, outpolling pay two to one even under real cost-of-living pressure, and early-career workers framed growth as deferred pay, the most reliable route to future income.",
      "Deployed three motivator-side interventions from the findings: company-financed open courses, a tenure-gated education-reimbursement program for certifications and coursework (with retention terms so the benefit didn't subsidize the competition), and four employee resource groups.",
      "Measured everything with pre and post pulse surveys, and stated the limits plainly: a single-company pilot without a control group.",
    ],
    changed:
      "Satisfaction rose because the programs gave people exactly what they said they valued most: room to grow and learn. After the education-reimbursement benefit and the other growth-oriented offers launched, satisfaction more than doubled, from 19% to 42% in a single cycle, with no raise and no management overhaul. The credible, advancement-linked education benefit converted at 8%, double the generic course's 4%, exactly as the findings predicted: growth offers convert in proportion to how credibly they turn into earning power. Most tellingly, the gain reached far beyond the few who enrolled, which is the study's central insight: a funded, credible growth pathway signals to the entire workforce that the company invests in its people. Retention isn't bought with perks; it's earned by making that investment legible.",
    results: [
      { stat: "19 → 42%", label: "satisfaction more than doubled after the growth-and-learning programs, with no raise" },
      { stat: "2 : 1", label: "growth and learning outpolled pay as the most-valued factor" },
      { stat: "4 → 8%", label: "program enrollment doubled when the growth offer became credible" },
    ],
    tools: ["In-depth interviews", "Pulse surveys", "Herzberg & Maslow analysis", "Education-benefit & ERG design"],
    note:
      "A single-company pilot study. Quotes are paraphrased to protect anonymity, and no identifying respondent details are included. Chart values use sample data.",
    pullQuote: {
      text: "Stronger skills translate into higher earnings, so I don't prioritize pay today. I know it will rise as I keep building myself.",
      attribution: "Respondent E, paraphrased",
    },
    related: [
      { slug: "compensation-pay-equity", label: "Pay as a signal, not just a number" },
      { slug: "recruiting-onboarding-pipeline", label: "Where the workforce journey begins" },
    ],
    visualCaption: "Value distribution, satisfaction, and enrollment (sample data)",
    report: [
      {
        heading: "The question",
        paragraphs: [
          "Popular discourse says this generation is motivated differently, that it prizes purpose and flexibility over pay. Yet the same cohort entered the workforce under historically high living costs, which classical theory says should anchor people to their paychecks. Both claims can't be fully true, and each maps onto one of the two most-taught motivation frameworks in HR.",
          "Maslow's hierarchy holds that needs are sequential: pay that covers living and stable employment has to be reasonably met before belonging, esteem, and growth can motivate. Herzberg's two-factor theory holds the opposite structure. Hygiene factors like pay and working conditions can only prevent dissatisfaction, while only motivators like achievement, recognition, and growth create real commitment.",
          "So the question was direct. Does an early-career workforce follow Maslow's sequence, where pay and security must be satisfied before culture and purpose can drive retention, or Herzberg's two factors, where pay only prevents departure while growth, recognition, and relationships drive commitment?",
        ],
      },
      {
        heading: "How the study worked",
        paragraphs: [
          "The study ran in two phases. First, employees across a range of roles sat for short in-depth interviews, built around three questions: which of five factors they value most (pay, benefits, a good manager and coworkers, growth and learning, or flexibility), why, and which factor, if it worsened, would most likely make them leave. Then the identical value question went out to the wider workforce to test whether the interview themes held at scale.",
          "The design deliberately separated what people say they value from what would actually make them leave, following Herzberg's own critical-incident method. That separation earned its keep: in several cases the open-ended 'why' reversed the apparent meaning of the checkbox answer.",
        ],
      },
      {
        heading: "What people value",
        paragraphs: [
          "Growth and learning was the most-chosen value at 50%, well ahead of pay at 25%, manager and coworker quality at 12%, flexibility at 10%, and benefits at just 3%, as the ring above shows. There is a classification wrinkle that matters to the verdict. Under a strict Herzberg reading, relationships are a hygiene factor, which puts the pure-motivator share at 50%, growth alone. But interviewees who chose manager and coworker quality framed it as a growth channel, a source of learning and a condition for growing together, which lifts the motivator-leaning share to 62%. Either way, growth alone outpolls pay two to one, even in a workforce under real cost-of-living pressure.",
        ],
      },
      {
        heading: "Value and exit are different ladders",
        paragraphs: [
          "The clearest two-factor pattern came from one of the more tenured respondents. Asked what they value most, they described continuous learning and mastery, growth in order to contribute and to be a better person for their family. Asked what would make them leave, they answered in a single line.",
          "Value and exit lived on different ladders. Growth drove commitment, while a broken working relationship, a hygiene factor, was the exit trigger. Another respondent showed the same shape with growth itself: content on every other factor, they said they would still start looking if their opportunities to grow dried up, a motivator working exactly as the commitment anchor Herzberg predicts.",
        ],
        quotes: [
          {
            text: "If the working relationships are strained, nothing else can function.",
            attribution: "Respondent B, paraphrased",
          },
        ],
      },
      {
        heading: "Growth as deferred pay",
        paragraphs: [
          "The most important response came from an early-career employee who chose growth and learning, but whose reasoning reclassified the answer. They were absorbing as much as they could now, confident that stronger skills would translate into higher earnings later, so pay simply wasn't the priority today.",
          "On paper that is a motivator answer. Underneath, it is a compensation strategy on a delay: growth chosen as the most reliable route to future pay. A checkbox survey would have coded this person as purpose-driven and been wrong. For early-career workers the two ladders are joined at the top, because skill-building is how they negotiate future earnings.",
        ],
      },
      {
        heading: "The environment can switch motivation off",
        paragraphs: [
          "Two people, answering independently, described not what motivates them but what happened to motivation they used to have.",
          "Chronic operational chaos, a failed hygiene environment, had extinguished a growth orientation the employee walked in with. A second respondent named the result: when neither pay nor management credibility holds, people retreat to the one thing the job still reliably transacts in. This reframes the study's pay-first answers. At least some of them are not pay-motivated people, they are demotivated people expressing it as pay. The choice of pay can be a symptom rather than a preference.",
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
        heading: "The interventions",
        paragraphs: [
          "The findings pointed at the motivator side, so that is where I acted, with three programs. First, company-financed open courses, free and voluntary, with a light steer toward role-relevant skills. Second, an education-reimbursement benefit for employees past one year of tenure: professional certifications and coursework at recognized institutions, at company expense, with retention terms attached so the benefit wouldn't simply subsidize the competition. Third, an employee resource group program, targeting the belonging and peer-learning channel that a quarter of interviewees ranked highly.",
          "The retention terms on the education benefit weren't incidental. They came straight from the study: in a workforce that pursues growth partly as a route to market value, an education benefit with no strings subsidizes whoever hires your people next.",
        ],
      },
      {
        heading: "The results",
        paragraphs: [
          "The open courses drew about 4% of the workforce, right at the documented industry baseline for voluntary learning benefits. The education-reimbursement program drew about 8%, double the open-course rate, even though it was harder to qualify for and carried binding conditions. Higher barriers, double the uptake. The variable that changed wasn't generosity, it was credibility and portability: a recognized certification within your job scope carries visible market value, which is exactly the kind of growth the early-career respondents said they wanted.",
          "Then the pulse surveys. Satisfaction rose from 19% to 42% in a single cycle, more than doubling, with no change to pay. The baseline is a finding in itself: fewer than one in five people reported satisfaction beforehand, which matches the interviews describing motivation that was actively suppressed. The rise is dramatic for one cycle, and it reached far beyond the few who actually enrolled, which is the study's most useful insight for practice. A funded, credible growth pathway signals to the entire workforce that the company invests in its people, and the message lands more widely than the programs are used.",
        ],
        charts: ["enrollment", "satisfaction"],
      },
      {
        heading: "What it means",
        paragraphs: [
          "Set against the two theories, the evidence downgrades Maslow from a gate to a gradient. Pay inadequacy didn't lock motivation out, it taxed it: a quarter of the workforce answered pay-first, the most distressed people collapsed into transactional postures, and the non-credible course offer converted at only 4%. But motivators that credibly compounded into future income cleared the bar anyway. Herzberg's two-factor structure holds in outline, with one amendment: for this workforce the dominant motivator drew its force precisely from its link to future pay, so the two ladders are interwoven rather than separate.",
          "And both theories are quiet on the mechanism the data insists on most. Compensation and benefits operate as a language, a continuous signal of whether the relationship is mutual investment or extraction, and a workforce reads that signal collectively, well beyond the people who use any given program. Stated in one line: loyalty here hasn't disappeared, it has been repriced. It isn't payable in tenure and gratitude, and it isn't purchasable with perks. It is exchanged for credible investment in the employee's own trajectory.",
        ],
      },
      {
        heading: "The limits",
        paragraphs: [
          "The claims are bounded, and worth stating plainly. This is a single-company pilot without a control group, so the satisfaction gain can't be cleanly attributed to any one intervention or separated from other concurrent changes. The two education programs differed in eligibility and structure as well as credibility, so their comparison is suggestive rather than proof. Satisfaction is a leading indicator, not retention, and enrollment measures uptake, not completion. The honest summary is that the work moved the workforce from severely distressed to genuinely mixed, a strong trajectory rather than a finished repair, which is exactly why the follow-up round matters.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

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
/*  About / Contact                                                    */
/* ------------------------------------------------------------------ */

export const about = {
  bio: [
    "I'm an HR operations leader (PHR) who works at the intersection of people judgment and technical execution. As primary HR contact for a 750+ employee population across 15 pay groups and 5 departments, my scope spans compensation analytics and total rewards, high-volume recruiting and onboarding, employee relations and legal response, HR audit and internal controls, and full-lifecycle employee development.",
    "What ties the work together is a habit of looking where no one else is looking, then building the system that answers the question: the compensation analysis that quantified a 32% equity gap, the density-first recovery that cut voluntary turnover from 31% to 12%, the survey that showed growth-focused programs more than doubled employee satisfaction. I work bilingually in English and Korean, and I run HR as systems, not events, with the documentation discipline of someone who assumes every file will one day be read in a deposition.",
  ],
  influenceStory: {
    heading: "An influence story",
    body: "In a service-award program, I caught a service-date calculation error that would have quietly given people the wrong recognition. Finding it was rigor; getting it fixed was influence. I raised it, made the case, and got the correction formally approved, even though it meant challenging a process people assumed was already correct. I'd rather be the person who pushes back and gets it right than the one who stays quiet and lets it ship.",
  },
  contact: {
    heading: "Let's talk",
    body: "The best way to reach me is by email. I'm happy to talk through any of the work here in more detail, with the confidential specifics filled in where appropriate.",
  },
};

/* ------------------------------------------------------------------ */
/*  Global privacy footnote                                            */
/* ------------------------------------------------------------------ */

export const privacyNote =
  "Details generalized and sample data used to protect confidentiality. No identifying details of actual employee-relations or legal matters are included.";
