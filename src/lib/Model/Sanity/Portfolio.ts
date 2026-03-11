import { sanityClient } from "@/sanity/client";
import { fetchOptions } from "@/lib/Configuration";
import { defineQuery } from "next-sanity";
import type { PORTFOLIO_QUERY_RESULT, PORTFOLIO_DETAIL_QUERY_RESULT } from "@/sanity/types";

export async function fetchAllPortfolios(): Promise<PORTFOLIO_QUERY_RESULT> {
    const PORTFOLIO_QUERY = defineQuery(`*[_type == "portfolio" && enabled == true] | order(sortOrder desc) {title, slug, thumbnailImage}`);
    return sanityClient.fetch(PORTFOLIO_QUERY, {}, fetchOptions);
}

export async function fetchPortfolioBySlug(slug: string): Promise<PORTFOLIO_DETAIL_QUERY_RESULT> {
    const PORTFOLIO_DETAIL_QUERY = defineQuery(`*[_type == "portfolio" && slug.current == $slug && enabled == true]{title, content, seoTitle, seoDescription}[0]`);
    return sanityClient.fetch(PORTFOLIO_DETAIL_QUERY, { slug }, fetchOptions);
}