import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  wave: {
    x: number;
    y: number;
  };
  cursor: {
    x: number;
    y: number;
    vx: number;
    vy: number;
  };
}

interface PointCoords {
  x: number;
  y: number;
}

interface BlockProps {
  /** @description id: line-color-id | type: color | visible: true */
  lineColor?: string;
  /** @description id: line-width-id | type: number | visible: true */
  lineWidth?: number;
  /** @description id: x-gap-id | type: number | visible: true */
  xGap?: number;
  /** @description id: y-gap-id | type: number | visible: true */
  yGap?: number;
  /** @description id: wave-strength-id | type: number | visible: true */
  waveStrength?: number;
  /** @description id: cursor-radius-id | type: number | visible: true */
  cursorRadius?: number;
  /** @description id: cursor-strength-id | type: number | visible: true */
  cursorStrength?: number;
  /** @description id: wave-speed-id | type: number | visible: true */
  waveSpeed?: number;
}

// Simple noise function implementation
function noise(x: number, y: number): number {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;

  x -= Math.floor(x);
  y -= Math.floor(y);

  const u = fade(x);
  const v = fade(y);

  const A = (Math.sin(X * 12.9898 + Y * 78.233) * 43758.5453) % 1;
  const B = (Math.sin((X + 1) * 12.9898 + Y * 78.233) * 43758.5453) % 1;
  const C = (Math.sin(X * 12.9898 + (Y + 1) * 78.233) * 43758.5453) % 1;
  const D = (Math.sin((X + 1) * 12.9898 + (Y + 1) * 78.233) * 43758.5453) % 1;

  return lerp(lerp(A, B, u), lerp(C, D, u), v);
}

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(t: number, a: number, b: number): number {
  return a + t * (b - a);
}

export default function WavyLines({
  lineColor = '#000000',
  lineWidth = 1,
  xGap = 10,
  yGap = 32,
  waveStrength = 32,
  cursorRadius = 175,
  cursorStrength = 0.00065,
  waveSpeed = 0.0125,
}: BlockProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });
  const linesRef = useRef<Point[][]>([]);
  const boundingRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      boundingRef.current = canvas.getBoundingClientRect();
      canvas.width = boundingRef.current.width;
      canvas.height = boundingRef.current.height;
    };

    const setLines = () => {
      const { width, height } = boundingRef.current!;
      linesRef.current = [];

      const oWidth = width + 200;
      const oHeight = height + 30;

      const totalLines = Math.ceil(oWidth / xGap);
      const totalPoints = Math.ceil(oHeight / yGap);

      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;

      for (let i = 0; i <= totalLines; i++) {
        const points: Point[] = [];

        for (let j = 0; j <= totalPoints; j++) {
          const point: Point = {
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          };

          points.push(point);
        }

        linesRef.current.push(points);
      }
    };

    const movePoints = (time: number) => {
      const lines = linesRef.current;
      const mouse = mouseRef.current;

      lines.forEach((points: Point[]) => {
        points.forEach((p: Point) => {
          // Wave movement
          const move = noise((p.x + time * waveSpeed) * 0.002, (p.y + time * 0.005) * 0.0015) * 12;
          p.wave.x = Math.cos(move) * waveStrength;
          p.wave.y = Math.sin(move) * (waveStrength / 2);

          // Mouse effect
          const dx = p.x - mouse.sx;
          const dy = p.y - mouse.sy;
          const d = Math.hypot(dx, dy);
          const l = Math.max(cursorRadius, mouse.vs);

          if (d < l) {
            const s = 1 - d / l;
            const f = Math.cos(d * 0.001) * s;

            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * cursorStrength;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * cursorStrength;
          }

          p.cursor.vx += (0 - p.cursor.x) * 0.005; // String tension
          p.cursor.vy += (0 - p.cursor.y) * 0.005;

          p.cursor.vx *= 0.925; // Friction/duration
          p.cursor.vy *= 0.925;

          p.cursor.x += p.cursor.vx * 2; // Strength
          p.cursor.y += p.cursor.vy * 2;

          p.cursor.x = Math.min(100, Math.max(-100, p.cursor.x)); // Clamp movement
          p.cursor.y = Math.min(100, Math.max(-100, p.cursor.y));
        });
      });
    };

    const moved = (point: Point, withCursorForce = true): PointCoords => {
      const coords: PointCoords = {
        x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
        y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
      };

      // Round to 2 decimals
      coords.x = Math.round(coords.x * 10) / 10;
      coords.y = Math.round(coords.y * 10) / 10;

      return coords;
    };

    const drawLines = () => {
      const lines = linesRef.current;
      const bounding = boundingRef.current!;

      ctx.clearRect(0, 0, bounding.width, bounding.height);

      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;

      lines.forEach((points: Point[], lIndex: number) => {
        if (points.length === 0) return;

        const firstPoint = points[0];
        if (!firstPoint) return;

        let currentPoint = moved(firstPoint, false);

        ctx.moveTo(currentPoint.x, currentPoint.y);

        points.forEach((point: Point, pIndex: number) => {
          const isLast = pIndex === points.length - 1;

          currentPoint = moved(point, !isLast);

          const nextPoint = points[pIndex + 1] || points[points.length - 1];
          if (!nextPoint) return;

          const nextCoords = moved(nextPoint, !isLast);

          ctx.lineTo(currentPoint.x, currentPoint.y);
        });
      });

      ctx.stroke();
    };

    const updateMousePosition = (x: number, y: number) => {
      const mouse = mouseRef.current;
      const bounding = boundingRef.current!;

      mouse.x = x - bounding.left;
      mouse.y = y - bounding.top + window.scrollY;

      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;

        mouse.set = true;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.pageX, e.pageY);
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) {
        updateMousePosition(touch.clientX, touch.clientY);
      }
    };

    const onResize = () => {
      setSize();
      setLines();
    };

    const tick = (time: number) => {
      const mouse = mouseRef.current;

      // Smooth mouse movement
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      // Mouse velocity
      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);

      mouse.v = d;
      mouse.vs += (mouse.v - mouse.vs) * 0.1;

      // Mouse angle
      mouse.a = Math.atan2(dy, dx);

      // Update last position
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      movePoints(time);
      drawLines();

      requestAnimationFrame(tick);
    };

    // Initial setup
    setSize();
    setLines();

    // Event listeners
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove);

    // Start animation
    requestAnimationFrame(tick);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
    };
  }, [lineColor, lineWidth, xGap, yGap, waveStrength, cursorRadius, cursorStrength, waveSpeed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    />
  );
}
