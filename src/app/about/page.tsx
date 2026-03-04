import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Dmytro Melnyk",
  description:
    "Learn more about Dmytro Melnyk — Software Engineer & Team Lead with 8+ years of experience.",
};

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "D3.js", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "GraphQL", "REST"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Leadership", items: ["Agile/Scrum", "Code Review", "Mentoring", "Architecture Design", "Hiring"] },
];

const experience = [
  {
    role: "Senior Software Engineer & Team Lead",
    company: "TechCorp International",
    period: "2022 — Present",
    description:
      "Leading a team of 12 engineers building a next-generation e-commerce platform. Architected the migration from a monolith to microservices, reducing deployment time by 80%.",
  },
  {
    role: "Software Engineer",
    company: "InnovateLab",
    period: "2019 — 2022",
    description:
      "Developed real-time data analytics and collaboration tools used by Fortune 500 clients. Championed adoption of TypeScript and GraphQL across the engineering org.",
  },
  {
    role: "Junior Software Engineer",
    company: "StartupHub",
    period: "2017 — 2019",
    description:
      "Built MVPs for early-stage startups. Delivered 10+ projects across web and mobile, learning to ship fast and iterate based on user feedback.",
  },
];

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "National Technical University",
    period: "2015 — 2017",
  },
  {
    degree: "B.Sc. Software Engineering",
    institution: "National Technical University",
    period: "2011 — 2015",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground">
            Dmytro Melnyk
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Avatar placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-2xl border border-card-border bg-section-alt flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-muted/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0.8}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-medium text-foreground">
                Hello! I&apos;m Dmytro.
              </h2>
              <p className="text-muted leading-relaxed">
                I&apos;m a software engineer and team lead with over 8 years of
                experience in the tech industry. I specialize in building
                high-performance web applications and leading distributed
                engineering teams.
              </p>
              <p className="text-muted leading-relaxed">
                Throughout my career, I&apos;ve worked on everything from
                early-stage startup MVPs to enterprise-scale platforms serving
                millions of users. I believe that great software is built by
                empowered teams with clear direction and strong engineering
                culture.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not coding or mentoring, you&apos;ll find me
                exploring new technologies, contributing to open-source projects,
                or hiking in the mountains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-xl font-medium text-foreground mb-8">
            Tools &amp; Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-lg border border-card-border"
              >
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-sm rounded-full bg-section-alt text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-xl font-medium text-foreground mb-8">
            Experience
          </h2>
          <div className="max-w-3xl space-y-10">
            {experience.map((job) => (
              <div key={job.role}>
                <span className="text-xs text-muted">{job.period}</span>
                <h3 className="mt-1 text-base font-medium text-foreground">
                  {job.role}
                </h3>
                <p className="text-sm text-muted">{job.company}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-xl font-medium text-foreground mb-8">
            Education
          </h2>
          <div className="max-w-2xl space-y-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg border border-card-border text-muted">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 2.5 4-2.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted">{edu.institution}</p>
                  <p className="text-xs text-muted mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

