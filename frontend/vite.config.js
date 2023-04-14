import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "/src/main.jsx",
        handlebars: "handlebars.css",
      },
    },
  },
});
