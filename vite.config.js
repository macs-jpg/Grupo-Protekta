import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuración de Vite: le decimos que use React y Tailwind.
// No necesitas tocar este archivo casi nunca.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
