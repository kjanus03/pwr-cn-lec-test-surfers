import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"

export default defineConfig({
    base : "/pwr-cn-lec-test-surfers/",
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
    ],
    
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
})