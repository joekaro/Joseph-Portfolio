import Link from "next/link";

const caseStudies = [
  {
    slug: "ecommerce-platform",
    title: "Building a Full-Stack Ecommerce Platform",
    subtitle: "Architecture, inventory management & production deployment",
    tags: ["Laravel", "MySQL", "Full-Stack", "Ecommerce"],
    readTime: "8 min read",
  },
  {
    slug: "payment-integration",
    title: "Paystack Integration & Marketplace Backend",
    subtitle: "REST API design, vendor payouts & commission logic",
    tags: ["Node.js", "REST API", "Paystack", "Laravel"],
    readTime: "6 min read",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Listing Platform",
    subtitle: "Frontend architecture, filtering & SEO optimization",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    readTime: "5 min read",
  },
];

export default function CaseStudiesTeaser() {
  return (
    <section id="case-studies" className="py-14 md:py-24 bg-ink-900 text-ink-50">
      <div className="section-container">

        <div className="mb-8 md:mb-16">
          <p className="font-mono text-xs tracking-wide-md uppercase text-ink-400 mb-3 md:mb-4">
            Engineering Case Studies
          </p>
          <h2 className="font-display text-3xl md:text-display-md text-ink-50 leading-tight">
            How I think through problems
          </h2>
        </div>

        <div>
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col gap-3 py-6 md:py-8 border-t border-ink-700 hover:border-amber/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-600">0{i + 1}</span>
                  <h3 className="font-display text-lg md:text-xl text-ink-50 group-hover:text-amber transition-colors leading-snug">
                    {cs.title}
                  </h3>
                </div>
                <span className="text-ink-600 group-hover:text-amber group-hover:translate-x-1 transition-all shrink-0 mt-0.5">
                  →
                </span>
              </div>
              <p className="text-ink-400 text-sm pl-6 md:pl-0">{cs.subtitle}</p>
              <div className="flex flex-wrap gap-2 pl-6 md:pl-0">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-0.5 rounded border border-ink-700 text-ink-500"
                  >
                    {t}
                  </span>
                ))}
                <span className="font-mono text-xs text-ink-500 ml-auto">{cs.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
