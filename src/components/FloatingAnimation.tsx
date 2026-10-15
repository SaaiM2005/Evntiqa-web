import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[5];
uniform int uColorCount;
uniform vec2 uResolution;
uniform float uBlend;
uniform float uInvertY;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[5];
  if (uColorCount == 5) {
    colors[0] = ColorStop(uColorStops[0], 0.0);
    colors[1] = ColorStop(uColorStops[1], 0.22);
    colors[2] = ColorStop(uColorStops[2], 0.50);
    colors[3] = ColorStop(uColorStops[3], 0.78);
    colors[4] = ColorStop(uColorStops[4], 1.0);
  } else {
    colors[0] = ColorStop(uColorStops[0], 0.0);
    colors[1] = ColorStop(uColorStops[1], 0.5);
    colors[2] = ColorStop(uColorStops[2], 1.0);
    colors[3] = ColorStop(uColorStops[2], 1.0);
    colors[4] = ColorStop(uColorStops[2], 1.0);
  }
  
  int maxIndex = (uColorCount == 5) ? 4 : 2;
  int index = 0;
  for (int i = 0; i < 4; i++) {
    if (i < maxIndex && colors[i].position <= uv.x) {
      index = i;
    }
  }
  
  ColorStop currentColor = colors[index];
  ColorStop nextColor = colors[index + 1];
  float range = max(nextColor.position - currentColor.position, 0.001);
  float lerpFactor = clamp((uv.x - currentColor.position) / range, 0.0, 1.0);
  vec3 rampColor = mix(currentColor.color, nextColor.color, lerpFactor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  
  // Invert Y so the gradient emerges from the bottom instead of the top
  float yCoord = mix(uv.y, 1.0 - uv.y, uInvertY);
  height = (yCoord * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float animationAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 finalColor = rampColor;
  
  fragColor = vec4(finalColor * animationAlpha, animationAlpha);
}
`;

function parseColor(color?: string, defaultColor: [number, number, number] = [1, 0, 0]): [number, number, number] {
  if (!color) return defaultColor;
  const cleanColor = color.trim();
  if (cleanColor.startsWith('#')) {
    const hex = cleanColor.length === 4
      ? '#' + cleanColor[1] + cleanColor[1] + cleanColor[2] + cleanColor[2] + cleanColor[3] + cleanColor[3]
      : cleanColor;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ];
    }
  }
  const rgbMatch = cleanColor.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1], 10) / 255,
      parseInt(rgbMatch[2], 10) / 255,
      parseInt(rgbMatch[3], 10) / 255,
    ];
  }
  return defaultColor;
}

export interface FloatingAnimationProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  invertY?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const FloatingAnimation: React.FC<FloatingAnimationProps> = ({
  colorStops = ['#FF7545', '#FCE5D9', '#FAF8F5', '#FCE5D9', '#FF7545'],
  amplitude = 1,
  blend = 0.5,
  speed = 1,
  invertY = true,
  className = '',
  style = {},
}) => {
  const propsRef = useRef({ colorStops, amplitude, blend, speed, invertY });
  propsRef.current = { colorStops, amplitude, blend, speed, invertY };

  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    let renderer: Renderer | null = null;
    try {
      renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: true,
        antialias: true,
      });
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      return;
    }

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    gl.canvas.style.backgroundColor = 'transparent';

    const geometry = new Triangle(gl);
    if ((geometry.attributes as Record<string, unknown>).uv) {
      delete (geometry.attributes as Record<string, unknown>).uv;
    }

    const defaultColors: [number, number, number][] = [
      [1.0, 0.46, 0.27],  // #FF7545 (Left corner glow)
      [0.99, 0.90, 0.85], // #FCE5D9 (Left-mid peach)
      [0.98, 0.97, 0.96], // #FAF8F5 (Clean ivory center)
      [0.99, 0.90, 0.85], // #FCE5D9 (Right-mid peach)
      [1.0, 0.46, 0.27],  // #FF7545 (Right corner glow)
    ];

    const stops = propsRef.current.colorStops || colorStops;
    const count = stops.length >= 5 ? 5 : 3;
    const colorStopsArray = (stops || []).slice(0, 5).map((color, index) =>
      parseColor(color, defaultColors[index] || [1, 0, 0])
    );
    while (colorStopsArray.length < 5) {
      colorStopsArray.push(colorStopsArray[colorStopsArray.length - 1]);
    }

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uColorCount: { value: count },
        uResolution: { value: [ctn.offsetWidth || 1, ctn.offsetHeight || 1] },
        uBlend: { value: blend },
        uInvertY: { value: invertY ? 1.0 : 0.0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    function resize() {
      if (!ctn || !renderer || !program) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      if (width === 0 || height === 0) return;

      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];

      const baseHeight = 800;
      const currentHeight = height || 1;
      const scaleFactor = baseHeight / currentHeight;
      const baseAmp = propsRef.current.amplitude ?? amplitude;
      program.uniforms.uAmplitude.value = baseAmp * scaleFactor;

      renderer.render({ scene: mesh });
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(ctn);

    // Initial sizing and render
    resize();

    // Check for user reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animateId = 0;

    if (!mediaQuery.matches) {
      const update = (t: number) => {
        animateId = requestAnimationFrame(update);
        const currentProps = propsRef.current;
        const time = t * 0.001 * (currentProps.speed ?? speed);

        if (program && ctn && renderer) {
          program.uniforms.uTime.value = time;
          const baseHeight = 800;
          const currentHeight = ctn.offsetHeight || 1;
          const scaleFactor = baseHeight / currentHeight;
          const baseAmp = currentProps.amplitude ?? amplitude;
          program.uniforms.uAmplitude.value = baseAmp * scaleFactor;
          program.uniforms.uBlend.value = currentProps.blend ?? blend;
          program.uniforms.uInvertY.value = (currentProps.invertY ?? invertY) ? 1.0 : 0.0;

          const activeStops = currentProps.colorStops || colorStops;
          if (activeStops && Array.isArray(activeStops)) {
            const countStops = activeStops.length >= 5 ? 5 : 3;
            program.uniforms.uColorCount.value = countStops;
            const newColorStops = activeStops.slice(0, 5).map((c, i) =>
              parseColor(c, defaultColors[i] || [1, 0, 0])
            );
            while (newColorStops.length < 5) {
              newColorStops.push(newColorStops[newColorStops.length - 1]);
            }
            program.uniforms.uColorStops.value = newColorStops;
          }

          renderer.render({ scene: mesh });
        }
      };

      animateId = requestAnimationFrame(update);
    }

    return () => {
      if (animateId) cancelAnimationFrame(animateId);
      resizeObserver.disconnect();
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <div
      ref={ctnDom}
      className={`relative w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

export default FloatingAnimation;
