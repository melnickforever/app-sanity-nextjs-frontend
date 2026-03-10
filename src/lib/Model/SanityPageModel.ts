import { sanityClient } from "@/sanity/client";
import type {PortableTextBlock} from "@portabletext/react";
const REVALIDATE_SECONDS: number = 30;
const fetchOptions = { next: { revalidate: REVALIDATE_SECONDS } };
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

export type PageDocument = {
    title: string | null;
    content: PortableTextBlock[] | null;
}
