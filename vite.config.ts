import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mumsgift/", // ← reemplaza con el nombre de tu repo exacto
  plugins: [react()],
});
