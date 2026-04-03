import { sanityClient } from "@/sanity/client";
import { fetchOptions } from "@/lib/Configuration";
import { defineQuery } from "next-sanity";

const SKILLS_QUERY = defineQuery(`
    *[_type == "skill"] | order(title asc) { title }
`);

export async function fetchAllSkills(): Promise<string[]> {
    const results = await sanityClient.fetch(SKILLS_QUERY, {}, fetchOptions);
    return results
        .map((s: { title?: string | null }) => s.title)
        .filter((t): t is string => Boolean(t));
}
