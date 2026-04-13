import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inertiacore from "@inertiacore/vite-plugin";
import inertia from "@inertiajs/vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
        inertiacore({
            input: ["src/App.tsx"],
            refresh: true,
        }),
        inertia({
            ssr: false,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    build: {
        emptyOutDir: true,
    },
});
