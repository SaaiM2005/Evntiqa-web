export interface CardStepData {
  step: string;
  title: string;
  description: string;
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = words[0] || '';

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + ' ' + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Generates an ultra-crisp 2x minimal card canvas for WebGL texture upload
 */
export function renderStepCardCanvas(
  data: CardStepData,
  theme: 'dark' | 'light' = 'dark'
): HTMLCanvasElement {
  const width = 1000;
  const height = 620;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const isDark = theme === 'dark';
  const paddingX = 68;
  const innerWidth = width - paddingX * 2;
  const stepNum = parseInt(data.step, 10) || 1;

  // 1. Base card surface (rounded rectangle)
  roundRect(ctx, 4, 4, width - 8, height - 8, 36);

  if (isDark) {
    // Rich midnight slate gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#0F172A');
    bgGrad.addColorStop(0.5, '#0B1120');
    bgGrad.addColorStop(1, '#070C16');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Subtle radial glow from top-left
    const glowGrad = ctx.createRadialGradient(80, 80, 10, 80, 80, 420);
    glowGrad.addColorStop(0, 'rgba(255, 90, 31, 0.09)');
    glowGrad.addColorStop(0.6, 'rgba(255, 90, 31, 0.02)');
    glowGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = glowGrad;
    ctx.fill();

    // Subtle crisp border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
  } else {
    // Pure ivory card surface
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    // Subtle warm border
    ctx.strokeStyle = '#E5DFD4';
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  // 2. Large subtle watermark number in background
  ctx.save();
  ctx.font = '800 160px "Montserrat", -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.025)';
  ctx.fillText(data.step, width - paddingX, 60);
  ctx.restore();

  // 3. Top Row: Step Label (Simple clean typography, no icon or badge)
  ctx.save();
  ctx.font = '700 26px "Plus Jakarta Sans", "Montserrat", system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = isDark ? '#FF7A45' : '#FF5A1F';
  ctx.fillText(`STEP ${data.step}`, paddingX, 74);
  ctx.restore();

  // 4. Top Right: Minimal Step Progress Counter
  ctx.save();
  ctx.font = '600 20px "Plus Jakarta Sans", "Montserrat", system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.35)' : '#8E8A82';
  ctx.fillText(`${data.step} / 06`, width - paddingX, 74);
  ctx.restore();

  // 5. Subtle horizontal divider
  ctx.save();
  const lineY = 126;
  const lineGrad = ctx.createLinearGradient(paddingX, lineY, width - paddingX, lineY);
  if (isDark) {
    lineGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
    lineGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.04)');
    lineGrad.addColorStop(1, 'transparent');
  } else {
    lineGrad.addColorStop(0, '#EAE6DF');
    lineGrad.addColorStop(0.7, '#F2EFEB');
    lineGrad.addColorStop(1, 'transparent');
  }
  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(paddingX, lineY);
  ctx.lineTo(width - paddingX, lineY);
  ctx.stroke();
  ctx.restore();

  // 6. Title (Bold Executive Heading)
  ctx.save();
  ctx.font = '700 38px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = isDark ? '#FFFFFF' : '#101D32';

  const titleLines = wrapText(ctx, data.title, innerWidth);
  const titleLineHeight = 48;
  const titleStartY = 176;

  titleLines.forEach((line, index) => {
    ctx.fillText(line, paddingX, titleStartY + index * titleLineHeight);
  });
  ctx.restore();

  // 7. Description (Crisp, High-Legibility Body)
  ctx.save();
  ctx.font = '400 23px "Inter", system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = isDark ? '#94A3B8' : '#575550';

  const descStartY = titleStartY + titleLines.length * titleLineHeight + 28;
  const descLineHeight = 36;
  const descLines = wrapText(ctx, data.description, innerWidth);

  descLines.forEach((line, index) => {
    ctx.fillText(line, paddingX, descStartY + index * descLineHeight);
  });
  ctx.restore();

  // 8. Bottom Minimal Progress Line
  ctx.save();
  const trackY = height - 48;
  const trackH = 4;
  const trackW = innerWidth;

  // Background track
  roundRect(ctx, paddingX, trackY, trackW, trackH, 2);
  ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.07)' : '#EAE6DF';
  ctx.fill();

  // Active progress fill
  const fillW = Math.max(20, (stepNum / 6) * trackW);
  roundRect(ctx, paddingX, trackY, fillW, trackH, 2);
  const fillGrad = ctx.createLinearGradient(paddingX, trackY, paddingX + fillW, trackY);
  fillGrad.addColorStop(0, '#FF5A1F');
  fillGrad.addColorStop(1, '#FF8A4C');
  ctx.fillStyle = fillGrad;
  ctx.fill();
  ctx.restore();

  return canvas;
}
