import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import biomePlugin from 'vite-plugin-biome'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), biomePlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
