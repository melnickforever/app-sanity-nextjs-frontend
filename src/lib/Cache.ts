import { cache } from "react";

export function withRequestCache<TArgs extends unknown[], TResult>(
    fn: (...args: TArgs) => Promise<TResult>
): (...args: TArgs) => Promise<TResult> {
    return cache(fn);
}
