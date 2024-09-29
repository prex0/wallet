import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      injectRegister: 'auto',
      manifest: {
        name: 'Prex Wallet',
        short_name: 'PrexWallet',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      plugins: [react(), visualizer()],

      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "@prex0/uikit"]
        },
      },
    },
  },
})