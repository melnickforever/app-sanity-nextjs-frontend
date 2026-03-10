import NavgationCards from "@/components/NavigationCards";
import { fetchPageData, fetchPageSEO } from "@/lib/Model/Sanity/Page";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

const pageId = "home";
export async function generateMetadata(): Promise<Metadata> {
	const seo =  await fetchPageSEO(pageId);

	return {
		title: seo?.seoTitle ?? `${pageId.charAt(0).toUpperCase() + pageId.slice(1)} — Dmytro Melnyk`,
		description: seo?.seoDescription ?? `Welcome to ${pageId.charAt(0).toUpperCase() + pageId.slice(1)}.`,
	};
}


export default async function HomePage() {
	const page = await fetchPageData(pageId)

	return (
		<>
			{/* Hero Section */}
			<section className="bg-white">
				<div className="mx-auto max-w-4xl px-6 py-28 md:py-40 flex items-center justify-between">
					<div className="max-w-2xl">
						<div className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
							{page?.title}
						</div>
						<div className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
							{page?.content && <PortableText value={page.content} />}
						</div>
					</div>
					<div className="hidden md:flex items-center justify-center select-none">
						<div className="flex h-40 w-40 lg:h-48 lg:w-48 items-center justify-center rounded-full border border-card-border">
							<span className="text-6xl lg:text-7xl font-extralight text-muted leading-none">
								&lt;/&gt;
							</span>
						</div>
					</div>
				</div>
			</section>
			<NavgationCards/>
		</>
	);
}
