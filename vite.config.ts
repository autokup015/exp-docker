import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // preview: {
  //   port: 8080,
  //   strictPort: true,
  // },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    allowedHosts: ["react-vite-web-334509080735.asia-southeast1.run.app"],
  },
});
