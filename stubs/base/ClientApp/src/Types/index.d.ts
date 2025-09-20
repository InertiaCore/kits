export type InertiaSharedProps<T = Record<string, unknown>> = T & {
    flash?: { error?: string; success?: string };
    [key: string]: unknown;
};
