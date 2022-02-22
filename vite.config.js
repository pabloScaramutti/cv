import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const base = "/cv/"

export default defineConfig({
  plugins: [react()], base
})
