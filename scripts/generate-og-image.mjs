import sharp from "sharp";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "og-image.png");
const logoPath = path.join(__dirname, "..", "assets", "square-logo-transparent-bg.png");

// Base64-encode the logo for SVG embedding
const logoBase64 = fs.readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoBase64}`;

// 1200x630 is the standard OG image size
const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${width}" height="${height}" fill="#0F3D2E"/>

  <!-- Geometric lattice texture (subtle) -->
  <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/>
  <line x1="200" y1="0" x2="${width}" y2="${height - 100}" stroke="rgba(255,255,255,0.015)" stroke-width="0.5"/>
  <line x1="400" y1="0" x2="${width}" y2="${height - 200}" stroke="rgba(255,255,255,0.015)" stroke-width="0.5"/>
  <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="rgba(255,255,255,0.02)" stroke-width="0.5"/>
  <line x1="${width - 200}" y1="0" x2="0" y2="${height - 100}" stroke="rgba(255,255,255,0.015)" stroke-width="0.5"/>
  <line x1="${width - 400}" y1="0" x2="0" y2="${height - 200}" stroke="rgba(255,255,255,0.015)" stroke-width="0.5"/>

  <!-- Gold rule top -->
  <rect x="568" y="160" width="64" height="3" rx="1.5" fill="#C9A24A" opacity="0.6"/>

  <!-- Logo -->
  <image href="${logoDataUri}" x="556" y="180" width="88" height="88"/>

  <!-- Title -->
  <text x="600" y="320" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="600" fill="white" letter-spacing="-0.5">Mahdavia Data Management System</text>

  <!-- Subtitle -->
  <text x="600" y="370" text-anchor="middle" font-family="'Segoe UI', system-ui, sans-serif" font-size="22" fill="rgba(255,255,255,0.7)">Serving the Mahdavia Community Through Technology</text>

  <!-- Bottom gold gradient line -->
  <defs>
    <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C9A24A" stop-opacity="0"/>
      <stop offset="50%" stop-color="#C9A24A" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#C9A24A" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0" y="${height - 3}" width="${width}" height="3" fill="url(#goldLine)"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`OG image generated: ${outPath}`);
