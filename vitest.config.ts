/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import magicalSvg from 'vite-plugin-magical-svg';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), magicalSvg({ target: 'react' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.tsx'],
  },
  resolve: {
    alias: {
      '@': __dirname + '/src',
      '@public': __dirname + '/public',
    },
  },
});
