"use client";

import Link from "next/link";

type Props = {
    currentPage: number;
    totalPages: number;
};

export default function PaginationControls({ currentPage, totalPages }: Props) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-4 py-8">
            {currentPage > 1 ? (
                <Link
                    href={`?page=${currentPage - 1}`}
                    className="px-4 py-2 text-sm border border-card-border rounded-lg hover:border-foreground/20 transition-all"
                >
                    ← Previous
                </Link>
            ) : (
                <span className="px-4 py-2 text-sm border border-card-border rounded-lg text-muted/40 cursor-not-allowed">
                    ← Previous
                </span>
            )}

            <span className="text-sm text-muted">
                {currentPage} / {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={`?page=${currentPage + 1}`}
                    className="px-4 py-2 text-sm border border-card-border rounded-lg hover:border-foreground/20 transition-all"
                >
                    Next →
                </Link>
            ) : (
                <span className="px-4 py-2 text-sm border border-card-border rounded-lg text-muted/40 cursor-not-allowed">
                    Next →
                </span>
            )}
        </div>
    );
}

