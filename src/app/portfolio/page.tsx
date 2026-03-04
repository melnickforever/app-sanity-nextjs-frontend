import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio — Dmytro Melnyk",
  description: "A selection of projects I've built and led as a software engineer and team lead.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground">
            My Work
          </h1>
          <p className="mt-4 text-muted max-w-lg">
            A collection of projects I&apos;ve designed, built, and led — from
            startup MVPs to enterprise-scale platforms.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-card-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group rounded-xl border border-card-border overflow-hidden hover:border-foreground/20 transition-all block"
              >
                {/* Placeholder image */}
                <div className="h-44 bg-section-alt flex items-center justify-center relative">
                  <svg
                    className="w-16 h-16 text-muted/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.8}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 text-xs font-medium rounded-full border border-card-border bg-white text-muted">
                    {project.year}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-section-alt text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
