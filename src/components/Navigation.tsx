'use client';

import { List, Info, Radio, Keyboard } from 'lucide-react';

interface NavigationProps {
  onOpenPlaylist: () => void;
  onOpenAbout: () => void;
  soundFxEnabled: boolean;
  onToggleSoundFx: () => void;
  onOpenShortcuts: () => void;
}

export default function Navigation({
  onOpenPlaylist,
  onOpenAbout,
  soundFxEnabled,
  onToggleSoundFx,
  onOpenShortcuts,
}: NavigationProps) {
  return (
    <nav 
      aria-label="Radio Navigation" 
      className="z-40 flex items-center justify-center gap-1 sm:gap-2 bg-[#1b140f]/95 border border-[#594637] p-1 sm:p-1.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.9)] select-none w-fit mx-auto sm:fixed sm:top-4 sm:left-1/2 sm:-translate-x-1/2 backdrop-blur-md shrink-0"
    >
      {/* Open Playlist Button */}
      <button
        onClick={onOpenPlaylist}
        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#382c24] hover:bg-[#4d3d32] text-[#e8d7c3] text-[11px] sm:text-xs font-mono tracking-wider transition-all border border-[#695444] active:scale-95 shadow-sm"
        title="Open Playlist (P)"
      >
        <List className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
        <span>PLAYLIST</span>
      </button>

      {/* Toggle Audio Static / Tactile FX */}
      <button
        onClick={onToggleSoundFx}
        className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all border active:scale-95 shadow-sm ${
          soundFxEnabled
            ? 'bg-[#382c24] border-[#f59e0b] text-[#f59e0b]'
            : 'bg-[#261d17] border-[#423328] text-[#8c735f]'
        }`}
        title="Toggle Tactile Sound Effects"
      >
        <Radio className="w-3.5 h-3.5 shrink-0" />
        <span>{soundFxEnabled ? 'FX ON' : 'FX OFF'}</span>
      </button>

      {/* Keyboard Shortcuts */}
      <button
        onClick={onOpenShortcuts}
        className="p-1 sm:p-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] transition-all active:scale-95 shadow-sm"
        title="Keyboard Shortcuts"
      >
        <Keyboard className="w-3.5 h-3.5 shrink-0" />
      </button>

      {/* About Button */}
      <button
        onClick={onOpenAbout}
        className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] text-[11px] sm:text-xs font-mono transition-all active:scale-95 shadow-sm"
        title="About Rabibara Radio (A)"
      >
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>ABOUT</span>
      </button>
    </nav>
  );
}
