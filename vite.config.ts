import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    // Relative to the root
    outDir: './build'
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {}
      }
    }),
    react({
      // Use React plugin in all *.jsx and *.tsx files
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
