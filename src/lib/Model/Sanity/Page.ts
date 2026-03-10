import { sanityClient } from "@/sanity/client";
import { fetchOptions } from "@/lib/Configuration";

export async function fetchPageData(pageId: string) {
    const PAGE_QUERY = `*[_type == "page" && pageId == $pageId && enabled == true]{title, content}[0]`;
    const pageData = await sanityClient.fetch(PAGE_QUERY, { pageId }, fetchOptions);
    return pageData;
}

export async function fetchPageSEO(pageId: string) {
    const SEO_QUERY = `*[_type == "page" && pageId == $pageId && enabled == true]{seoTitle, seoDescription}[0]`;
    const seoData = await sanityClient.fetch(SEO_QUERY, { pageId }, fetchOptions);
    return seoData;
}