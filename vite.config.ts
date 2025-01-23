import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rdaze.github.io/', // Correct base path for GitHub Pages
  build: {
    outDir: 'dist', // Ensures GitHub Pages picks up the right folder
  }
})
