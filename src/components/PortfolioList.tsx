import Link from "next/link";
import { urlFor } from "@/lib/Sanity/ImageUrl";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PORTFOLIO_QUERY_RESULT } from "@/sanity/types";

type Props = {
    projects: PORTFOLIO_QUERY_RESULT;
};

export default function PortfolioList({ projects }: Props) {
    return (
        <>
            {/* Projects Grid */}
            <section className="border-t border-card-border">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Link
                                key={project.slug?.current}
                                href={`/portfolio/${project.slug?.current}`}
                                className="group rounded-xl border border-card-border overflow-hidden hover:border-foreground/20 transition-all block"
                            >
                                {/* Placeholder image */}
                                <div className="h-44 bg-section-alt flex items-center justify-center relative overflow-hidden">
                                    {project.mainImage ? (
                                        <Image
                                            src={urlFor(project.mainImage).width(600).height(176).url()}
                                            alt={project.title ?? ""}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    ) : (
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
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="mt-2 text-lg font-medium text-foreground">
                                        {project.title}
                                    </h3>
                                    <div className="mt-2 text-sm text-muted leading-relaxed">
                                        {project.description && <PortableText value={project.description} />}
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.skills?.map((skill, index) => (
                                            <span
                                                key={`${index}-${skill}`}
                                                className="px-2.5 py-0.5 text-xs rounded-full bg-section-alt text-muted"
                                            >
                                                {skill}
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
