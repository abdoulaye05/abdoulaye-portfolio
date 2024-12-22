import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_URL ||'/', // Chemin correspondant au nom du dépôt sur GitHub Pages
  build: {
    rollupOptions: {
      input: './index.html', // Spécifie le fichier d'entrée principal
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
      external: [
        '/abdoulaye-portfolio/assets/index-CtmMOE-6.js', // Ajoute les fichiers manquants ici
        '/abdoulaye-portfolio/assets/index-QklJJWgL.css',
      ],
    },
  },
});
