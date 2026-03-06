import NavgationCards from "@/components/NavigationCards";
import { sanityClient } from "@/sanity/client";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

type PageDocument = {
	title: string | null;
	content: PortableTextBlock[] | null;
}

const HOME_PAGE_QUERY = `*[_type == "page" && pageId == "home" && enabled == true]{title, content}`;
const options = { next: { revalidate: 30 } };

export default async function HomePage() {
	const page = await sanityClient.fetch<PageDocument[]>(HOME_PAGE_QUERY, {}, options);

	return (
		<>
			{/* Hero Section */}
			<section className="bg-white">
				<div className="mx-auto max-w-4xl px-6 py-28 md:py-40 flex items-center justify-between">
					<div className="max-w-2xl">
						<div className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
							{page[0]?.title}
						</div>
						<div className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
							{page[0]?.content && <PortableText value={page[0].content} />}
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
