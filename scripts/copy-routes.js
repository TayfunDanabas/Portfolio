const fs = require('fs');

const dist = 'dist/portfolio/browser';
const routes = ['impressum', 'datenschutz'];

for (const route of routes) {
  fs.mkdirSync(`${dist}/${route}`, { recursive: true });
  fs.copyFileSync(`${dist}/index.html`, `${dist}/${route}/index.html`);
}
