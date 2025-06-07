import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// 引入ElementPlus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
        AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    // 实际的路径转换
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
