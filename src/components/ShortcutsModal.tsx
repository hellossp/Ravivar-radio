'use client';

import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShortcutsModal({ isOpen, onClose }: ShortcutsModalProps) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Space', desc: 'Play / Pause music' },
    { key: 'Left Arrow', desc: 'Previous song' },
    { key: 'Right Arrow', desc: 'Next song' },
    { key: 'R', desc: 'Cycle Repeat (OFF / ALL / ONE)' },
    { key: 'M', desc: 'Mute / Unmute audio' },
    { key: 'F', desc: 'Toggle Fullscreen mode' },
    { key: 'P', desc: 'Open / Close Playlist' },
    { key: 'A', desc: 'Open / Close About Panel' },
    { key: 'Esc', desc: 'Close any open panel' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-[2px] animate-fadeIn">
      <div 
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#f5ede0] text-[#2c221e] rounded p-5 sm:p-6 border-4 border-[#8c7355] shadow-2xl font-serif select-none"
        style={{
          backgroundImage: 'radial-gradient(#e5d8b8 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xs font-mono font-bold text-[#8c2318] border border-[#8c2318]/50 px-2 py-0.5 rounded hover:bg-[#8c2318] hover:text-white"
        >
          [ X CLOSE ]
        </button>

        <div className="flex items-center gap-2 border-b border-[#a89278] pb-3 mb-4">
          <Keyboard className="w-5 h-5 text-[#8c2318]" />
          <h3 className="text-lg font-bold text-[#3a2d26] font-serif">
            KEYBOARD SHORTCUTS
          </h3>
        </div>

        <div className="space-y-2 font-mono text-xs text-[#3a2d26]">
          {shortcuts.map((sc) => (
            <div key={sc.key} className="flex items-center justify-between p-2 bg-[#eae0ce] rounded border border-[#d6c5ad]">
              <span className="font-bold bg-[#382c24] text-[#fff5ea] px-2 py-0.5 rounded text-[11px]">
                {sc.key}
              </span>
              <span className="text-[#594639]">{sc.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
