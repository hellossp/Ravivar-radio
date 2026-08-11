'use client';

import { Disc, Lock, Sparkles, TrendingUp, Heart, ExternalLink } from 'lucide-react';

interface CustomTrackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomTrackModal({ isOpen, onClose }: CustomTrackModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-[3px] animate-fadeIn">
      {/* Vintage Cassette Box Container */}
      <div 
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#f5ede0] text-[#2c221e] rounded p-5 sm:p-7 border-4 border-[#8c7355] shadow-[0_25px_60px_rgba(0,0,0,0.95)] font-serif select-none"
        style={{
          backgroundImage: 'radial-gradient(#e5d8b8 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#8c2318] border border-[#8c2318]/50 hover:bg-[#8c2318] hover:text-white rounded transition-colors uppercase"
        >
          [ X CLOSE ]
        </button>

        {/* Vintage Header */}
        <div className="flex items-center gap-2.5 border-b-2 border-double border-[#a89278] pb-3 mb-4 pr-16 sm:pr-0">
          <div className="p-2 bg-[#8c2318] text-[#fff5ea] rounded-full shadow-md shrink-0">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#3a2d26] font-serif leading-tight">
              MAKE YOUR OWN TRACK
            </h3>
            <p className="text-[10px] sm:text-xs font-mono text-[#8c2318] font-bold tracking-wider">
              ରବିବାର କଷ୍ଟମ୍ ଟ୍ରାକ୍ • MIXTAPE BUILDER
            </p>
          </div>
        </div>

        {/* Main Lock Feature Card */}
        <div className="bg-[#eae0ce] border-2 border-[#b89f82] rounded-lg p-4 mb-4 text-center relative overflow-hidden shadow-inner">
          <div className="w-12 h-12 mx-auto mb-2.5 bg-[#382c24] text-amber-400 rounded-full flex items-center justify-center border border-amber-500/40 shadow">
            <Lock className="w-6 h-6" />
          </div>

          <h4 className="text-base sm:text-lg font-bold text-[#8c2318] font-serif mb-1">
            Feature Unlocks at 50,000+ Visits!
          </h4>
          <p className="text-xs sm:text-sm text-[#4a3629] leading-relaxed font-serif">
            Custom track creation (adding your own favorite Odia & 90s songs to your personal cassette deck) will be unlocked soon as soon as Rabibara Radio hits <strong>50,000+ website visits</strong>!
          </p>

          {/* Progress Bar Milestone */}
          <div className="mt-4 pt-3 border-t border-[#d4c5b0] text-left">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6b5545] font-bold mb-1">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#8c2318]" />
                COMMUNITY GOAL
              </span>
              <span className="text-[#8c2318]">18,450 / 50,000 VISITS</span>
            </div>
            <div className="w-full bg-[#d6c5ad] h-3.5 rounded-full overflow-hidden p-0.5 border border-[#ab9882] shadow-inner">
              <div 
                className="bg-gradient-to-r from-[#d97724] to-[#8c2318] h-full rounded-full transition-all duration-500 shadow"
                style={{ width: '36.9%' }}
              />
            </div>
            <p className="text-[10px] font-mono text-[#7a6452] mt-1.5 text-center italic">
              Share Rabibara Radio with friends to help unlock custom tapes faster!
            </p>
          </div>
        </div>

        {/* Developer Attribution */}
        <div className="pt-3 border-t border-[#a89278] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#594639]">
          <span className="text-[11px]">RABIBARA RADIO • 1997</span>
          <a
            href="https://www.instagram.com/_sitansu_sekhar__ssp?igsh=aWkyNjBmdHQyZ285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 bg-[#382c24] hover:bg-[#8c2318] text-[#ffe8cb] hover:text-white rounded border border-[#6b5545] text-[11px] font-bold transition-all"
          >
            <span>Dev: Sitansu Sekhar</span>
            <ExternalLink className="w-3 h-3 text-amber-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
