import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost/databases', // Указываем целевой сервер
        changeOrigin: true, // Изменяем заголовок Origin на целевой сервер
        rewrite: (path) => path.replace(/^\/api/, '/api') // Сохраняем /api в пути
      }
    }
  }
})
