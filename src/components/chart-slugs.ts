/**
 * Server-safe list of case slugs that have a chart figure.
 * Kept separate from charts.tsx (a client component) so the server-rendered
 * case-study page can decide chart-vs-placeholder without pulling in client code.
 */
export const CHART_SLUGS = [
  "compensation-pay-equity",
  "recruiting-onboarding-pipeline",
  "employee-relations-system",
  "raising-talent",
  "purpose-or-paycheck",
] as const;

export function hasChart(slug: string): boolean {
  return (CHART_SLUGS as readonly string[]).includes(slug);
}
