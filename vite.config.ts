import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const pages = (globalThis as { process?: { env?: { PAGES?: string } } }).process?.env?.PAGES === 'true'

export default defineConfig({
  base: pages ? '/genesis/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/content/lessons/')) return 'lessons'
          if (id.includes('/content/questions/')) return 'questions'
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/test/setup.ts',
  },
})
