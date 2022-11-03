import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite'; // 用于自动引入组件样式
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, 'src');
export default defineConfig({
  // 打包地址
  base: './',
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
  // 别名
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(pathSrc, 'auto-import.d.ts')
    }),
    Components({
      resolvers: [
        // 自动注册 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      dts: path.resolve(pathSrc, 'comments.d.ts')
    }),
    Icons({
      autoInstall: true
    })
  ],
  // 配置less全局样式
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";'
      }
    }
  },
  build: {
    minify: 'terser',
    target: 'es2015',
    brotliSize: false, // 默认为true 是否计算包的大小
    chunkSizeWarningLimit: 2000, // chunk大小警告限制
    // 生产环境去除console debugger等
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
