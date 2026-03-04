"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-card-border">
			<nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
				<Link
					href="/"
					className="text-lg font-medium text-foreground tracking-tight"
				>
					Dmytro Melnyk
				</Link>

				<ul className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`text-sm transition-colors hover:text-foreground ${
									pathname === link.href
										? "text-foreground font-medium"
										: "text-muted"
								}`}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile menu button */}
				<MobileMenu pathname={pathname} />
			</nav>
		</header>
	);
}

function MobileMenu({ pathname }: { pathname: string }) {
	return (
		<details className="md:hidden relative group">
			<summary className="list-none cursor-pointer p-2">
				<svg
					className="w-5 h-5 text-foreground"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</summary>
			<div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-lg shadow-sm border border-card-border py-2">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={`block px-4 py-2 text-sm hover:bg-section-alt ${
							pathname === link.href
								? "text-foreground font-medium"
								: "text-muted"
						}`}
					>
						{link.label}
					</Link>
				))}
			</div>
		</details>
	);
}
