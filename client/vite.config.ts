// vite.config.ts
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig(({ command }) => {
  const config: UserConfig = {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      ...(command === 'build'
        ? [
            Sitemap({
              hostname: 'https://kyle-white.com',
              dynamicRoutes: ['/', '/personal'],
              generateRobotsTxt: true,
            }),
          ]
        : []),
    ],
    server: { proxy: { '/api': 'http://localhost:3001' } },
  }
  return config
})
