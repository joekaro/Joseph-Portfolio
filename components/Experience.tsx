const experiences = [
  {
    role: "Full-Stack Developer",
    company: "SoftlinkAI Marketing Technology Limited",
    type: "Remote",
    period: "September 2024 – Present",
    current: true,
    responsibilities: [
      "Designed and maintained full-stack web applications using React, Next.js, Node.js, and Express",
      "Developed secure RESTful APIs supporting business workflows and third-party integrations",
      "Implemented authentication systems using JWT and role-based access control",
      "Designed and optimised PostgreSQL schemas using Prisma ORM",
      "Built responsive, high-performance frontend interfaces",
      "Deployed and maintained production applications in cloud/VPS environments",
      "Diagnosed and resolved production-level performance and stability issues",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    type: "Contract",
    period: "2023 – Present",
    current: true,
    responsibilities: [
      "Design and build responsive web applications using React and Next.js for business clients",
      "Develop backend APIs using Node.js and Laravel for ecommerce and business systems",
      "Implement ecommerce platforms with product catalogs, cart, and checkout systems",
      "Integrate third-party services including Paystack, Cloudinary, and cloud storage providers",
      "Deploy and maintain production applications on Vercel, Railway, and Netlify",
    ],
    notableWork: [
      "Boaccessoriez ecommerce platform — live production system serving real customers",
      "Real estate property listing platform — LuxeLivin",
      "Project management productivity web app — TeamViews",
      "Backend marketplace platform built with Laravel and Paystack",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Tech Company",
    type: "On-site",
    period: "2022 – 2023",
    current: false,
    responsibilities: [
      "Assisted in developing frontend interfaces using modern JavaScript frameworks",
      "Contributed to backend API development and maintenance",
      "Debugged and improved application performance across features",
      "Collaborated with developers using Git version control workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-24 border-t border-ink-200 bg-ink-50">
      <div className="section-container">

        <div className="mb-8 md:mb-16">
          <p className="section-label">Professional Experience</p>
          <h2 className="font-display text-3xl md:text-display-md text-ink-900 leading-tight">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">

              <div>
                <p className="font-mono text-xs text-ink-400 mb-1">{exp.period}</p>
                <span
                  className={`inline-block font-mono text-[11px] px-2 py-0.5 rounded ${
                    exp.current
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-ink-100 text-ink-400 border border-ink-200"
                  }`}
                >
                  {exp.current ? "● Current" : "Past"}
                </span>
                <p className="font-mono text-xs text-ink-400 mt-2">{exp.type}</p>
              </div>

              <div>
                <h3 className="font-display text-xl text-ink-900">{exp.role}</h3>
                <p className="font-body text-sm text-amber mb-3 md:mb-4">{exp.company}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="text-ink-500 text-sm pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-300 before:font-mono"
                    >
                      {r}
                    </li>
                  ))}
                </ul>

                {exp.notableWork && (
                  <div className="mt-4 p-4 bg-white border border-ink-200 rounded">
                    <p className="font-mono text-xs text-ink-400 uppercase tracking-wide-sm mb-3">
                      Notable Work
                    </p>
                    <ul className="space-y-1.5">
                      {exp.notableWork.map((w) => (
                        <li
                          key={w}
                          className="text-ink-600 text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-amber before:font-mono before:text-xs"
                        >
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
