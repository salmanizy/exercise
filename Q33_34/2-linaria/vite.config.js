import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/vite";

export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ["src/**/*.{js,jsx,ts,tsx}"],
    }),
  ],
});
