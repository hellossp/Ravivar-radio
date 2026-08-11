'use client';

import { List, Info, Radio, Keyboard, Maximize2, Minimize2, Coffee } from 'lucide-react';

interface NavigationProps {
  onOpenPlaylist: () => void;
  onOpenAbout: () => void;
  soundFxEnabled: boolean;
  onToggleSoundFx: () => void;
  isAmbianceEnabled: boolean;
  onToggleAmbiance: () => void;
  onOpenShortcuts: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function Navigation({
  onOpenPlaylist,
  onOpenAbout,
  soundFxEnabled,
  onToggleSoundFx,
  isAmbianceEnabled,
  onToggleAmbiance,
  onOpenShortcuts,
  isFullscreen,
  onToggleFullscreen,
}: NavigationProps) {
  return (
    <nav 
      aria-label="Radio Navigation" 
      className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-1.5 sm:gap-2 bg-[#1f1915]/90 border border-[#594637] p-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] select-none whitespace-nowrap backdrop-blur-sm"
    >
      {/* Open Playlist Button */}
      <button
        onClick={onOpenPlaylist}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#382c24] hover:bg-[#4d3d32] text-[#e8d7c3] text-xs font-mono tracking-wider transition-colors border border-[#695444] whitespace-nowrap"
        title="Open Playlist (P)"
      >
        <List className="w-3.5 h-3.5 text-[#d97724] shrink-0" />
        <span className="whitespace-nowrap">PLAYLIST</span>
      </button>

      {/* Barber Shop Scissors & Massage ASMR Ambiance Toggle */}
      <button
        onClick={onToggleAmbiance}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono transition-colors border whitespace-nowrap ${
          isAmbianceEnabled
            ? 'bg-[#382c24] border-amber-500 text-amber-400 font-bold shadow-[0_0_8px_rgba(245,158,11,0.4)]'
            : 'bg-[#261d17] border-[#423328] text-[#8c735f]'
        }`}
        title="Toggle Barber Shop Scissors & Massage ASMR Ambiance"
      >
        <Coffee className="w-3.5 h-3.5 shrink-0" />
        <span className="whitespace-nowrap">{isAmbianceEnabled ? 'AMBIANCE ON' : 'AMBIANCE OFF'}</span>
      </button>

      {/* Toggle Audio Static / Tactile FX */}
      <button
        onClick={onToggleSoundFx}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono transition-colors border whitespace-nowrap ${
          soundFxEnabled
            ? 'bg-[#382c24] border-[#d97724] text-[#d97724]'
            : 'bg-[#261d17] border-[#423328] text-[#8c735f]'
        }`}
        title="Toggle Tactile Sound Effects"
      >
        <Radio className="w-3.5 h-3.5 shrink-0" />
        <span className="whitespace-nowrap">{soundFxEnabled ? 'FX ON' : 'FX OFF'}</span>
      </button>

      {/* Fullscreen Mode Toggle */}
      <button
        onClick={onToggleFullscreen}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono transition-colors border whitespace-nowrap ${
          isFullscreen
            ? 'bg-[#382c24] border-[#d97724] text-[#d97724]'
            : 'bg-[#261d17] hover:bg-[#382c24] border-[#423328] text-[#c7b39f] hover:text-[#f2e6cb]'
        }`}
        title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
      >
        {isFullscreen ? (
          <Minimize2 className="w-3.5 h-3.5 shrink-0" />
        ) : (
          <Maximize2 className="w-3.5 h-3.5 shrink-0" />
        )}
        <span className="hidden md:inline whitespace-nowrap">{isFullscreen ? "EXIT FULL" : "FULLSCREEN"}</span>
      </button>

      {/* Keyboard Shortcuts */}
      <button
        onClick={onOpenShortcuts}
        className="p-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] transition-colors shrink-0"
        title="Keyboard Shortcuts"
      >
        <Keyboard className="w-3.5 h-3.5 shrink-0" />
      </button>

      {/* About Button */}
      <button
        onClick={onOpenAbout}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] text-xs font-mono transition-colors whitespace-nowrap"
        title="About Rabibara Radio (A)"
      >
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span className="whitespace-nowrap">ABOUT</span>
      </button>
    </nav>
  );
}
