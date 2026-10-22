import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-libs';
          }
          if (id.includes('src/locales/parts')) {
            const match = id.match(/src\/locales\/parts\/([a-z]{2})/i);
            return match ? `parts-${match[1]}` : 'parts-misc';
          }
          if (id.includes('src/locales')) {
            const match = id.match(/src\/locales\/(industry\/)?([a-z]{2})\.js/i);
            return match ? `locale-${match[2]}` : 'data-locales';
          }
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
  server: {
    proxy: {
      '/admin-api': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,
      },
    },
  },
});
