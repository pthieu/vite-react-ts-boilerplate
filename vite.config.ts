import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  resolve: {
    alias: {
      public: './public',
      '@': './src',
      layouts: './src/layouts',
      pages: './src/pages',
      components: './src/components',
      services: './src/services',
      store: './src/store',
    },
  },
});
