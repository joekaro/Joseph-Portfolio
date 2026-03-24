import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Boaccessoriez",
    type: "Ecommerce Platform",
    description:
      "A full-stack ecommerce platform for an accessories brand. Built with a product catalog, cart management, per-size stock enforcement, and a multi-step checkout flow. Deployed to production and serving real customers.",
    stack: ["Laravel", "MySQL", "Blade", "Alpine.js", "Tailwind CSS"],
    highlights: [
      "Quick-add modal with colour, size & quantity selection",
      "Per-size inventory enforcement with out-of-stock UI states",
      "Admin panel with customer management & staff account badging",
      "Full order processing pipeline from cart to confirmation",
    ],
    live: "http://boaccessoriez.com/",
    github: null,
    caseStudy: "/case-studies/ecommerce-platform",
    status: "Live in Production",
  },
  {
    number: "02",
    name: "LuxeLivin",
    type: "Real Estate Platform",
    description:
      "A property listing and browsing platform built for a real estate brand. Users can filter properties by type, location, and price range. Responsive across all devices with a clean, professional UI.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Property listing system with advanced filtering",
      "Dynamic property detail pages",
      "Responsive UI optimised for mobile and desktop",
      "SEO-optimised pages with metadata",
    ],
    live: "https://luxelivin.netlify.app/",
    github: "https://github.com/joekaro",
    caseStudy: "/case-studies/real-estate-platform",
    status: "Live",
  },
  {
    number: "03",
    name: "TeamViews",
    type: "Project Management App",
    description:
      "A web application for teams to organise projects, track tasks, and manage productivity workflows. Dashboard-first design with project boards and task tracking.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Project dashboard with task tracking boards",
      "Team productivity workflow management",
      "Clean, focused UI for daily task management",
      "Deployed on Vercel",
    ],
    live: "https://teamviews.vercel.app/",
    github: "https://github.com/joekaro",
    caseStudy: null,
    status: "Live",
  },
  {
    number: "04",
    name: "Marketplace API Platform",
    type: "Backend System",
    description:
      "A backend marketplace platform providing REST API infrastructure for marketplace operations. Built with Laravel, featuring vendor payout workflows, commission management, and Paystack payment integration.",
    stack: ["Laravel", "MySQL", "REST API", "Paystack", "PostgreSQL"],
    highlights: [
      "REST API architecture serving frontend clients",
      "Vendor registration, payout, and commission management",
      "Paystack payment gateway integration",
      "Admin panel for marketplace oversight",
    ],
    live: null,
    github: "https://github.com/joekaro",
    caseStudy: "/case-studies/payment-integration",
    status: "Private Client",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-14 md:py-24 border-t border-ink-200">
      <div className="section-container">

        <div className="flex items-end justify-between mb-8 md:mb-16">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="font-display text-3xl md:text-display-md text-ink-900 leading-tight">
              Production projects
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-ink-400">
            {projects.length} projects
          </span>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="group border-t border-ink-200 py-7 md:py-10 grid md:grid-cols-[1fr_2fr] gap-5 md:gap-8">

      <div>
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          <span className="font-mono text-xs text-ink-400">{project.number}</span>
          <span className="w-4 h-px bg-ink-300" />
          <span className="font-mono text-xs text-amber uppercase tracking-wide-sm">
            {project.type}
          </span>
        </div>
        <h3 className="font-display text-xl md:text-2xl text-ink-900 mb-2 md:mb-3 group-hover:text-amber transition-colors">
          {project.name}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
          {project.stack.map((s) => (
            <span key={s} className="tag text-[11px]">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          <span className="font-mono text-xs text-ink-400">{project.status}</span>
        </div>
      </div>

      <div>
        <p className="text-ink-500 text-sm leading-relaxed mb-4 md:mb-5">
          {project.description}
        </p>
        <ul className="space-y-1.5 mb-5 md:mb-6">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="text-ink-600 text-sm pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-amber before:font-mono before:text-xs"
            >
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-3.5"
            >
              View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-3.5"
            >
              GitHub
            </a>
          )}
          {project.caseStudy && (
            <Link
              href={project.caseStudy}
              className="font-mono text-xs text-amber hover:text-amber-dim transition-colors underline underline-offset-4"
            >
              Read case study →
            </Link>
          )}
        </div>
      </div>

    </article>
  );
}
