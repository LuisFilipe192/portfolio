import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Se o repositório se chamar "portfolio", use "/portfolio/".
  // Se publicar em https://SEU-USUARIO.github.io/, mantenha "/".
  base: '/',
})