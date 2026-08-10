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
      className="fixed sm:absolute top-16 sm:top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 sm:gap-2 bg-[#1f1915]/95 border border-[#594637] p-1 sm:p-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.85)] select-none max-w-[95vw] sm:max-w-none backdrop-blur-sm"
    >
      {/* Open Playlist Button */}
      <button
        onClick={onOpenPlaylist}
        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#382c24] hover:bg-[#4d3d32] text-[#e8d7c3] text-[11px] sm:text-xs font-mono tracking-wider transition-colors border border-[#695444]"
        title="Open Playlist (P)"
      >
        <List className="w-3.5 h-3.5 text-[#f59e0b]" />
        <span>PLAYLIST</span>
      </button>

      {/* Toggle Audio Static / Tactile FX */}
      <button
        onClick={onToggleSoundFx}
        className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-colors border ${
          soundFxEnabled
            ? 'bg-[#382c24] border-[#f59e0b] text-[#f59e0b]'
            : 'bg-[#261d17] border-[#423328] text-[#8c735f]'
        }`}
        title="Toggle Tactile Sound Effects"
      >
        <Radio className="w-3.5 h-3.5" />
        <span className="hidden xs:inline sm:inline">{soundFxEnabled ? 'FX ON' : 'FX OFF'}</span>
      </button>

      {/* Keyboard Shortcuts */}
      <button
        onClick={onOpenShortcuts}
        className="p-1 sm:p-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] transition-colors"
        title="Keyboard Shortcuts"
      >
        <Keyboard className="w-3.5 h-3.5" />
      </button>

      {/* About Button */}
      <button
        onClick={onOpenAbout}
        className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-[#261d17] hover:bg-[#382c24] text-[#c7b39f] hover:text-[#f2e6cb] border border-[#423328] text-[11px] sm:text-xs font-mono transition-colors"
        title="About Rabibara Radio (A)"
      >
        <Info className="w-3.5 h-3.5" />
        <span>ABOUT</span>
      </button>
    </nav>
  );
}
