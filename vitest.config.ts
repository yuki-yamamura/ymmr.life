import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    env: {
      MICROCMS_SERVICE_DOMAIN: "service-domain",
      MICROCMS_API_KEY: "api-key",
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
