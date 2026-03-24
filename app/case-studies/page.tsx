import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Joseph Obanovwe",
};

const studies = [
  {
    slug: "ecommerce-platform",
    title: "Building a Full-Stack Ecommerce Platform",
    subtitle: "Architecture, inventory management & production deployment",
    tags: ["Laravel", "MySQL", "Full-Stack"],
    readTime: "8 min read",
  },
  {
    slug: "payment-integration",
    title: "Paystack Integration & Marketplace Backend",
    subtitle: "REST API design, vendor payouts & commission logic",
    tags: ["Laravel", "Paystack", "REST API"],
    readTime: "6 min read",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Listing Platform",
    subtitle: "Frontend architecture, filtering & SEO optimization",
    tags: ["Next.js", "TypeScript", "SEO"],
    readTime: "5 min read",
  },
];

export default function CaseStudiesIndex() {
  return (
    <div>
      <div className="mb-12">
        <p className="font-mono text-xs text-ink-400 uppercase tracking-wide-md mb-4">
          Engineering Case Studies
        </p>
        <h1 className="font-display text-display-md text-ink-900 mb-4">
          Technical breakdowns
        </h1>
        <p className="text-ink-500 max-w-lg">
          Deep dives into the engineering decisions, architecture choices, and
          problem-solving behind key projects.
        </p>
      </div>

      <div className="space-y-4">
        {studies.map((s) => (
          <Link
            key={s.slug}
            href={`/case-studies/${s.slug}`}
            className="group flex flex-col gap-3 p-6 border border-ink-200 rounded bg-white hover:border-amber/40 transition-colors"
          >
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="tag text-[11px]">{t}</span>
              ))}
              <span className="font-mono text-xs text-ink-400 ml-auto">{s.readTime}</span>
            </div>
            <h2 className="font-display text-xl text-ink-900 group-hover:text-amber transition-colors">
              {s.title}
            </h2>
            <p className="text-ink-500 text-sm">{s.subtitle}</p>
            <span className="font-mono text-xs text-amber group-hover:translate-x-1 transition-transform inline-block">
              Read case study →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
