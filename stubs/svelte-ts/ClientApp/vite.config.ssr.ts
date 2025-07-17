import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ["src/App.ts"],
            ssr: "src/ssr.ts",
            publicDirectory: "../wwwroot",
            hotFile: "../wwwroot/build/hot",
            refresh: true,
        }),
        svelte(),
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
