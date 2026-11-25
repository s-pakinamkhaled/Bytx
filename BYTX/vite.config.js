import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works on GitHub Pages whatever the repo is named
  // (e.g. /BYTX/ or /Bytx/). Safe here: single page, hash links only, no router.
  base: './',
})
