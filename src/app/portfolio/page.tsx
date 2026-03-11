import type { Metadata } from "next";
import { fetchPageData, fetchPageSEO } from "@/lib/Sanity/Model/Page";
import  PortfolioList from "@/components/PortfolioList";
import { PortableText } from "@portabletext/react";

const pageId = "portfolio";
export async function generateMetadata(): Promise<Metadata> {
  const seo =  await fetchPageSEO(pageId);

  return {
    title: seo?.seoTitle ?? `${pageId.charAt(0).toUpperCase() + pageId.slice(1)} — Dmytro Melnyk`,
    description: seo?.seoDescription ?? `Welcome to ${pageId.charAt(0).toUpperCase() + pageId.slice(1)}.`,
  };
}


export default async function PortfolioPage() {
  const page = await fetchPageData(pageId)
  console.log(page)
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-foreground">
            {page?.title}
          </h1>
          <div className="mt-4 text-muted max-w-lg">
            {page?.content && <PortableText value={page.content} />}
          </div>
        </div>
      </section>

        <PortfolioList/>

    </>
  );
}
