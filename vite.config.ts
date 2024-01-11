import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Needed for Docker port mapping to work
    strictPort: true,
    port: 5173, // Can be changed to anything
  },
});
