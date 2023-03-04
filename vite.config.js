import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'CONVERT3R - Zahlensysteme',
        short_name: 'CONVERT3R',
        description: 'CONVERT3R wandelt Zahlen und Zeichen in andere Zahlensystem bzw. ASCII-Zeichen um.',
        theme_color: '#541ad9',
        icons: [
          {
            src: '/image/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/image/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/image/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      } 
    })
  ],
})
