import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons()
      ],
      shortcuts: {
        'my-max-width': 'w-full max-w-2xl'
      }
    }),
  ],
})
