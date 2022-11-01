import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'srv')
    }
  },
  // 配置端口 转发
  server: {
    port: 8888,
    hmr: {
      // 热更新
      host: '127.0.0.1',
      port: 8888
    },
    // 设置代理
    proxy: {
      '/api': {
        target: '目标地址： https: // xxxx',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  },
  // 配置less全局样式
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";'
      }
    }
  }
});
