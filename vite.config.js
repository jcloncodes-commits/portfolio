import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist', // Ensure output directory is set to 'dist'
    sourcemap: false, // Optional: Disable sourcemaps for production
  },
})
