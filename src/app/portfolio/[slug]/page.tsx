import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPortfolioBySlug } from "@/lib/Sanity/Model/Portfolio";
import { withRequestCache } from "@/lib/Cache";
import { PortableText } from "@portabletext/react";
import ImageCarousel from "@/components/ImageCarousel";
import { urlFor } from "@/lib/Sanity/ImageUrl";


// Dynamic route for project details
export const dynamicParams = true;

const getCachedPortfolioBySlug = withRequestCache(fetchPortfolioBySlug);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getCachedPortfolioBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.seoTitle} — Dmytro Melnyk`,
    description: project.seoDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getCachedPortfolioBySlug(slug);
  console.log(project);

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
              <h1 className="text-4xl md:text-5xl font-light text-foreground">
                {project.title}
              </h1>
              <div className="mt-4 text-lg text-muted max-w-2xl">
                {project.description && <PortableText value={project.description} />}
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Image Carousel */}
      {(() => {
        const images = [
          ...(project.mainImage ? [urlFor(project.mainImage).width(896).height(504).url()] : []),
          ...(project.Images ?? []).map((img) => urlFor(img).width(896).height(504).url()),
        ];
        return images.length > 0 ? (
          <section className="border-t border-card-border">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <ImageCarousel images={images} />
            </div>
          </section>
        ) : null;
      })()}

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
                  {project.description && <PortableText value={project.description} />}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  Skills &amp; Technologies
                </h2>
                <ul className="space-y-3">
                  {project.skills?.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full border border-card-border flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                      </span>
                      <span className="text-sm text-muted leading-relaxed">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
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

