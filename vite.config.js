import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build"
    ? (process.env.VERCEL ? "/" : "/Registration_form/")
    : "/", // 👈 in dev it stays at root
}));
