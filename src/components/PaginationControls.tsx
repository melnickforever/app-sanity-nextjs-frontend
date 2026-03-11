"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = {
    currentPage: number;
    totalPages: number;
};

export default function PaginationControls({ currentPage, totalPages }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    if (totalPages <= 1) return null;

    const navigate = (page: number) => {
        startTransition(() => {
            router.push(`?page=${page}`);
        });
    };

    return (
        <div className="flex items-center justify-center gap-4 py-8">
            {isPending && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
                    <svg
                        className="animate-spin h-8 w-8 text-muted"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                        />
                    </svg>
                </div>
            )}

            <button
                onClick={() => navigate(currentPage - 1)}
                disabled={currentPage <= 1 || isPending}
                className="px-4 py-2 text-sm border border-card-border rounded-lg hover:border-foreground/20 transition-all disabled:text-muted/40 disabled:cursor-not-allowed"
            >
                ← Previous
            </button>

            <span className="text-sm text-muted">
                {currentPage} / {totalPages}
            </span>

            <button
                onClick={() => navigate(currentPage + 1)}
                disabled={currentPage >= totalPages || isPending}
                className="px-4 py-2 text-sm border border-card-border rounded-lg hover:border-foreground/20 transition-all disabled:text-muted/40 disabled:cursor-not-allowed"
            >
                Next →
            </button>
        </div>
    );
}
