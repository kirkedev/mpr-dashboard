import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const { API_URL } = process.env;

const config = defineConfig({
    plugins: [svelte()],
    cacheDir: "../node_modules/.vite",
    build: {
        outDir: "build",
        target: "esnext",
        polyfillDynamicImport: false,
        sourcemap: true
    },
    server: {
        proxy: {
            "^/api/[^.]*$": {
                target: API_URL,
                rewrite: path => path.replace(/^\/api/, "")
            }
        }
    }
});

export default config;
