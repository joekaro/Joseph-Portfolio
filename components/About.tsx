export default function About() {
  return (
    <section id="about" className="py-14 md:py-24 border-t border-ink-200">
      <div className="section-container">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">

          <div>
            <p className="section-label">About</p>
            <h2 className="font-display text-3xl md:text-display-md text-ink-900 leading-tight">
              Building real
              <br />
              products that
              <br />
              work
            </h2>
            <div className="mt-6 md:mt-8 space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-400 w-16">Based</span>
                <span className="text-sm text-ink-600">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-400 w-16">Focus</span>
                <span className="text-sm text-ink-600">Full-Stack Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-400 w-16">Since</span>
                <span className="text-sm text-ink-600">2022</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-400 w-16">Status</span>
                <span className="text-sm text-green-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="prose-engineer">
            <p>
              I&apos;m a Full-Stack Software Engineer based in Lagos, Nigeria, focused on
              building production-ready web applications that solve real business problems.
              My work spans ecommerce platforms, backend API systems, and business
              productivity tools, projects that go into production and serve actual users.
            </p>
            <p>
              My day-to-day involves working across the full stack: building React and
              Next.js frontends, designing RESTful APIs with Node.js and Laravel, and
              managing relational and non-relational databases. I care about code quality,
              performance, and shipping systems that are maintainable.
            </p>
            <p>
              I currently work as a Full-Stack Developer at SoftlinkAI Marketing
              Technology Limited, where I build and maintain web applications, implement
              authentication systems, and manage cloud deployments. Alongside this I take
              on freelance projects, building ecommerce stores, business platforms, and
              custom web applications for clients.
            </p>

            <div className="mt-6 md:mt-8 p-4 md:p-5 bg-ink-50 border border-ink-200 rounded not-prose">
              <p className="font-mono text-xs text-ink-400 uppercase tracking-wide-sm mb-3">
                Core principles
              </p>
              <ul className="space-y-2">
                {[
                  "Ship working software over theoretical perfection",
                  "Performance and accessibility are non-negotiable",
                  "Good engineering starts with understanding the problem",
                  "Production deployments require real thought about failure modes",
                ].map((p) => (
                  <li
                    key={p}
                    className="text-ink-600 text-sm pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-amber before:font-mono"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
