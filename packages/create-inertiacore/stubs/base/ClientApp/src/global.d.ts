declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            flash?: { error?: string; success?: string };
            [key: string]: unknown;
        };
    }
}

export {};
