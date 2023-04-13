import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'src',
  publicDir: './public',
  build: {
    outDir: '../dist'
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {}
      }
    }),
    react({
      include: '**/*.{jsx,tsx}'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  }
});
