import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      VueRouter({
      // where your pages live, e.g.
      routesFolder: 'src/pages',
      dts: 'src/typed-router.d.ts', // where to emit the types
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
