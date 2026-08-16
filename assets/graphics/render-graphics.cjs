const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const root = __dirname;

function svg(width, height, body) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .sans { font-family: "Segoe UI", Arial, sans-serif; }
        .label { font-weight: 700; letter-spacing: 2.2px; }
        .title { font-weight: 750; letter-spacing: -1px; }
        .body { font-weight: 450; }
        .meta { font-weight: 600; }
      </style>
      ${body}
    </svg>`);
}

async function renderHero() {
  const width = 1200;
  const height = 630;
  const overlay = svg(width, height, `
    <rect x="54" y="54" width="648" height="522" rx="28" fill="#04152c" fill-opacity="0.76" stroke="#55d8e8" stroke-opacity="0.22"/>
    <rect x="84" y="84" width="330" height="34" rx="17" fill="#c91e3a"/>
    <text x="249" y="107" text-anchor="middle" class="sans label" font-size="14" fill="#ffffff">INDEPENDENT • ARCHIVED FC0-U61 EDITION</text>
    <text x="84" y="180" class="sans title" font-size="43" fill="#ffffff">CompTIA IT Fundamentals (ITF+)</text>
    <text x="84" y="232" class="sans title" font-size="40" fill="#f5c76b">FC0-U61 Student Pocket Guide</text>
    <text x="84" y="299" class="sans body" font-size="24" fill="#dce9f5">
      <tspan x="84" dy="0">Learn the foundations. Practice the skills.</tspan>
      <tspan x="84" dy="34">Build digital confidence.</tspan>
    </text>
    <line x1="84" y1="390" x2="630" y2="390" stroke="#55d8e8" stroke-opacity="0.5"/>
    <text x="84" y="432" class="sans meta" font-size="20" fill="#ffffff">IT Education Nepal</text>
    <text x="84" y="462" class="sans body" font-size="18" fill="#c9d8e7">Nonprofit Learning Initiatives</text>
    <text x="84" y="518" class="sans meta" font-size="20" fill="#55d8e8">iteducationnepal.org</text>
  `);

  await sharp(path.join(root, 'itf-guide-hero-background.png'))
    .resize(width, height, { fit: 'cover', position: 'center' })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(root, 'itf-guide-readme-social-hero.png'));
}

async function renderMission() {
  const width = 1080;
  const height = 1080;
  const overlay = svg(width, height, `
    <rect x="62" y="70" width="700" height="565" rx="34" fill="#04152c" fill-opacity="0.80" stroke="#55d8e8" stroke-opacity="0.24"/>
    <rect x="98" y="108" width="190" height="40" rx="20" fill="#c91e3a"/>
    <text x="193" y="135" text-anchor="middle" class="sans label" font-size="17" fill="#ffffff">OUR MISSION</text>
    <text x="98" y="224" class="sans title" font-size="55" fill="#ffffff">
      <tspan x="98" dy="0">Make practical IT</tspan>
      <tspan x="98" dy="66">education clear,</tspan>
      <tspan x="98" dy="66">accessible, and useful.</tspan>
    </text>
    <text x="98" y="456" class="sans body" font-size="27" fill="#dce9f5">
      <tspan x="98" dy="0">For students, beginners, and</tspan>
      <tspan x="98" dy="39">non-technical professionals.</tspan>
    </text>
    <line x1="98" y1="558" x2="690" y2="558" stroke="#55d8e8" stroke-opacity="0.55"/>
    <text x="98" y="602" class="sans meta" font-size="21" fill="#55d8e8">IT EDUCATION NEPAL • NONPROFIT LEARNING INITIATIVES</text>
  `);

  await sharp(path.join(root, 'mission-background.png'))
    .resize(width, height, { fit: 'cover', position: 'center' })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(root, 'it-education-nepal-mission.png'));
}

async function renderVision() {
  const width = 1080;
  const height = 1080;
  const overlay = svg(width, height, `
    <rect x="62" y="70" width="610" height="570" rx="34" fill="#04152c" fill-opacity="0.82" stroke="#f5c76b" stroke-opacity="0.24"/>
    <rect x="98" y="108" width="170" height="40" rx="20" fill="#168fa1"/>
    <text x="183" y="135" text-anchor="middle" class="sans label" font-size="17" fill="#ffffff">OUR VISION</text>
    <text x="98" y="222" class="sans title" font-size="54" fill="#ffffff">
      <tspan x="98" dy="0">A world where</tspan>
      <tspan x="98" dy="65">every learner can</tspan>
      <tspan x="98" dy="65">understand</tspan>
      <tspan x="98" dy="65">technology.</tspan>
    </text>
    <text x="98" y="515" class="sans body" font-size="25" fill="#dce9f5">
      <tspan x="98" dy="0">Use it safely. Build a path into IT.</tspan>
    </text>
    <line x1="98" y1="570" x2="610" y2="570" stroke="#f5c76b" stroke-opacity="0.55"/>
    <text x="98" y="614" class="sans meta" font-size="24" fill="#55d8e8">iteducationnepal.org</text>
  `);

  await sharp(path.join(root, 'vision-background.png'))
    .resize(width, height, { fit: 'cover', position: 'center' })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(root, 'it-education-nepal-vision.png'));
}

async function main() {
  await Promise.all([renderHero(), renderMission(), renderVision()]);

  const manifest = {
    generatedAt: new Date().toISOString(),
    visualSystem: {
      palette: ['#04152c', '#c91e3a', '#168fa1', '#55d8e8', '#f5c76b', '#ffffff'],
      typography: 'Segoe UI with Arial fallback',
      note: 'Original image-generated backgrounds with deterministic text overlays. No CompTIA logo is used.'
    },
    assets: [
      {
        file: 'itf-guide-readme-social-hero.png',
        dimensions: '1200x630',
        use: 'GitHub README hero, GitHub social preview, LinkedIn or Facebook link graphic'
      },
      {
        file: 'it-education-nepal-mission.png',
        dimensions: '1080x1080',
        use: 'Mission section and square social post'
      },
      {
        file: 'it-education-nepal-vision.png',
        dimensions: '1080x1080',
        use: 'Vision section and square social post'
      }
    ]
  };

  fs.writeFileSync(path.join(root, 'graphics-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
