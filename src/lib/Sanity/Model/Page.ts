import { sanityClient } from "@/sanity/client";
import { fetchOptions } from "@/lib/Configuration";
import { defineQuery } from "next-sanity";
import type { PAGE_QUERY_RESULT, PAGE_SEO_QUERY_RESULT } from "@/sanity/types";

export async function fetchPageData(pageId: string): Promise<PAGE_QUERY_RESULT> {
    const PAGE_QUERY = defineQuery(`*[_type == "page" && pageId == $pageId && enabled == true]{title, content}[0]`);
    return sanityClient.fetch(PAGE_QUERY, { pageId }, fetchOptions);
}

export async function fetchPageSEO(pageId: string): Promise<PAGE_SEO_QUERY_RESULT> {
    const PAGE_SEO_QUERY = defineQuery(`*[_type == "page" && pageId == $pageId && enabled == true]{seoTitle, seoDescription}[0]`);
    return sanityClient.fetch(PAGE_SEO_QUERY, { pageId }, fetchOptions);
}