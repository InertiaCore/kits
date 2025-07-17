import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { mkdirSync } from "fs";
import path from "path";

const root = process.cwd();
const publicPath = path.resolve(root, "../wwwroot/build");
mkdirSync(publicPath, { recursive: true });

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ["src/App.ts"],
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
