import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    // Use esbuild instead of terser (faster and built-in)
    minify: 'esbuild',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          firebase: ['firebase/app', 'firebase/storage'],
          slick: ['react-slick', 'slick-carousel']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Optimize CSS
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: 'es2015',
    // Increase chunk size limit for better caching
    assetsInlineLimit: 4096
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'firebase/app', 'firebase/storage']
  }
});
