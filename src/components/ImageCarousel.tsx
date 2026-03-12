"use client";

import { useState, Suspense } from "react";
import Image from "next/image";

type Props = {
    images: string[];
};

function CarouselSkeleton() {
    return (
        <div className="absolute inset-0 z-10 bg-section-alt animate-pulse flex items-center justify-center">
            <svg
                className="w-12 h-12 text-muted/20 animate-spin"
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

function CarouselImage({ src, alt }: { src: string; alt: string }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <CarouselSkeleton />}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                onLoad={() => setIsLoading(false)}
            />
        </>
    );
}

export default function ImageCarousel({ images }: Props) {
    const [current, setCurrent] = useState(0);

    if (images.length === 0) return null;

    const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className="relative w-full aspect-video rounded-xl border border-card-border overflow-hidden bg-section-alt">
            <Suspense fallback={<CarouselSkeleton />}>
                <CarouselImage
                    key={current}
                    src={images[current]}
                    alt={`Project image ${current + 1}`}
                />
            </Suspense>

            {/* Navigation — only show if more than 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 border border-card-border flex items-center justify-center hover:bg-white transition-all"
                        aria-label="Previous image"
                    >
                        <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 border border-card-border flex items-center justify-center hover:bg-white transition-all"
                        aria-label="Next image"
                    >
                        <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all ${
                                    i === current ? "bg-white w-4" : "bg-white/50 w-1.5"
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-black/40 text-white text-xs">
                        {current + 1} / {images.length}
                    </div>
                </>
            )}
        </div>
    );
}
