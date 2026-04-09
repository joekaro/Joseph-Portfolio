const experiences = [
  {
    role: "Full-Stack Developer",
    company: "SoftlinkAI Marketing Technology Limited",
    type: "Remote",
    period: "January 2026 – Present",
    current: true,
    responsibilities: [
      "Develop scalable SaaS applications using React 18 and Vite with modular component architecture",
      "Build responsive UI systems using TailwindCSS and modern component libraries",
      "Implement client-side routing and asynchronous data fetching using React Query",
      "Design interactive dashboards and data visualization using Recharts. ",
      "Integrate payment gateways including Paystack, Flutterwave, Stripe, and PayPal. ",
      "Build backend integrations and serverless functions to support application logic. ",
      "Integrate third-party platforms such as Zoom OAuth, Google Calendar, and email automation services",
      "Develop advanced features including PDF generation, Excel import/export, and rich text editing",
      "Deploy and maintain applications on Vercel and Railway with CI/CD pipelines",
      "Collaborate with cross-functional teams using Agile methodologies and Git version control",
      "Collaborate with product teams to deliver scalable, secure, and maintainable web applications",
    ],
  },
  {
    role: "IT Support Officer",
    company: "Starbite Integrated Catering Services Ltd",
    type: "On-site · Lagos",
    period: "September 2025 – January 2026",
    current: false,
    responsibilities: [
      "Managed and maintained the company's WordPress e-commerce website, ensuring uptime and performance",
      "Customized WordPress themes and integrated plugins to support business operations",
      "Provided day-to-day IT support including hardware, software, and network troubleshooting",
      "Managed corporate email accounts and hosting infrastructure",
      "Monitored LAN/WAN network performance and resolved connectivity issues",
      "Implemented data backup and basic cybersecurity practices",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    type: "Contract",
    period: "2025 – Present",
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
    period: "July 2025 – December 2025",
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
