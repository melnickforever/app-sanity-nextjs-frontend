import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Dmytro Melnyk`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-muted hover:text-foreground mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-muted bg-section-alt rounded-full mb-3">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-foreground">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted max-w-2xl">
                {project.description}
              </p>
            </div>
            <span className="shrink-0 px-3 py-1 text-sm font-medium rounded-full border border-card-border bg-white text-muted">
              {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="aspect-video rounded-xl border border-card-border bg-section-alt flex items-center justify-center">
            <svg
              className="w-20 h-20 text-muted/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  Overview
                </h2>
                <div className="space-y-4">
                  {project.fullDescription.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm text-muted leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full border border-card-border flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                      </span>
                      <span className="text-sm text-muted leading-relaxed">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 mt-0.5 shrink-0 text-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted leading-relaxed">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border border-card-border p-5">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Project Info
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      Role
                    </dt>
                    <dd className="text-sm text-foreground mt-1">
                      {project.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      Duration
                    </dt>
                    <dd className="text-sm text-foreground mt-1">
                      {project.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      Team Size
                    </dt>
                    <dd className="text-sm text-foreground mt-1">
                      {project.teamSize}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      Year
                    </dt>
                    <dd className="text-sm text-foreground mt-1">
                      {project.year}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-lg border border-card-border p-5">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-section-alt text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            View All Projects
          </Link>
        </div>
      </section>
    </>
  );
}

