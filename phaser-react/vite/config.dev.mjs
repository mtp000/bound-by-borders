import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
    ],
    server: {
        proxy: {
          // Proxy requests starting with /api to the backend server
          '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true, // Changes the origin of the request to the target URL
            secure: false
          },
        },
      },
})
