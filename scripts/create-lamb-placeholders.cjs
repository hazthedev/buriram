const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

const imageConfigs = [
  { name: 'hero-lamb-ribs', label: 'ROAST LAMB RIBS', color: '#A8261A', icon: 'flame' },
  { name: 'lamb-specialty', label: 'LAMB SPECIALTY', color: '#C9A24E', icon: 'lamb' },
  { name: 'xinjiang-landscape', label: 'XINJIANG', color: '#2D4566', icon: 'mountain' },
  { name: 'origin', label: 'OUR STORY', color: '#6B5544', icon: 'chef' },
  { name: 'interior-1', label: 'INTERIOR', color: '#2D1F18', icon: 'restaurant' },
  { name: 'interior-2', label: 'DINING', color: '#C9A24E', icon: 'table' },
  { name: 'interior-3', label: 'DETAILS', color: '#A8261A', icon: 'spice' },
  { name: 'og-image', label: 'LAMB SHEPHERD', color: '#2D1F18', icon: 'brand' },
  { name: 'plate-placeholder', label: 'DISH', color: '#6B5544', icon: 'plate' },
  // Menu items
  { name: 'bowls/roast-lamb-ribs', label: '烤羊排', color: '#A8261A', icon: 'ribs' },
  { name: 'bowls/lamb-short-ribs', label: '羊小排', color: '#C9A24E', icon: 'ribs' },
  { name: 'bowls/lamb-chops', label: '羊排', color: '#E8B838', icon: 'chop' },
  { name: 'bowls/spiced-beef', label: '五香牛肉', color: '#2D4566', icon: 'beef' },
  { name: 'bowls/beef-kebab', label: '牛肉串', color: '#A8261A', icon: 'skewer' },
  { name: 'bowls/dumplings-chili-oil', label: '红油水饺', color: '#C9A24E', icon: 'dumpling' },
  { name: 'bowls/hand-pulled-noodles', label: '拉面', color: '#2D1F18', icon: 'noodle' },
  { name: 'bowls/beef-fried-rice', label: '牛肉炒饭', color: '#6B5544', icon: 'rice' },
  { name: 'bowls/lamb-pilaf', label: '羊肉抓饭', color: '#E8B838', icon: 'pilaf' },
  { name: 'bowls/smashed-cucumber', label: '拍黄瓜', color: '#2D4566', icon: 'cucumber' },
  { name: 'bowls/stir-fried-greens', label: '炒时蔬', color: '#C9A24E', icon: 'greens' },
  { name: 'bowls/hawthorn-plum', label: '山楂梅子', color: '#A8261A', icon: 'drink' },
  { name: 'bowls/jasmine-tea', label: '茉莉花茶', color: '#2D1F18', icon: 'tea' },
  { name: 'bowls/soy-milk', label: '豆浆', color: '#6B5544', icon: 'milk' },
];

function getIconSVG(icon, size, color) {
  const icons = {
    flame: `<path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z" fill="${color}" opacity="0.8"/>`,
    lamb: `<circle cx="12" cy="10" r="4" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M8 14c0-2 2-4 4-4s4 2 4 4" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M10 18h4" stroke="${color}" stroke-width="1.5"/>`,
    mountain: `<path d="M2 20L8 8l4 6 4-8 6 14H2z" fill="${color}" opacity="0.6"/>`,
    chef: `<circle cx="12" cy="8" r="3" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M8 14c0-2 2-3 4-3s4 1 4 3" fill="none" stroke="${color}" stroke-width="1.5"/>`,
    restaurant: `<rect x="4" y="8" width="16" height="10" rx="1" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M4 12h16" stroke="${color}" stroke-width="1"/>`,
    table: `<rect x="6" y="10" width="12" height="8" rx="1" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M6 14h12" stroke="${color}" stroke-width="1"/>`,
    spice: `<circle cx="12" cy="12" r="6" fill="none" stroke="${color}" stroke-width="1.5"/><circle cx="10" cy="10" r="1" fill="${color}"/><circle cx="14" cy="11" r="1" fill="${color}"/><circle cx="12" cy="14" r="1" fill="${color}"/>`,
    brand: `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-family="serif" font-size="16" font-weight="bold">LS</text>`,
    plate: `<circle cx="12" cy="12" r="7" fill="none" stroke="${color}" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="${color}" stroke-width="1" opacity="0.5"/>`,
    ribs: `<path d="M6 16c2-4 4-8 6-8s4 4 6 8" fill="none" stroke="${color}" stroke-width="2"/><path d="M8 14l2-4M12 12l2-4M16 14l2-4" stroke="${color}" stroke-width="1.5"/>`,
    chop: `<rect x="8" y="6" width="8" height="12" rx="2" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M10 10h4M10 14h4" stroke="${color}" stroke-width="1"/>`,
    beef: `<ellipse cx="12" cy="12" rx="6" ry="4" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M8 12h8" stroke="${color}" stroke-width="1"/>`,
    skewer: `<line x1="12" y1="4" x2="12" y2="20" stroke="${color}" stroke-width="2"/><circle cx="12" cy="8" r="2" fill="${color}" opacity="0.6"/><circle cx="12" cy="14" r="2" fill="${color}" opacity="0.6"/>`,
    dumpling: `<path d="M6 14c0-4 3-6 6-6s6 2 6 6" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M6 14c2-1 4-1 6 0s4 1 6 0" stroke="${color}" stroke-width="1"/>`,
    noodle: `<path d="M6 10c2 2 4 0 6 2s4 0 6 2" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M6 14c2 2 4 0 6 2s4 0 6 2" fill="none" stroke="${color}" stroke-width="1.5"/>`,
    rice: `<rect x="6" y="8" width="12" height="10" rx="1" fill="none" stroke="${color}" stroke-width="1.5"/><circle cx="9" cy="12" r="1" fill="${color}" opacity="0.4"/><circle cx="15" cy="14" r="1" fill="${color}" opacity="0.4"/>`,
    pilaf: `<path d="M6 16c0-4 3-6 6-6s6 2 6 6" fill="none" stroke="${color}" stroke-width="1.5"/><circle cx="10" cy="13" r="1" fill="${color}" opacity="0.5"/><circle cx="14" cy="12" r="1" fill="${color}" opacity="0.5"/>`,
    cucumber: `<ellipse cx="12" cy="12" rx="5" ry="3" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M8 12h8" stroke="${color}" stroke-width="1"/>`,
    greens: `<path d="M8 16c0-4 2-8 4-8s4 4 4 8" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M10 14l2-4M14 14l-2-4" stroke="${color}" stroke-width="1"/>`,
    drink: `<path d="M8 6h8l-1 12H9L8 6z" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M7 6h10" stroke="${color}" stroke-width="1.5"/>`,
    tea: `<path d="M7 8h10v8a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8z" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M17 10h1a2 2 0 0 1 0 4h-1" stroke="${color}" stroke-width="1.5"/>`,
    milk: `<path d="M8 6h8l-1 14H9L8 6z" fill="none" stroke="${color}" stroke-width="1.5"/><path d="M7 6h10" stroke="${color}" stroke-width="1.5"/><path d="M10 10h4" stroke="${color}" stroke-width="1"/>`,
  };
  return icons[icon] || icons.plate;
}

function generatePlaceholderSVG(width, height, label, color, icon) {
  const iconSVG = getIconSVG(icon, 24, color);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="${color}"/>
    <rect x="${width*0.08}" y="${height*0.08}" width="${width*0.84}" height="${height*0.84}" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" rx="8"/>
    <g transform="translate(${width/2 - 12}, ${height/2 - 28})">
      ${iconSVG}
    </g>
    <text x="50%" y="${height * 0.65}" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-family="'Noto Serif SC', serif" font-size="${Math.min(width, height) * 0.07}" font-weight="500">${label}</text>
    <text x="50%" y="${height * 0.78}" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.04}">Lamb Shepherd</text>
  </svg>`;
}

imageConfigs.forEach(config => {
  const fullPath = path.join(imagesDir, config.name + '.svg');
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const isSquare = config.name.includes('bowls/');
  const width = isSquare ? 600 : 1200;
  const height = isSquare ? 600 : 800;
  
  const svg = generatePlaceholderSVG(width, height, config.label, config.color, config.icon);
  fs.writeFileSync(fullPath, svg);
  console.log(`Created: ${config.name}.svg`);
});

console.log('\nAll placeholder images created successfully!');
