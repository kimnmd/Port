"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  Wallet,
  UserPlus,
  HeartPulse,
  ShieldCheck,
  Handshake,
  GraduationCap,
  Building2,
  LineChart,
  Table,
  BarChart3,
  Brain,
  Users,
  Layers,
  TrendingUp,
  TrendingDown,
  Zap,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/**
 * "What I Do" — an animated services + stats section, adapted from a 21st.dev
 * About-Us layout: retheme'd to the site's Periwinkle tokens and serif display
 * font, with the copy rewritten to the operator's real HR philosophy and numbers.
 */
export default function HowIWorkPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const platforms = [
    { name: "ADP Workforce Now", icon: <Wallet className="h-5 w-5" /> },
    { name: "ADP RUN", icon: <Building2 className="h-5 w-5" /> },
    { name: "Greenhouse", icon: <UserPlus className="h-5 w-5" /> },
    { name: "Lattice", icon: <LineChart className="h-5 w-5" /> },
    { name: "Excel", icon: <Table className="h-5 w-5" /> },
    { name: "Tableau", icon: <BarChart3 className="h-5 w-5" /> },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -20]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Payroll",
      points: [
        "Payroll Operations Management",
        "Multi-State Processing",
        "Payroll Audits & Reconciliation",
        "HRIS Data Integrity",
        "Bonus & Increase Calculations",
      ],
      position: "left" as const,
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Recruiting",
      points: [
        "Full-Cycle Recruiting",
        "Talent Acquisition Strategy",
        "Workforce Planning",
        "Onboarding Programs",
      ],
      position: "left" as const,
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Benefits",
      points: [
        "Benefits Administration",
        "Open Enrollment Leadership",
        "Leave Management (FMLA/ADA)",
        "401(k) Administration",
      ],
      position: "left" as const,
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Compliance",
      points: [
        "Employment Law Compliance",
        "Policy Development",
        "Audit Readiness",
        "Risk Mitigation",
      ],
      position: "right" as const,
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Employee Relations",
      points: [
        "Workplace Investigations",
        "Conflict Resolution",
        "Manager Coaching",
        "Performance Management",
      ],
      position: "right" as const,
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Employee Development",
      points: [
        "30-60-90 Day Plans",
        "Training Program Design",
        "Leadership Development",
        "Career Pathing",
      ],
      position: "right" as const,
    },
  ];

  const stats: {
    icon: ReactNode;
    label: string;
    value?: number;
    suffix?: string;
    text?: string;
  }[] = [
    { icon: <Users />, value: 750, label: "Employees supported", suffix: "+" },
    { icon: <Wallet />, value: 150, label: "Payrolls processed", suffix: "+" },
    { icon: <TrendingDown />, text: "32 → 17%", label: "Turnover cut over five years" },
    { icon: <ShieldCheck />, text: "Quarterly", label: "Payroll audits conducted" },
    { icon: <UserPlus />, value: 21, label: "Average days to fill a role", suffix: "" },
    { icon: <GraduationCap />, value: 5, label: "Training sessions held annually", suffix: "" },
    { icon: <Layers />, value: 3, label: "HRIS platforms integrated", suffix: "" },
    { icon: <TrendingUp />, value: 42, label: "Employee satisfaction, up from 19%", suffix: "%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-4 py-24 text-fg"
      style={{ background: "linear-gradient(to bottom, var(--bg-soft), var(--bg))" }}
    >
      {/* Decorative background elements */}
      <motion.div
        className="pointer-events-none absolute left-10 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 right-10 h-80 w-80 rounded-full bg-accent/[0.07] blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
        aria-hidden="true"
      />
      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute left-1/4 top-1/2 h-4 w-4 rounded-full bg-accent/30"
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute bottom-1/3 right-1/4 h-6 w-6 rounded-full bg-accent/20"
            animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
          />
        </>
      )}

      <motion.div
        className="container relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="mb-6 flex flex-col items-center" variants={itemVariants}>
          <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Zap className="h-4 w-4" />
            What I Do
          </span>
          <h1 className="text-balance text-center font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            The full HR function, end to end.
          </h1>
          <motion.div
            className="mt-5 h-1 rounded-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.div>

        <motion.p
          className="mx-auto mb-16 max-w-2xl text-center text-[17px] leading-relaxed text-fg-soft"
          variants={itemVariants}
        >
          I&rsquo;m an HR leader who runs the full function, not a slice of it. Across payroll,
          recruiting, benefits, compliance, employee relations, and development, I treat each area as
          a system built to hold up, pairing regulator-grade rigor with judgment that stays human.
        </motion.p>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left column */}
          <div className="space-y-14">
            {services
              .filter((s) => s.position === "left")
              .map((s, i) => (
                <ServiceItem key={`left-${i}`} {...s} variants={itemVariants} direction="left" />
              ))}
          </div>

          {/* Center visual */}
          <div className="order-first mb-8 flex items-center justify-center md:order-none md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              {/* Flip card: front = prompt, back = the platform stack */}
              <div className="relative aspect-[4/5] w-full" style={{ perspective: "1200px" }}>
                <button
                  type="button"
                  onClick={() => setFlipped((f) => !f)}
                  aria-pressed={flipped}
                  aria-label={flipped ? "Flip back" : "Flip to see the platforms I use"}
                  className="relative h-full w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                    transform: flipped ? "rotateY(180deg)" : "none",
                  }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center text-white"
                    style={{ background: "linear-gradient(155deg, #4c63d6 0%, #1e2450 100%)", backfaceVisibility: "hidden" }}
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                      <Brain className="h-7 w-7" />
                    </span>
                    <p className="font-display text-lg font-semibold text-white">Platforms I use</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                      <Brain className="h-3.5 w-3.5" /> Click to reveal
                    </span>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 flex flex-col rounded-2xl border border-hair bg-canvas p-4"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      The platforms I work in
                    </p>
                    <div className="grid flex-1 grid-cols-2 gap-2.5">
                      {platforms.map((p) => (
                        <div
                          key={p.name}
                          className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-hair bg-soft p-2"
                        >
                          <span className="text-accent">{p.icon}</span>
                          <span className="text-center text-xs font-semibold leading-tight text-fg">
                            {p.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              </div>
              {/* Frame */}
              <motion.div
                className="absolute inset-0 -z-10 -m-3 rounded-2xl border-4 border-accent/40"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -right-8 -top-4 h-16 w-16 rounded-full bg-accent/10"
                style={{ y: y1 }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -bottom-6 -left-8 h-20 w-20 rounded-full bg-accent/[0.08]"
                style={{ y: y2 }}
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-14">
            {services
              .filter((s) => s.position === "right")
              .map((s, i) => (
                <ServiceItem key={`right-${i}`} {...s} variants={itemVariants} direction="right" />
              ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-hair bg-canvas p-6 text-center"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {stat.icon}
              </div>
              <div className="font-display text-3xl font-semibold tracking-tight text-fg">
                {stat.text ? stat.text : <Counter to={stat.value ?? 0} suffix={stat.suffix} />}
              </div>
              <p className="mt-1.5 text-sm leading-snug text-fg-soft">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Service item ---------------- */

function ServiceItem({
  icon,
  title,
  points,
  variants,
  direction,
}: {
  icon: ReactNode;
  title: string;
  points: string[];
  variants: Variants;
  direction: "left" | "right";
}) {
  const isRight = direction === "right";
  return (
    <motion.div variants={variants} className="group">
      <div className={`flex items-center gap-3 ${isRight ? "md:flex-row-reverse" : ""}`}>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </span>
        <h3 className="font-display text-lg font-semibold text-fg">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2">
        {points.map((pt) => (
          <li
            key={pt}
            className={`flex items-center gap-2.5 text-[15px] text-fg-soft ${isRight ? "md:flex-row-reverse" : ""}`}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ---------------- Count-up number ---------------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    let raf = 0;
    let startTs = 0;
    const dur = 1400;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
