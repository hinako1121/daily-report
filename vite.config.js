import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',  // ベースパスをルートに変更
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        history: resolve(__dirname, 'history.html')  // パスを修正
      }
    },
    emptyOutDir: true
  },
  publicDir: 'public',
  assetsInclude: ['**/*.css'],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    // CSSをグローバルに適用
    postcss: {
      plugins: []
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
