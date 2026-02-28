import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/wp-content/themes/daigen-corporate/assets/',
  build: {
    outDir: resolve(__dirname, 'assets'),
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/js/app.js'),
        style: resolve(__dirname, 'src/scss/style.scss')
      },
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) return 'css/[name].css';
          return 'img/[name].[ext]';
        }
      }
    }
  }
});
