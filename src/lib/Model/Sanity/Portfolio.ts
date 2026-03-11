import { sanityClient } from "@/sanity/client";
import { fetchOptions } from "@/lib/Configuration";
import { PortableTextBlock } from "@portabletext/react";

export type PortfolioListItem = {
    title: string | null;
    slug: { current: string } | null;
    thumbnailImage: string | null;
};

export type PortfolioDocument = {
    title: string | null;
    content: PortableTextBlock[] | null;
    seoTitle: string | null;
    seoDescription: string | null;
};

export async function fetchAllPortfolios(): Promise<PortfolioListItem[]> {
    const PORTFOLIO_QUERY = `*[_type == "portfolio" && enabled == true] | order(sortOrder desc) {title, slug, thumbnailImage}`;
    return sanityClient.fetch<PortfolioListItem[]>(PORTFOLIO_QUERY, {}, fetchOptions);
}

export async function fetchPortfolioBySlug(slug: string): Promise<PortfolioDocument | null> {
    const PORTFOLIO_DETAIL_QUERY = `*[_type == "portfolio" && slug.current == $slug && enabled == true]{title, content, seoTitle, seoDescription}[0]`;
    return sanityClient.fetch<PortfolioDocument | null>(PORTFOLIO_DETAIL_QUERY, { slug }, fetchOptions);
}