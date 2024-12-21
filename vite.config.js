import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/abdoulaye-portfolio/', // Chemin relatif pour GitHub Pages
});
