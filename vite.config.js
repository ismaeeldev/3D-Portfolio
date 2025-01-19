import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Keep this '/' for Vercel; change it for GitHub Pages if needed
});
