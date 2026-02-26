const fs = require('fs');
const path = require('path');

const tokensPath = path.resolve(__dirname, '../style-dictionary.json');
const outputPath = path.resolve(__dirname, '../assets/css/variables.css');

if (!fs.existsSync(tokensPath)) {
  console.error('style-dictionary.json not found!');
  process.exit(1);
}

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

function flattenTokens(obj, prefix = '') {
  let css = '';
  for (const key in obj) {
    if (obj[key] && typeof obj[key].value !== 'undefined') {
      css += `  --${prefix}${key}: ${obj[key].value};\n`;
    } else if (typeof obj[key] === 'object') {
      css += flattenTokens(obj[key], `${prefix}${key}-`);
    }
  }
  return css;
}

const cssContent = `:root {\n${flattenTokens(tokens)}}\n`;

const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, cssContent);
console.log(`Generated CSS variables at ${outputPath}`);
