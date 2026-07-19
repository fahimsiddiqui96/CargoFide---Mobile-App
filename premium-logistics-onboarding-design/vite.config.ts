import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Inline all images as base64 data URIs — ensures everything
    // lives inside the single index.html with no external file dependencies.
    // This permanently fixes the GitHub Pages broken-image issue.
    assetsInlineLimit: 1_000_000, // 1 MB — well above our largest image (~444 KB)
  },
});
