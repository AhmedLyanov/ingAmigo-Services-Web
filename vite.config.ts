import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
