'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface AmbientOverlayProps {
  reducedMotion?: boolean;
}

export default function AmbientOverlay({ reducedMotion = false }: AmbientOverlayProps) {
  const [time, setTime] = useState({ hours: 10, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let s = prev.seconds + 1;
        let m = prev.minutes;
        let h = prev.hours;
        if (s >= 60) {
          s = 0;
          m += 1;
        }
        if (m >= 60) {
          m = 0;
          h = (h + 1) % 12 || 12;
        }
        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const secondDeg = (time.seconds / 60) * 360;
  const minuteDeg = (time.minutes / 60) * 360 + (time.seconds / 60) * 6;
  const hourDeg = ((time.hours % 12) / 12) * 360 + (time.minutes / 60) * 30;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-8 select-none">
      {/* Subtle Top & Bottom Text Gradient Overlay for Contrast */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none" 
      />

      {/* TOP HEADER ROW */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start justify-between w-full gap-3 sm:gap-4">
        {/* Top-Left: Radio Title Stamped Aesthetic */}
        <div className="flex flex-col max-w-full sm:max-w-md">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4ebd0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-serif">
            ରବିବାର ରେଡିଓ
          </h1>
          <span className="text-xs sm:text-base tracking-widest text-[#e6c594] font-semibold font-serif drop-shadow-md">
            RAVIBARA RADIO
          </span>
          <p className="text-[11px] sm:text-sm text-[#d4bca0] font-sans italic mt-0.5 sm:mt-1 drop-shadow opacity-90">
            A Sunday morning in Odisha, sometime in the 90s.
          </p>
        </div>

        {/* Top-Right: 1997 Camcorder/Printed Timestamp & Analog Clock */}
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
          {/* Stamped Printed Date Tag */}
          <div className="bg-[#17120e]/85 border border-[#8a6e55]/50 px-2.5 py-1.5 sm:px-3 rounded shadow-lg text-left sm:text-right">
            <div className="text-amber-400 font-mono text-xs sm:text-base font-bold tracking-wider drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">
              '97 08 10 • SUNDAY
            </div>
            <div className="text-amber-300/90 font-mono text-[10px] sm:text-sm tracking-widest mt-0.5">
              10:42 AM
            </div>
          </div>

          {/* Micro Vintage Analog Clock */}
          <div className="hidden sm:flex items-center gap-2 bg-[#261e18]/80 border border-[#594435] px-2.5 py-1 rounded-full text-[11px] text-[#e0cfb8] font-mono shadow-md">
            <div className="relative w-5 h-5 rounded-full border border-[#d99e59] bg-[#140f0c] flex items-center justify-center">
              {/* Hour Hand */}
              <div 
                className="absolute w-0.5 h-1.5 bg-[#e0cfb8] top-1 origin-bottom rounded-full"
                style={{ transform: `rotate(${hourDeg}deg)` }}
              />
              {/* Minute Hand */}
              <div 
                className="absolute w-0.5 h-2 bg-[#d99e59] top-[2px] origin-bottom rounded-full"
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              />
              {/* Second Hand */}
              <div 
                className="absolute w-[1px] h-2.5 bg-red-500 top-[1px] origin-bottom"
                style={{ transform: `rotate(${secondDeg}deg)` }}
              />
            </div>
            <span>10:42 AM</span>
          </div>
        </div>
      </div>



    </div>
  );
}
