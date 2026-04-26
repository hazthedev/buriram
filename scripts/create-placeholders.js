const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

const imagePaths = [
  'hero-bowls.jpg',
  'concept-bowls.jpg',
  'buriram-province.jpg',
  'drinks.jpg',
  'origin.jpg',
  'isan-landscape.jpg',
  'interior-1.jpg',
  'interior-2.jpg',
  'interior-3.jpg',
  'bowl-placeholder.jpg',
  'og-image.jpg',
  'bowls/somtum.jpg',
  'bowls/larb-gai.jpg',
  'bowls/yum-woonsen.jpg',
  'bowls/tom-yum-goong.jpg',
  'bowls/tom-kha-gai.jpg',
  'bowls/pad-kra-pao.jpg',
  'bowls/pad-phet.jpg',
  'bowls/green-curry.jpg',
  'bowls/massaman-curry.jpg',
  'bowls/gai-yang.jpg',
  'bowls/moo-ping.jpg',
  'bowls/pad-thai.jpg',
  'bowls/khao-pad.jpg',
  'bowls/sticky-rice.jpg',
  'bowls/jasmine-rice.jpg',
  'bowls/thai-milk-tea.jpg',
  'bowls/thai-green-tea.jpg',
  'bowls/lime-soda.jpg',
  'bowls/mango-sticky-rice.jpg',
];

function generatePlaceholderSVG(width, height, label, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="${color}"/>
    <rect x="${width*0.1}" y="${height*0.1}" width="${width*0.8}" height="${height*0.8}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" rx="8"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.06}">${label}</text>
  </svg>`;
}

const colors = [
  '#C7301B', '#3B5A8A', '#7A9A6E', '#D9A441', '#1F2540', '#5C6178'
];

imagePaths.forEach((imgPath, index) => {
  const fullPath = path.join(imagesDir, imgPath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const isSquare = imgPath.startsWith('bowls/');
  const width = isSquare ? 600 : 1200;
  const height = isSquare ? 600 : 800;
  const label = imgPath.replace(/-/g, ' ').replace('.jpg', '').replace('bowls/', '');
  const color = colors[index % colors.length];
  
  const svg = generatePlaceholderSVG(width, height, label.toUpperCase(), color);
  fs.writeFileSync(fullPath.replace('.jpg', '.svg'), svg);
});

console.log('Placeholder images created successfully!');
