import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ["src/App.jsx"],
            publicDirectory: "../wwwroot",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": "/src",
            // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
            "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
        },
    },
    build: {
        emptyOutDir: true,
    },
});
