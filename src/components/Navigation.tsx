'use client';

import { List, Info, Radio, Volume2, VolumeX, Keyboard } from 'lucide-react';

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
      className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2 bg-[#1f1915]/90 border border-[#594637] p-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] select-none"
    >
      {/* Open Playlist Button */}
      <button
        onClick={onOpenPlaylist}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#382c24] hover:bg-[#4d3d32] text-[#e8d7c3] text-xs font-mono tracking-wider transition-colors border border-[#695444]"
        title="Open Playlist (P)"
      >
        <List className="w-3.5 h-3.5 text-[#d97724]" />
        <span className="hidden sm:inline">PLAYLIST</span>
      </button>

      {/* Toggle Audio Static / Tactile FX */}
      <button
        onClick={onToggleSoundFx}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono transition-colors border ${
          soundFxEnabled
            ? 'bg-[#382c24] border-[#d97724] text-[#d97724]'
            : 'bg-[#261d17] border-[#423328] text-[#8c735f]'
        }`}
        title="Toggle Tactile Sound Effects"
      >
        <Radio className="w-3.5 h-3.5" />
        <span className="hidden md:inline">{soundFxEnabled ? 'FX ON' : 'FX OFF'}</span>
      </button>

      {/* Keyboard Shortcuts */}
      <button
        onClick={onOpenShortcuts}
        className="p-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] transition-colors"
        title="Keyboard Shortcuts"
      >
        <Keyboard className="w-3.5 h-3.5" />
      </button>

      {/* About Button */}
      <button
        onClick={onOpenAbout}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] text-xs font-mono transition-colors"
        title="About Rabibara Radio (A)"
      >
        <Info className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">ABOUT</span>
      </button>
    </nav>
  );
}
