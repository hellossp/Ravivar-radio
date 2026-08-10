'use client';

import { useEffect, useState } from 'react';
import { Radio } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Short loading timer (1.6s)
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    const timer2 = setTimeout(() => {
      onLoaded();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoaded]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0a08] text-[#f4ebd0] select-none transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center px-4">
        {/* Animated Vintage Radio Icon */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-[#1f1814] border-2 border-[#594435] flex items-center justify-center shadow-[0_0_20px_rgba(217,119,36,0.3)]">
            <Radio className="w-8 h-8 text-[#d97724] animate-pulse" />
          </div>
          {/* Blinking Red LED */}
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-[#0d0a08] shadow-[0_0_10px_#ef4444] animate-ping" />
        </div>

        {/* Odia Title */}
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#f4ebd0] tracking-wide">
          ରବିବାର ରେଡିଓ
        </h1>

        {/* Loading Subtitle */}
        <p className="text-xs sm:text-sm font-mono text-[#a89078] tracking-widest uppercase animate-pulse">
          Turning the radio...
        </p>

        {/* Radio Tuning Frequency Progress Bar */}
        <div className="w-48 h-1.5 bg-[#261e18] rounded-full overflow-hidden border border-[#423328] mt-2">
          <div className="h-full bg-gradient-to-r from-[#d97724] to-[#ef4444] animate-progress width-full" />
        </div>
      </div>
    </div>
  );
}
