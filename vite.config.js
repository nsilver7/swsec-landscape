import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: set to '/<repo-name>/' or '/' if using a custom domain
  base: command === "serve" ? "/" : "/swsec-landscape/",
});
