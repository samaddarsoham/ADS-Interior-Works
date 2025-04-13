import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // Base path for GitHub Pages
  // base: '/ADS-Interior-Works/',

  // For Vercel deployment, use root path
  base: '/',
})
