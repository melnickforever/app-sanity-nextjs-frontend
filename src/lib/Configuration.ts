const REVALIDATE_SECONDS: number = 30;
export const fetchOptions = { next: { revalidate: REVALIDATE_SECONDS } };