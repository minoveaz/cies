import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://ciesclinica.com',
      dynamicRoutes: [
        '/implantes-dentales', 
        '/ortodoncia-invisible', 
        '/brackets', 
        '/estetica-dental',
        '/periodoncia',
        '/endodoncia',
        '/bruxismo',
        '/acido-hialuronico',
        '/sobre-nosotros',
        '/blog',
        '/contacto',
        '/privacidad',
        '/cookies'
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
