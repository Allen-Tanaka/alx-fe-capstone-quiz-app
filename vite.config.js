import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use a relative base in production so Netlify preview and subpath previews work.
  base: mode === 'production' ? './' : '/',
  server: {
    allowedHosts: [
      'allow-all',
    ],
  },
}))
