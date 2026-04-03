import type { Metadata } from "next";
import { fetchPageData, fetchPageSEO } from "@/lib/Sanity/Model/Page";
import { fetchAllSkills } from "@/lib/Sanity/Model/Skills";
import { PortableText } from "@portabletext/react";
import SkillList from "@/components/SkillList";

const pageId = "about";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await fetchPageSEO(pageId);

  return {
    title: seo?.seoTitle ?? `${pageId.charAt(0).toUpperCase() + pageId.slice(1)} — Dmytro Melnyk`,
    description: seo?.seoDescription ?? `Welcome to ${pageId.charAt(0).toUpperCase() + pageId.slice(1)}.`,
  };
}

export default async function AboutPage() {
  const [page, skills] = await Promise.all([
    fetchPageData(pageId),
    fetchAllSkills(),
  ]);
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground">
                {page?.title}
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
                {page?.content && <PortableText value={page.content} />}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
          <SkillList skills={skills} />
    </>
  );
}

