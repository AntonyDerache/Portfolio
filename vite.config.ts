import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: [
      {
        find: "@", replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  server: {
    port: 3000,
  },
});
