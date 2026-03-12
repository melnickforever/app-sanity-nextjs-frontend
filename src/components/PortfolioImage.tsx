"use client";

import { useState } from "react";
import Image from "next/image";

function ImageSkeleton() {
    return (
        <div className="absolute inset-0 bg-section-alt animate-pulse flex items-center justify-center">
            <svg
                className="w-8 h-8 text-muted/20 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
        </div>
    );
}

export default function PortfolioImage({ src, alt }: { src: string; alt: string }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <ImageSkeleton />}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                onLoad={() => setIsLoading(false)}
            />
        </>
    );
}

