const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const path = require('path');

const imagesDir = path.resolve(__dirname, '../assets/images');

(async () => {
  // Optimize JPEGs and PNGs
  await imagemin([`${imagesDir}/*.{jpg,png}`], {
    destination: imagesDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  console.log('Optimized JPG/PNG images.');

  // Convert to WebP
  await imagemin([`${imagesDir}/*.{jpg,png}`], {
    destination: imagesDir,
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });
  console.log('Generated WebP images.');
})();
