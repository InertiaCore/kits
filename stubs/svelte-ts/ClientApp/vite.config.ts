import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ['src/App.ts'],
            publicDirectory: '../wwwroot',
            refresh: true,
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
