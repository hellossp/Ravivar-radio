'use client';

import { X, Heart, ExternalLink } from 'lucide-react';

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-[2px] animate-fadeIn">
      {/* Vintage Paper Letter Container */}
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#f5ede0] text-[#2c221e] rounded p-5 sm:p-8 border-4 border-[#8c7355] shadow-[0_25px_60px_rgba(0,0,0,0.9)] font-serif select-none"
        style={{
          backgroundImage: 'radial-gradient(#e5d8b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#8c2318] border border-[#8c2318]/50 hover:bg-[#8c2318] hover:text-white rounded transition-colors uppercase"
        >
          [ X CLOSE ]
        </button>

        {/* Vintage Header */}
        <div className="text-center border-b border-[#a89278] pb-3 sm:pb-4 mb-4 sm:mb-5 pr-16 sm:pr-0">
          <h3 className="text-xl sm:text-2xl font-bold text-[#8c2318] tracking-wide font-serif">
            ରବିବାର ରେଡିଓ
          </h3>
          <p className="text-[10px] sm:text-xs font-mono text-[#6b5545] tracking-widest uppercase mt-1">
            RABIBARA RADIO • ABOUT THE MEMORY
          </p>
        </div>

        {/* Core Poetic Text */}
        <div className="space-y-3 sm:space-y-4 text-xs sm:text-base leading-relaxed text-[#3a2d26] font-serif">
          <p className="text-justify">
            Rabibara Radio is a small digital time machine built around the sounds, streets and Sunday mornings of 1990s Odisha.
          </p>

          <div className="my-4 sm:my-6 p-3 sm:p-4 bg-[#eae0ce] border-l-4 border-[#8c2318] rounded-r italic text-[#4a3528]">
            <p className="font-semibold text-sm sm:text-lg">"Put on a song.</p>
            <p className="font-semibold text-sm sm:text-lg">Sit for a while.</p>
            <p className="font-semibold text-sm sm:text-lg">Let the morning play."</p>
          </div>

          <p className="text-[11px] sm:text-xs text-[#6b5545] font-sans">
            Imagine sitting outside a small barber shop in Odisha on a Sunday morning in 1997. The scent of hot chai, the hum of a ceiling fan, local gossip over the newspaper, and timeless melody playing from an old tape recorder on the wooden shelf.
          </p>
        </div>

        {/* Footer info & Developer Attribution */}
        <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#a89278] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-[#7a6452] font-mono">
          <span>SUNDAY MORNING • 1997</span>
          <a
            href="https://www.instagram.com/_sitansu_sekhar__ssp?igsh=dnoyYmdub3F0Yzds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#8c2318] hover:underline font-bold transition-colors"
          >
            <span>Developed by Sitansu Sekhar</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
