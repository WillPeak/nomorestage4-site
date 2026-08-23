import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Custom domain (nomorestage4.com) → base "/"
// Project-pages without custom domain would use "/<repo>/"
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
