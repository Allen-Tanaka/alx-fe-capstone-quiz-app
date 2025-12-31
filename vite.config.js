import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'devserver-main--stalwart-dango-a7ec09.netlify.app',
    ],
  },
})
