import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import inertiacore from '@inertiacore/vite-plugin';
import inertia from '@inertiajs/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        inertiacore({
            input: ['src/App.ts'],
            refresh: true,
        }),
        inertia({
            ssr: false,
        }),
        svelte(),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    build: {
        emptyOutDir: true,
    },
});
