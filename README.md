# Jingbo YAO - Personal Website

A personal academic website for Jingbo YAO, PhD Candidate at HKUST.
Built with HTML, CSS (PostCSS + BEM), and vanilla JavaScript (ES Modules).
Configuration is managed via `config.js` and `style-dictionary.json`.

## Prerequisites

- Node.js (v18+)
- npm (v9+)

## Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   Access at `http://localhost:5173`.

## Build

To build for production:

```bash
npm run build
```

This will:
1. Generate CSS variables from `style-dictionary.json`.
2. Optimize images and generate WebP versions.
3. Bundle assets via Vite into `dist/`.

## Deployment

Push to the `main` branch to trigger GitHub Actions deployment:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

The site will be deployed to `https://jingboyao.github.io/`.

## Maintenance

### Updating Content
Modify `config.js` to update text, links, and profile information. No need to edit HTML.

### Updating Styles
Modify `style-dictionary.json` to update colors, fonts, and spacing.
Run `npm run dev` or `npm run build` to apply changes.

### Adding Images
Place new images in `assets/images/`.
Run `npm run build` to optimize them.
Reference them in code.

## Project Structure

```
Personal_website/
├── assets/
│   ├── css/          # Styles (Main + Components)
│   ├── js/           # Scripts (Components + Pages)
│   ├── images/       # Source images
│   └── fonts/        # WOFF2 fonts
├── scripts/          # Build scripts
├── config.js         # Content configuration
├── style-dictionary.json # Design tokens
├── index.html        # Home page shell
├── about.html        # About page shell
└── package.json      # Dependencies and scripts
```
