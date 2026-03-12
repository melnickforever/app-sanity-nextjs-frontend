import { sanityClient } from "@/sanity/client";
import { fetchOptions } from "@/lib/Configuration";
import { defineQuery } from "next-sanity";
import type { PORTFOLIO_QUERY_RESULT, PORTFOLIO_DETAIL_QUERY_RESULT } from "@/sanity/types";

export const PAGE_SIZE = 4;

const PORTFOLIO_PAGE_QUERY = defineQuery(`
    *[_type == "portfolio" && enabled == true] | order(sortOrder desc) [$start..$end]
    {
        title,
        slug,
        "skills": skills[]->title,
        mainImage,
        description
    }`);

const PORTFOLIO_COUNT_QUERY = defineQuery(`
    count(*[_type == "portfolio" && enabled == true])
`);

export async function fetchAllPortfolios(): Promise<PORTFOLIO_QUERY_RESULT> {
    const PORTFOLIO_QUERY = defineQuery(`
    *[_type == "portfolio" && enabled == true] | order(sortOrder desc) 
    {
        title, 
        slug, 
        "skills": skills[]->title,
        mainImage,
        description
    }`);
    return sanityClient.fetch(PORTFOLIO_QUERY, {}, fetchOptions);
}

export async function fetchPortfoliosPage(page: number): Promise<PORTFOLIO_QUERY_RESULT> {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE - 1;
    return sanityClient.fetch(PORTFOLIO_PAGE_QUERY, { start, end }, fetchOptions);
}

export async function fetchPortfoliosCount(): Promise<number> {
    return sanityClient.fetch(PORTFOLIO_COUNT_QUERY, {}, fetchOptions);
}

export async function fetchPortfolioBySlug(slug: string): Promise<PORTFOLIO_DETAIL_QUERY_RESULT> {
    const PORTFOLIO_DETAIL_QUERY = defineQuery(`
    *[_type == "portfolio" && slug.current == $slug && enabled == true]
    {
        title, 
        description,
        content,
        "skills": skills[]->title,
        mainImage,
        Images[], 
        seoTitle, 
        seoDescription
        }[0]`);
    return sanityClient.fetch(PORTFOLIO_DETAIL_QUERY, { slug }, fetchOptions);
}