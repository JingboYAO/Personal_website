const { defineConfig } = require('vite');
const path = require('path');

module.exports = defineConfig({
  base: './', // Use relative paths for assets
  build: {
    target: 'es2019',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html')
      }
    },
    assetsInlineLimit: 4096, // 4kb
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-nesting'),
        require('autoprefixer')
      ]
    }
  }
});
