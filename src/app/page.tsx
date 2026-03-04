import Link from "next/link";

const navigationCards = [
	{
		href: "/about",
		icon: (
			<svg
				className="h-10 w-10"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.2}
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
				/>
			</svg>
		),
		title: "About",
		description: "Learn more about my background, skills, and experience.",
	},
	{
		href: "/portfolio",
		icon: (
			<svg
				className="h-10 w-10"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.2}
					d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
				/>
			</svg>
		),
		title: "Portfolio",
		description: "Browse a selection of projects I've designed and built.",
	},
	{
		href: "/contact",
		icon: (
			<svg
				className="h-10 w-10"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.2}
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
		title: "Contact",
		description: "Get in touch for collaborations or just to say hello.",
	},
];

export default function HomePage() {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-white">
				<div className="mx-auto max-w-4xl px-6 py-28 md:py-40 flex items-center justify-between">
					<div className="max-w-2xl">
						<p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
							Software Engineer &amp; Team Lead
						</p>
						<h1 className="text-4xl font-light leading-tight text-foreground md:text-6xl">
							Hi, I&apos;m Dmytro.
						</h1>
						<p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
							I build scalable products and lead engineering teams.
							With 8+ years of experience crafting elegant, performant
							applications — I focus on simplicity, clarity, and impact.
						</p>
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

			{/* Three Icon Cards */}
			<section className="border-t border-card-border bg-white">
				<div className="mx-auto max-w-4xl px-6 py-20">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{navigationCards.map((card) => (
							<Link
								key={card.title}
								href={card.href}
								className="group flex flex-col items-center rounded-xl border border-card-border p-10 text-center transition-all hover:border-foreground/20 hover:shadow-sm"
							>
								<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-card-border text-muted transition-all group-hover:border-foreground/30 group-hover:text-foreground">
									{card.icon}
								</div>
								<h3 className="mb-2 text-base font-medium text-foreground">
									{card.title}
								</h3>
								<p className="text-sm leading-relaxed text-muted">
									{card.description}
								</p>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
