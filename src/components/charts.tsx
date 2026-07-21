"use client";

/**
 * charts.tsx — interactive, theme-aware report figures for the case-study slots.
 *
 * Pure inline SVG (no chart library). Marks use the site's accent via CSS
 * variables so they follow light/dark. Every value is direct-labeled, and every
 * mark is interactive: hover (or tap) highlights it and shows a tooltip.
 *
 * PRIVACY: endpoints are the operator's real outcomes; intermediate points and
 * shapes are illustrative. Each figure carries a "sample data" tag.
 */

import { useState, type ReactNode } from "react";

const VB_W = 640;
const VB_H = 360;

function Figure({
  title,
  children,
  height = VB_H,
}: {
  title: string;
  children: ReactNode;
  height?: number;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-hair bg-soft">
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pt-4">
        <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-faint">
          {title}
        </figcaption>
        <span className="shrink-0 rounded-full border border-hair bg-canvas px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-fg-faint">
          Illustrative · sample data
        </span>
      </div>
      <div className="px-2 pb-3 pt-1">
        <svg
          viewBox={`0 0 ${VB_W} ${height}`}
          className="h-auto w-full"
          role="img"
          preserveAspectRatio="xMidYMid meet"
        >
          {children}
        </svg>
      </div>
    </figure>
  );
}

/** In-SVG tooltip: a dark chip (uses --fg as fill, --bg as text for contrast). */
function SvgTooltip({ x, y, title, value }: { x: number; y: number; title: string; value: string }) {
  const label = `${value}   ${title}`;
  const w = label.length * 7.1 + 22;
  const h = 30;
  const tx = Math.min(Math.max(x - w / 2, 6), VB_W - w - 6);
  const ty = Math.max(y - h - 12, 6);
  return (
    <g pointerEvents="none" style={{ transition: "opacity 120ms" }}>
      <rect x={tx} y={ty} width={w} height={h} rx={8} fill="var(--fg)" />
      <text x={tx + 12} y={ty + 20} fontSize={13} fill="var(--bg)">
        <tspan fontWeight={700}>{value}</tspan>
        <tspan dx="8" fillOpacity={0.75}>{title}</tspan>
      </text>
    </g>
  );
}

type Tip = { x: number; y: number; title: string; value: string } | null;

/* ---- Before/after bars (interactive) ---------------------------- */

function BeforeAfter({
  title,
  before,
  after,
  unit,
  deltaLabel,
  beforeLabel,
  afterLabel,
}: {
  title: string;
  before: number;
  after: number;
  unit: string;
  deltaLabel: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const pad = { l: 24, r: 24, t: 40, b: 46 };
  const h = VB_H - pad.t - pad.b;
  const maxY = Math.max(before, after);
  const barW = 150;
  const gap = 150;
  const groupW = barW * 2 + gap;
  const startX = (VB_W - groupW) / 2;
  const bx = [startX, startX + barW + gap];
  const baseY = pad.t + h;
  const bh = (v: number) => (h * v) / maxY;
  const [tip, setTip] = useState<Tip>(null);

  const bars = [
    { i: 0, v: before, label: beforeLabel, fill: "var(--fg-faint)", op: 0.35, accent: false },
    { i: 1, v: after, label: afterLabel, fill: "var(--accent)", op: 1, accent: true },
  ];

  return (
    <Figure title={title}>
      <line x1={pad.l} y1={baseY} x2={VB_W - pad.r} y2={baseY} stroke="var(--border)" strokeWidth={1.5} />
      {bars.map((b) => {
        const hovered = tip?.title === b.label;
        return (
          <g key={b.i}>
            <rect
              x={bx[b.i]}
              y={baseY - bh(b.v)}
              width={barW}
              height={bh(b.v)}
              rx={5}
              fill={b.fill}
              opacity={hovered ? Math.min(b.op + 0.25, 1) : b.op}
              style={{ cursor: "pointer", transition: "opacity 120ms" }}
              onMouseEnter={() => setTip({ x: bx[b.i] + barW / 2, y: baseY - bh(b.v), title: b.label, value: `${b.v}${unit}` })}
              onMouseLeave={() => setTip(null)}
              onClick={() => setTip({ x: bx[b.i] + barW / 2, y: baseY - bh(b.v), title: b.label, value: `${b.v}${unit}` })}
            />
            <text
              x={bx[b.i] + barW / 2}
              y={baseY - bh(b.v) - 12}
              textAnchor="middle"
              fontSize={26}
              fontWeight={700}
              fill={b.accent ? "var(--accent)" : "var(--fg)"}
            >
              {b.v}
              <tspan fontSize={15} fontWeight={600} fill={b.accent ? "var(--accent)" : "var(--fg-faint)"}>
                {unit}
              </tspan>
            </text>
            <text x={bx[b.i] + barW / 2} y={baseY + 26} textAnchor="middle" fontSize={13} fill="var(--fg-faint)">
              {b.label}
            </text>
          </g>
        );
      })}
      <rect x={VB_W / 2 - 44} y={pad.t - 16} width={88} height={26} rx={13} fill="var(--accent)" opacity={0.12} />
      <text x={VB_W / 2} y={pad.t + 2} textAnchor="middle" fontSize={14} fontWeight={700} fill="var(--accent)">
        {deltaLabel}
      </text>
      {tip && <SvgTooltip {...tip} />}
    </Figure>
  );
}

/* ---- 4a. Raising Talent: headcount cascade (line) --------------- */

export function HeadcountCascadeChart() {
  const pad = { l: 62, r: 62, t: 40, b: 44 };
  const w = VB_W - pad.l - pad.r;
  const h = VB_H - pad.t - pad.b;
  const pts = [725, 528, 703];
  const labels = ["Pre-crisis", "Trough", "After rehiring"];
  const yMin = 480;
  const yMax = 760;
  const x = (i: number) => pad.l + (w * i) / (pts.length - 1);
  const y = (v: number) => pad.t + h - (h * (v - yMin)) / (yMax - yMin);
  const line = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const [tip, setTip] = useState<Tip>(null);

  return (
    <Figure title="Headcount cascade">
      {[500, 600, 700].map((v) => (
        <g key={v}>
          <line x1={pad.l} y1={y(v)} x2={pad.l + w} y2={y(v)} stroke="var(--border)" strokeWidth={1} />
          <text x={pad.l - 10} y={y(v) + 4} textAnchor="end" fontSize={12} fill="var(--fg-faint)">
            {v}
          </text>
        </g>
      ))}
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((v, i) => (
        <circle
          key={i}
          cx={x(i)}
          cy={y(v)}
          r={tip?.title === labels[i] ? 7.5 : 5}
          fill="var(--accent)"
          style={{ cursor: "pointer", transition: "r 120ms" }}
          onMouseEnter={() => setTip({ x: x(i), y: y(v), title: labels[i], value: `${v} employees` })}
          onMouseLeave={() => setTip(null)}
          onClick={() => setTip({ x: x(i), y: y(v), title: labels[i], value: `${v} employees` })}
        />
      ))}
      {/* point 0 */}
      <text x={x(0)} y={y(725) - 14} textAnchor="middle" fontSize={16} fontWeight={700} fill="var(--fg)">
        725
      </text>
      {/* trough */}
      <text x={x(1)} y={y(528) + 26} textAnchor="middle" fontSize={16} fontWeight={700} fill="var(--fg)">
        528
      </text>
      <text x={x(1)} y={y(528) + 42} textAnchor="middle" fontSize={12} fill="var(--fg-faint)">
        197 lost (27%)
      </text>
      {/* recovery */}
      <text x={x(2)} y={y(703) - 28} textAnchor="middle" fontSize={16} fontWeight={700} fill="var(--accent)">
        703
      </text>
      <text x={x(2)} y={y(703) - 12} textAnchor="middle" fontSize={12} fill="var(--fg-faint)">
        97% refilled
      </text>
      {labels.map((l, i) => (
        <text key={l} x={x(i)} y={pad.t + h + 24} textAnchor="middle" fontSize={12} fill="var(--fg-faint)">
          {l}
        </text>
      ))}
      {tip && <SvgTooltip {...tip} />}
    </Figure>
  );
}

/* ---- 4b. Raising Talent: departures composition ----------------- */

export function DeparturesChart() {
  const pad = { l: 28, r: 28 };
  const w = VB_W - pad.l - pad.r;
  const poached = 145;
  const contagion = 52;
  const total = poached + contagion;
  const gap = 6;
  const pW = (w - gap) * (poached / total);
  const cW = (w - gap) * (contagion / total);
  const barY = 152;
  const barH = 64;
  const [tip, setTip] = useState<Tip>(null);

  const segs = [
    { x: pad.l, w: pW, op: 1, big: "145", label: "Poached", value: "145 poached" },
    { x: pad.l + pW + gap, w: cW, op: 0.42, big: "52", label: "Contagion", value: "52 contagion" },
  ];

  return (
    <Figure title="Where the 197 departures came from">
      {segs.map((s) => {
        const hovered = tip?.title === s.label;
        return (
          <g key={s.label}>
            <rect
              x={s.x}
              y={barY}
              width={s.w}
              height={barH}
              rx={6}
              fill="var(--accent)"
              opacity={hovered ? Math.min(s.op + 0.2, 1) : s.op}
              style={{ cursor: "pointer", transition: "opacity 120ms" }}
              onMouseEnter={() => setTip({ x: s.x + s.w / 2, y: barY, title: s.label, value: s.value })}
              onMouseLeave={() => setTip(null)}
              onClick={() => setTip({ x: s.x + s.w / 2, y: barY, title: s.label, value: s.value })}
            />
            <text x={s.x + s.w / 2} y={barY - 16} textAnchor="middle" fontSize={30} fontWeight={700} fill="var(--fg)">
              {s.big}
            </text>
            <text x={s.x + s.w / 2} y={barY + barH + 30} textAnchor="middle" fontSize={13} fill="var(--fg-faint)">
              {s.label}
            </text>
          </g>
        );
      })}
      <text x={VB_W / 2} y={42} textAnchor="middle" fontSize={13} fill="var(--fg-faint)">
        197 lost in total, a 27% cut that dropped the workforce from 725 to 528
      </text>
      {tip && <SvgTooltip {...tip} />}
    </Figure>
  );
}

/* ---- Donut: parts of a whole (interactive slices) --------------- */

function polar(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function donutSlice(cx: number, cy: number, R: number, r: number, startA: number, endA: number): string {
  const [x1, y1] = polar(cx, cy, R, startA);
  const [x2, y2] = polar(cx, cy, R, endA);
  const [x3, y3] = polar(cx, cy, r, endA);
  const [x4, y4] = polar(cx, cy, r, startA);
  const large = endA - startA > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${r} ${r} 0 ${large} 0 ${x4} ${y4} Z`;
}

export function ValueDonutChart() {
  const items = [
    { label: "Growth & learning", value: 50, opacity: 1 },
    { label: "Pay", value: 25, opacity: 0.72 },
    { label: "Manager / coworkers", value: 12, opacity: 0.52 },
    { label: "Flexibility", value: 10, opacity: 0.38 },
    { label: "Benefits", value: 3, opacity: 0.24 },
  ];
  const cx = 178;
  const cy = 186;
  const R = 132;
  const r = 82;
  let acc = 0;
  const slices = items.map((it) => {
    const start = (acc / 100) * 360;
    acc += it.value;
    const end = (acc / 100) * 360;
    return { ...it, start, end };
  });
  const [hover, setHover] = useState<number | null>(null);

  const legendX = 348;
  const legendY0 = 96;
  const step = 44;

  const hv = hover === null ? null : slices[hover];
  const hvMid = hv ? (hv.start + hv.end) / 2 : 0;
  const [tipX, tipY] = hv ? polar(cx, cy, R, hvMid) : [0, 0];

  return (
    <Figure title="What employees value most">
      {slices.map((s, i) => {
        const isH = hover === i;
        const mid = (s.start + s.end) / 2;
        const [ox, oy] = polar(0, 0, 7, mid);
        const op = hover === null ? s.opacity : isH ? Math.max(s.opacity, 0.95) : s.opacity * 0.5;
        return (
          <path
            key={s.label}
            d={donutSlice(cx, cy, R, r, s.start, s.end)}
            fill="var(--accent)"
            opacity={op}
            stroke="var(--bg-soft)"
            strokeWidth={3}
            transform={isH ? `translate(${ox} ${oy})` : undefined}
            style={{ cursor: "pointer", transition: "opacity 150ms, transform 150ms" }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setHover(i)}
          />
        );
      })}

      {/* center headline (reflects hovered slice) */}
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize={44} fontWeight={700} fill="var(--accent)">
        {hv ? `${hv.value}%` : "50%"}
      </text>
      <text x={cx} y={cy + 24} textAnchor="middle" fontSize={12.5} fill="var(--fg-faint)">
        {hv ? "of respondents" : "chose growth"}
      </text>

      {/* legend (hover-linked) */}
      {slices.map((s, i) => {
        const y = legendY0 + i * step;
        const isH = hover === i;
        return (
          <g
            key={s.label}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setHover(i)}
          >
            <rect x={legendX} y={y - 11} width={16} height={16} rx={4} fill="var(--accent)" opacity={s.opacity} />
            <text x={legendX + 26} y={y + 2} fontSize={14} fontWeight={isH ? 700 : 400} fill={isH ? "var(--fg)" : "var(--fg-soft)"}>
              {s.label}
            </text>
            <text x={VB_W - 24} y={y + 2} textAnchor="end" fontSize={14} fontWeight={700} fill="var(--fg)">
              {s.value}%
            </text>
          </g>
        );
      })}

      {hv && <SvgTooltip x={tipX} y={tipY} title={hv.label} value={`${hv.value}%`} />}
    </Figure>
  );
}

/* ---- Dumbbell: before -> after change (interactive dots) -------- */

function Dumbbell({
  title,
  before,
  after,
  unit,
  beforeLabel,
  afterLabel,
  deltaLabel,
  maxV,
}: {
  title: string;
  before: number;
  after: number;
  unit: string;
  beforeLabel: string;
  afterLabel: string;
  deltaLabel: string;
  maxV: number;
}) {
  const H = 210;
  const pad = { l: 92, r: 92 };
  const trackW = VB_W - pad.l - pad.r;
  const y = 118;
  const x = (v: number) => pad.l + (trackW * v) / maxV;
  const xb = x(before);
  const xa = x(after);
  const mid = (xb + xa) / 2;
  const [tip, setTip] = useState<Tip>(null);

  return (
    <Figure title={title} height={H}>
      <line x1={pad.l} y1={y} x2={pad.l + trackW} y2={y} stroke="var(--border)" strokeWidth={2} strokeLinecap="round" />
      <line x1={xb} y1={y} x2={xa} y2={y} stroke="var(--accent)" strokeWidth={4} strokeLinecap="round" />
      <circle
        cx={xb}
        cy={y}
        r={tip?.title === beforeLabel ? 11 : 9}
        fill="var(--bg-soft)"
        stroke="var(--fg-faint)"
        strokeWidth={3}
        style={{ cursor: "pointer", transition: "r 120ms" }}
        onMouseEnter={() => setTip({ x: xb, y, title: beforeLabel, value: `${before}${unit}` })}
        onMouseLeave={() => setTip(null)}
        onClick={() => setTip({ x: xb, y, title: beforeLabel, value: `${before}${unit}` })}
      />
      <circle
        cx={xa}
        cy={y}
        r={tip?.title === afterLabel ? 14 : 12}
        fill="var(--accent)"
        style={{ cursor: "pointer", transition: "r 120ms" }}
        onMouseEnter={() => setTip({ x: xa, y, title: afterLabel, value: `${after}${unit}` })}
        onMouseLeave={() => setTip(null)}
        onClick={() => setTip({ x: xa, y, title: afterLabel, value: `${after}${unit}` })}
      />
      <text x={xb} y={y - 22} textAnchor="middle" fontSize={20} fontWeight={700} fill="var(--fg-faint)">
        {before}
        {unit}
      </text>
      <text x={xa} y={y - 26} textAnchor="middle" fontSize={27} fontWeight={700} fill="var(--accent)">
        {after}
        {unit}
      </text>
      <text x={xb} y={y + 32} textAnchor="middle" fontSize={13} fill="var(--fg-faint)">
        {beforeLabel}
      </text>
      <text x={xa} y={y + 32} textAnchor="middle" fontSize={13} fill="var(--fg-faint)">
        {afterLabel}
      </text>
      <rect x={mid - 42} y={y + 46} width={84} height={26} rx={13} fill="var(--accent)" opacity={0.12} />
      <text x={mid} y={y + 64} textAnchor="middle" fontSize={14} fontWeight={700} fill="var(--accent)">
        {deltaLabel}
      </text>
      {tip && <SvgTooltip {...tip} />}
    </Figure>
  );
}

/* ---- Purpose or Paycheck chart wrappers ------------------------- */

export function SatisfactionDumbbell() {
  return (
    <Dumbbell
      title="Satisfaction, before and after"
      before={19}
      after={42}
      unit="%"
      beforeLabel="Before"
      afterLabel="After"
      deltaLabel="+23 pts"
      maxV={50}
    />
  );
}

export function EnrollmentBar() {
  return (
    <BeforeAfter
      title="Enrollment by offer credibility"
      before={4}
      after={8}
      unit="%"
      deltaLabel="2× uptake"
      beforeLabel="Open courses"
      afterLabel="Education benefit"
    />
  );
}

export function TurnoverDumbbell() {
  return (
    <Dumbbell
      title="Voluntary turnover, at crisis vs. after"
      before={31}
      after={12}
      unit="%"
      beforeLabel="At crisis"
      afterLabel="After pivot"
      deltaLabel="−19 pts"
      maxV={40}
    />
  );
}

/* ---- 6. Price of Belonging: five-year turnover decline (line) ---- */

export function TurnoverDeclineChart() {
  const pad = { l: 52, r: 26, t: 40, b: 44 };
  const w = VB_W - pad.l - pad.r;
  const h = VB_H - pad.t - pad.b;
  const pts = [32, 27, 23, 20, 17];
  const labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
  const yMin = 14;
  const yMax = 34;
  const x = (i: number) => pad.l + (w * i) / (pts.length - 1);
  const y = (v: number) => pad.t + h - (h * (v - yMin)) / (yMax - yMin);
  const line = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const area = `${line} L ${x(pts.length - 1)} ${pad.t + h} L ${x(0)} ${pad.t + h} Z`;
  const [tip, setTip] = useState<Tip>(null);

  return (
    <Figure title="Voluntary turnover, five-year trend">
      {[16, 20, 24, 28, 32].map((v) => (
        <g key={v}>
          <line x1={pad.l} y1={y(v)} x2={pad.l + w} y2={y(v)} stroke="var(--border)" strokeWidth={1} />
          <text x={pad.l - 10} y={y(v) + 4} textAnchor="end" fontSize={12} fill="var(--fg-faint)">
            {v}%
          </text>
        </g>
      ))}
      <path d={area} fill="var(--accent)" opacity={0.1} />
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((v, i) => (
        <circle
          key={i}
          cx={x(i)}
          cy={y(v)}
          r={tip?.title === labels[i] ? 7 : 4.5}
          fill="var(--accent)"
          style={{ cursor: "pointer", transition: "r 120ms" }}
          onMouseEnter={() => setTip({ x: x(i), y: y(v), title: labels[i], value: `${v}%` })}
          onMouseLeave={() => setTip(null)}
          onClick={() => setTip({ x: x(i), y: y(v), title: labels[i], value: `${v}%` })}
        />
      ))}
      <text x={x(0)} y={y(32) - 14} textAnchor="middle" fontSize={16} fontWeight={700} fill="var(--fg)">
        32%
      </text>
      <text x={x(4)} y={y(17) - 18} textAnchor="end" fontSize={16} fontWeight={700} fill="var(--accent)">
        17%
      </text>
      <text x={x(4)} y={y(17) + 24} textAnchor="end" fontSize={12} fill="var(--fg-faint)">
        still falling
      </text>
      <text x={VB_W / 2} y={pad.t - 14} textAnchor="middle" fontSize={13} fill="var(--fg-faint)">
        A sustained decline, not a one-cycle dip: structural change compounds
      </text>
      {labels.map((l, i) => (
        <text key={l} x={x(i)} y={pad.t + h + 24} textAnchor="middle" fontSize={12} fill="var(--fg-faint)">
          {l}
        </text>
      ))}
      {tip && <SvgTooltip {...tip} />}
    </Figure>
  );
}

/* ---- Inline charts (embedded in the full-study deep dive) -------- */

const INLINE: Record<string, () => JSX.Element> = {
  valueDonut: ValueDonutChart,
  satisfaction: SatisfactionDumbbell,
  enrollment: EnrollmentBar,
  turnover: TurnoverDumbbell,
  departures: DeparturesChart,
  turnoverDecline: TurnoverDeclineChart,
};

export function InlineChart({ id }: { id: string }): JSX.Element | null {
  const C = INLINE[id];
  return C ? <C /> : null;
}

/* ---- registry (top-of-case hero chart) -------------------------- */

const CHARTS: Record<string, () => JSX.Element> = {
  "raising-talent": HeadcountCascadeChart,
  "purpose-or-paycheck": ValueDonutChart,
  "price-of-belonging": TurnoverDeclineChart,
};

export function CaseChart({ slug }: { slug: string }): JSX.Element | null {
  const Chart = CHARTS[slug];
  return Chart ? <Chart /> : null;
}
