'use client';

import { useEffect, useRef } from 'react';

interface RainOverlayProps {
  enabled: boolean;
}

export default function RainOverlay({ enabled }: RainOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create Rain Drops & Window Trickle Drops
    const drops: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    const trickles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      trail: Array<{ y: number; opacity: number }>;
    }> = [];

    for (let i = 0; i < 70; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 15,
        speed: Math.random() * 8 + 6,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }

    for (let i = 0; i < 20; i++) {
      trickles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.5,
        speed: Math.random() * 1.5 + 0.8,
        trail: [],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Falling Rain Streaks
      ctx.lineWidth = 1.2;
      drops.forEach((drop) => {
        ctx.strokeStyle = `rgba(200, 220, 255, ${drop.opacity})`;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.length * 0.2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= drop.speed * 0.2;

        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * (width + 200);
        }
      });

      // Render Glass Window Droplet Trickles
      trickles.forEach((t) => {
        // Draw droplet trail on glass window
        t.trail.push({ y: t.y, opacity: 0.25 });
        if (t.trail.length > 12) t.trail.shift();

        t.trail.forEach((point) => {
          ctx.fillStyle = `rgba(220, 235, 255, ${point.opacity})`;
          ctx.beginPath();
          ctx.arc(t.x, point.y, t.radius * 0.7, 0, Math.PI * 2);
          ctx.fill();
          point.opacity *= 0.88;
        });

        // Main droplet head
        ctx.fillStyle = 'rgba(240, 248, 255, 0.45)';
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fill();

        t.y += t.speed * (0.8 + Math.sin(t.y * 0.05) * 0.4);

        if (t.y > height) {
          t.y = -10;
          t.x = Math.random() * width;
          t.trail = [];
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-15 overflow-hidden transition-opacity duration-700 animate-fadeIn">
      {/* Subtle Blue Glass Wet Tint */}
      <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[0.5px] pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
