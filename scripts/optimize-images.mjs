import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../assets/images');

// Normalize path for glob (replace backslashes with forward slashes)
const globPattern = path.join(imagesDir, '*.{jpg,png}').replace(/\\/g, '/');

(async () => {
  console.log(`Optimizing images in ${imagesDir}...`);
  
  try {
    // Optimize JPEGs and PNGs
    await imagemin([globPattern], {
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
    await imagemin([globPattern], {
      destination: imagesDir,
      plugins: [
        imageminWebp({ quality: 75 })
      ]
    });
    console.log('Generated WebP images.');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
})();
