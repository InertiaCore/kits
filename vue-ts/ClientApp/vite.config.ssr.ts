import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import laravel from "laravel-vite-plugin";
import tailwindcss from '@tailwindcss/vite'

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
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
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
