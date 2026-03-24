const skillGroups = [
  {
    category: "Frontend Development",
    description: "Building responsive, accessible interfaces with modern frameworks",
    skills: [
      { name: "Next.js", level: "Primary" },
      { name: "React", level: "Primary" },
      { name: "TypeScript", level: "Primary" },
      { name: "Tailwind CSS", level: "Primary" },
      { name: "Framer Motion", level: "Secondary" },
      { name: "Alpine.js", level: "Secondary" },
    ],
  },
  {
    category: "Backend Development",
    description: "Designing APIs and server-side systems that scale",
    skills: [
      { name: "Node.js", level: "Primary" },
      { name: "Express", level: "Primary" },
      { name: "Laravel", level: "Primary" },
      { name: "REST APIs", level: "Primary" },
      { name: "JWT Auth", level: "Secondary" },
      { name: "Prisma ORM", level: "Secondary" },
    ],
  },
  {
    category: "Databases",
    description: "Schema design, query optimisation & data modelling",
    skills: [
      { name: "MongoDB", level: "Primary" },
      { name: "MySQL", level: "Primary" },
      { name: "PostgreSQL", level: "Primary" },
      { name: "Supabase", level: "Secondary" },
    ],
  },
  {
    category: "Tools & Infrastructure",
    description: "Deployment, version control & third-party integrations",
    skills: [
      { name: "Git / GitHub", level: "Primary" },
      { name: "Vercel", level: "Primary" },
      { name: "Railway", level: "Secondary" },
      { name: "Netlify", level: "Secondary" },
      { name: "Paystack", level: "Primary" },
      { name: "Cloudinary", level: "Secondary" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-24 border-t border-ink-200">
      <div className="section-container">

        <div className="mb-8 md:mb-16">
          <p className="section-label">Engineering Skills</p>
          <h2 className="font-display text-3xl md:text-display-md text-ink-900 leading-tight">
            Technical capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="border border-ink-200 rounded p-5 md:p-6 bg-white">
              <h3 className="font-display text-lg md:text-xl text-ink-900 mb-1">
                {group.category}
              </h3>
              <p className="text-ink-400 text-sm mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={skill.level === "Primary" ? "tag-amber" : "tag"}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-ink-100">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-400">
                  <span className="w-2 h-2 rounded-sm bg-amber/20 border border-amber/30 inline-block" />
                  Primary
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-400">
                  <span className="w-2 h-2 rounded-sm bg-ink-100 border border-ink-200 inline-block" />
                  Secondary
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
