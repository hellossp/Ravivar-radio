'use client';

import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, List, Radio } from 'lucide-react';
import { Song } from '@/data/songs';

interface CassettePlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenPlaylist: () => void;
  currentIndex: number;
  totalSongs: number;
}

export default function CassettePlayer({
  currentSong,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrev,
  currentTime,
  duration,
  onSeek,
  volume,
  onVolumeChange,
  isMuted,
  onToggleMute,
  onOpenPlaylist,
  currentIndex,
  totalSongs,
}: CassettePlayerProps) {
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate dynamic reel tape pack radii based on playback progress
  const progressRatio = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;
  // Left reel starts full (radius ~46), shrinks to ~32. Right reel starts at ~32, grows to ~46
  const leftTapeRadius = 46 - progressRatio * 14;
  const rightTapeRadius = 32 + progressRatio * 14;

  return (
    <div className="w-full max-w-[440px] mx-auto md:mx-0 select-none perspective-[1000px]">
      {/* Outer 3D Teak Wooden Cabinet Container */}
      <div 
        className="relative rounded-lg p-3.5 sm:p-4 text-[#e2d5c3] font-mono transition-transform duration-300 transform hover:rotate-x-1"
        style={{
          backgroundColor: '#382519',
          borderTop: '3px solid #6b4c35',
          borderLeft: '3px solid #573c28',
          borderRight: '4px solid #1f120a',
          borderBottom: '5px solid #0f0804',
          boxShadow: `
            0 30px 60px -10px rgba(0, 0, 0, 0.95),
            0 15px 25px -5px rgba(0, 0, 0, 0.88),
            inset 0 2px 3px rgba(255, 215, 170, 0.25),
            inset 0 -4px 10px rgba(0, 0, 0, 0.95)
          `,
          backgroundImage: `
            linear-gradient(180deg, rgba(82, 53, 35, 0.9) 0%, rgba(46, 29, 18, 0.95) 50%, rgba(26, 15, 9, 0.98) 100%),
            repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 6px)
          `
        }}
      >
        {/* 3D Brass Corner Plates with Screws */}
        <div className="absolute top-1 left-1 w-3.5 h-3.5 bg-gradient-to-br from-[#d4af37] via-[#997a20] to-[#59440c] border border-[#3d2e08] rounded-sm shadow-md flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#261b05] rotate-45" />
        </div>
        <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-gradient-to-br from-[#d4af37] via-[#997a20] to-[#59440c] border border-[#3d2e08] rounded-sm shadow-md flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#261b05] -rotate-45" />
        </div>
        <div className="absolute bottom-1 left-1 w-3.5 h-3.5 bg-gradient-to-br from-[#d4af37] via-[#997a20] to-[#59440c] border border-[#3d2e08] rounded-sm shadow-md flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#261b05] rotate-12" />
        </div>
        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-gradient-to-br from-[#d4af37] via-[#997a20] to-[#59440c] border border-[#3d2e08] rounded-sm shadow-md flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-[#261b05] -rotate-30" />
        </div>

        {/* Inner Wooden Panel Rim */}
        <div className="bg-gradient-to-b from-[#24170f] via-[#1a100a] to-[#120a06] p-2.5 rounded border border-[#523725] shadow-[inset_0_3px_8px_rgba(0,0,0,0.9)]">

          {/* Top Metallic/Brass Branding Strip */}
          <div className="flex items-center justify-between border-b-2 border-[#523b29] pb-1.5 mb-2 shadow-[0_1px_0_rgba(255,215,170,0.1)]">
            <div className="flex items-center gap-1.5 pl-1">
              <Radio className="w-3.5 h-3.5 text-[#f59e0b] animate-pulse drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-sm tracking-wider text-[#ffd59e] uppercase font-serif drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  ରବିବାର ରେଡିଓ • RABIBARA
                </span>
                <span className="text-[9px] text-[#e8c599] tracking-wider uppercase font-semibold drop-shadow-sm">
                  1997 Hi-Fi Stereo Teak Receiver
                </span>
              </div>
            </div>

            {/* 3D LED Power Indicator Lamp */}
            <div className="flex items-center gap-1.5 bg-[#0e0805] px-2 py-0.5 rounded border border-[#523826] shadow-[inset_0_2px_3px_rgba(0,0,0,0.9)]">
              <span className="text-[8px] text-[#c4a480] tracking-wider font-bold">POWER</span>
              <div 
                className={`w-2.5 h-2.5 rounded-full border border-black/80 transition-all duration-300 ${
                  isPlaying 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-[0_0_10px_#ff3b30] animate-pulse' 
                    : 'bg-[#401614] opacity-80'
                }`} 
              />
            </div>
          </div>

          {/* Recessed 3D Analog Radio Frequency Scale (88-108 MHz) */}
          <div className="relative h-5.5 bg-[#090604] border-2 border-[#362317] rounded mb-2 overflow-hidden flex items-center px-2.5 shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/40 pointer-events-none z-10" />

            <div className="w-full flex justify-between text-[9px] text-[#a88a6d] font-mono font-bold select-none z-0">
              <span>88</span>
              <span>92</span>
              <span>96</span>
              <span>100</span>
              <span>104</span>
              <span>108</span>
              <span className="text-[#f59e0b]">MHz</span>
            </div>

            {/* 3D Glowing Red Needle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-red-600 to-red-800 shadow-[0_0_8px_#ff3b30] transition-all duration-700 ease-out z-20"
              style={{ left: `${Math.min(95, Math.max(5, (currentIndex / (totalSongs || 1)) * 100))}%` }}
            >
              <div className="w-2 h-1 bg-red-500 -ml-[2px] rounded-t-sm shadow-md" />
            </div>
          </div>

          {/* 3D Glass Cassette Window Frame with Polished Teak Border */}
          <div 
            className="relative bg-gradient-to-b from-[#140c08] via-[#0a0604] to-[#1a0f0a] border-2 border-[#5c3e2b] rounded-md p-2.5 mb-2 shadow-[inset_0_4px_12px_rgba(0,0,0,0.95),0_2px_4px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            {/* 3D Reflective Glass Sheen Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 40%, transparent 60%)'
              }}
            />

            <div className="relative z-10 flex items-center justify-between gap-2">
              {/* 3D Left Cassette Tape Reel (Spinning Textured Hub) */}
              <div className="relative w-11 h-11 rounded-full border-2 border-[#4d3321] bg-gradient-to-b from-[#1c110a] to-[#0a0503] flex items-center justify-center shadow-[inset_0_3px_6px_rgba(0,0,0,0.9),0_2px_3px_rgba(255,255,255,0.05)]">
                <svg 
                  className={`w-10 h-10 drop-shadow-md ${isPlaying ? 'animate-[spin_2.8s_linear_infinite]' : ''}`} 
                  viewBox="0 0 100 100"
                >
                  {/* Dynamic Dark Brown Magnetic Tape Pack */}
                  <circle cx="50" cy="50" r={leftTapeRadius} fill="#1a0e08" stroke="#4a2e1b" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r={leftTapeRadius - 3} fill="#29160c" opacity="0.6" />
                  
                  {/* White Plastic Cassette Tape Hub Ring */}
                  <circle cx="50" cy="50" r="26" fill="#fdfbf7" stroke="#3a2517" strokeWidth="2.5" />
                  
                  {/* 3 Large Drive Notch Holes */}
                  <circle cx="50" cy="33" r="4.5" fill="#120a06" />
                  <circle cx="35" cy="59" r="4.5" fill="#120a06" />
                  <circle cx="65" cy="59" r="4.5" fill="#120a06" />
                  
                  {/* 6 Drive Teeth Spokes */}
                  <rect x="47.5" y="27" width="5" height="46" rx="1.5" fill="#2e1b10" />
                  <rect x="47.5" y="27" width="5" height="46" rx="1.5" fill="#2e1b10" transform="rotate(60 50 50)" />
                  <rect x="47.5" y="27" width="5" height="46" rx="1.5" fill="#2e1b10" transform="rotate(120 50 50)" />

                  {/* Red Orientation Lock Marker (Makes 3D Rotation Visually Distinct!) */}
                  <circle cx="50" cy="28.5" r="3.2" fill="#ff3b30" stroke="#b31208" strokeWidth="0.8" />
                  
                  {/* Center Brass Spindle Hole */}
                  <circle cx="50" cy="50" r="10" fill="#0d0805" stroke="#f59e0b" strokeWidth="2" />
                </svg>
              </div>

              {/* Middle Song LCD Screen & Counter */}
              <div className="flex-1 min-w-0 text-center px-1">
                {/* Illuminated Green LCD Window */}
                <div className="bg-[#0a140d] border border-[#1d3323] p-1.5 rounded shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] mb-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                  <p className="text-xs font-bold text-[#7df0a7] font-mono truncate tracking-tight drop-shadow-[0_0_5px_rgba(125,240,167,0.7)]">
                    {currentSong ? currentSong.title : 'SELECT A SONG'}
                  </p>
                  <p className="text-[10px] text-[#4db372] font-serif truncate mt-0.5 opacity-90">
                    {currentSong ? `${currentSong.artist} (${currentSong.year})` : 'ରବିବାର ରେଡିଓ'}
                  </p>
                </div>

                {/* LCD Counter & Track Position */}
                <div className="flex items-center justify-between text-[10px] text-[#c9a67f] font-mono px-0.5">
                  <span className="font-bold">TRK {String(currentIndex + 1).padStart(2, '0')}/{totalSongs}</span>
                  <span className="text-[#ffd59e] font-bold drop-shadow">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              </div>

              {/* 3D Right Cassette Tape Reel (Spinning Textured Hub) */}
              <div className="relative w-11 h-11 rounded-full border-2 border-[#4d3321] bg-gradient-to-b from-[#1c110a] to-[#0a0503] flex items-center justify-center shadow-[inset_0_3px_6px_rgba(0,0,0,0.9),0_2px_3px_rgba(255,255,255,0.05)]">
                <svg 
                  className={`w-10 h-10 drop-shadow-md ${isPlaying ? 'animate-[spin_2.8s_linear_infinite]' : ''}`} 
                  viewBox="0 0 100 100"
                >
                  {/* Dynamic Dark Brown Magnetic Tape Pack */}
                  <circle cx="50" cy="50" r={rightTapeRadius} fill="#1a0e08" stroke="#4a2e1b" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r={rightTapeRadius - 3} fill="#29160c" opacity="0.6" />
                  
                  {/* White Plastic Cassette Tape Hub Ring */}
                  <circle cx="50" cy="50" r="26" fill="#fdfbf7" stroke="#3a2517" strokeWidth="2.5" />
                  
                  {/* 3 Large Drive Notch Holes */}
                  <circle cx="50" cy="33" r="4.5" fill="#120a06" />
                  <circle cx="35" cy="59" r="4.5" fill="#120a06" />
                  <circle cx="65" cy="59" r="4.5" fill="#120a06" />
                  
                  {/* 6 Drive Teeth Spokes */}
                  <rect x="47.5" y="27" width="5" height="46" rx="1.5" fill="#2e1b10" />
                  <rect x="47.5" y="27" width="5" height="46" rx="1.5" fill="#2e1b10" transform="rotate(60 50 50)" />
                  <rect x="47.5" y="27" width="5" height="46" rx="1.5" fill="#2e1b10" transform="rotate(120 50 50)" />

                  {/* Red Orientation Lock Marker (Makes 3D Rotation Visually Distinct!) */}
                  <circle cx="50" cy="28.5" r="3.2" fill="#ff3b30" stroke="#b31208" strokeWidth="0.8" />
                  
                  {/* Center Brass Spindle Hole */}
                  <circle cx="50" cy="50" r="10" fill="#0d0805" stroke="#f59e0b" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* 3D Recessed Progress / Scrubber Slider */}
            <div className="mt-2 relative flex items-center bg-[#080503] p-0.5 rounded border border-[#382417] shadow-inner">
              <input
                type="range"
                min={0}
                max={!duration || isNaN(duration) ? 100 : duration}
                value={isNaN(currentTime) || currentTime === undefined || currentTime === null ? 0 : currentTime}
                onChange={(e) => onSeek(Number(e.target.value))}
                aria-label="Track Progress Scrubber"
                className="w-full h-1.5 bg-[#1f130a] rounded-lg appearance-none cursor-pointer accent-[#f59e0b] focus:outline-none"
              />
            </div>
          </div>

          {/* 3D Physical Bevelled Buttons Row */}
          <div className="grid grid-cols-5 gap-1.5 mb-2">
            {/* Eject / Playlist Button */}
            <button
              onClick={onOpenPlaylist}
              title="Open Playlist (P)"
              className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 bg-gradient-to-b from-[#6b523e] via-[#473426] to-[#2b1e15] hover:from-[#7c624d] hover:to-[#38281c] active:translate-y-1 border-t-2 border-t-[#a88972] border-l border-l-[#80634c] border-r-2 border-r-black border-b-4 border-b-black rounded shadow-[0_4px_0_#120c07,0_6px_12px_rgba(0,0,0,0.85)] text-[#e8d7c5] transition-all group"
            >
              <List className="w-3.5 h-3.5 text-[#f59e0b] group-hover:scale-110 transition-transform drop-shadow" />
              <span className="text-[8px] tracking-tighter mt-0.5 text-[#d4bd9f] font-bold">EJECT</span>
            </button>

            {/* Rewind Button */}
            <button
              onClick={onPrev}
              title="Previous Song (Left Arrow)"
              className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 bg-gradient-to-b from-[#6b523e] via-[#473426] to-[#2b1e15] hover:from-[#7c624d] hover:to-[#38281c] active:translate-y-1 border-t-2 border-t-[#a88972] border-l border-l-[#80634c] border-r-2 border-r-black border-b-4 border-b-black rounded shadow-[0_4px_0_#120c07,0_6px_12px_rgba(0,0,0,0.85)] text-[#e8d7c5] transition-all group"
            >
              <SkipBack className="w-3.5 h-3.5 group-hover:scale-110 transition-transform drop-shadow" />
              <span className="text-[8px] tracking-tighter mt-0.5 text-[#d4bd9f] font-bold">REW</span>
            </button>

            {/* Main 3D Crimson Play / Pause Button */}
            <button
              onClick={onTogglePlay}
              title={isPlaying ? "Pause (Space)" : "Play (Space)"}
              className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 bg-gradient-to-b from-[#bf3a1d] via-[#8c230d] to-[#591104] hover:from-[#d14324] hover:to-[#6b1606] active:translate-y-1 border-t-2 border-t-[#e8674d] border-l border-l-[#b03b22] border-r-2 border-r-[#240600] border-b-4 border-b-[#240600] rounded shadow-[0_4px_0_#2e0802,0_6px_12px_rgba(0,0,0,0.9)] text-[#fff5ea] transition-all group"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 group-hover:scale-110 transition-transform drop-shadow" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform ml-0.5 drop-shadow" />
              )}
              <span className="text-[8px] tracking-tighter mt-0.5 text-[#ffd8cc] font-bold">
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </span>
            </button>

            {/* Fast Forward Button */}
            <button
              onClick={onNext}
              title="Next Song (Right Arrow)"
              className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 bg-gradient-to-b from-[#6b523e] via-[#473426] to-[#2b1e15] hover:from-[#7c624d] hover:to-[#38281c] active:translate-y-1 border-t-2 border-t-[#a88972] border-l border-l-[#80634c] border-r-2 border-r-black border-b-4 border-b-black rounded shadow-[0_4px_0_#120c07,0_6px_12px_rgba(0,0,0,0.85)] text-[#e8d7c5] transition-all group"
            >
              <SkipForward className="w-3.5 h-3.5 group-hover:scale-110 transition-transform drop-shadow" />
              <span className="text-[8px] tracking-tighter mt-0.5 text-[#d4bd9f] font-bold">FF</span>
            </button>

            {/* Volume Mute Toggle Button */}
            <button
              onClick={onToggleMute}
              title={isMuted ? "Unmute (M)" : "Mute (M)"}
              className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 bg-gradient-to-b from-[#6b523e] via-[#473426] to-[#2b1e15] hover:from-[#7c624d] hover:to-[#38281c] active:translate-y-1 border-t-2 border-t-[#a88972] border-l border-l-[#80634c] border-r-2 border-r-black border-b-4 border-b-black rounded shadow-[0_4px_0_#120c07,0_6px_12px_rgba(0,0,0,0.85)] text-[#e8d7c5] transition-all group"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#7df0a7] group-hover:scale-110 transition-transform" />
              )}
              <span className="text-[8px] tracking-tighter mt-0.5 text-[#d4bd9f] font-bold">MUTE</span>
            </button>
          </div>

          {/* 3D Volume Rotary Knob & Slider Strip */}
          <div className="flex items-center justify-between gap-2.5 bg-[#0f0906] px-2.5 py-1.5 rounded border border-[#382417] shadow-[inset_0_2px_5px_rgba(0,0,0,0.9)]">
            {/* 3D Metallic Rotary Dial Icon */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8c6b4f] via-[#473322] to-[#1c120a] border border-black shadow-[0_2px_4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
                <div 
                  className="w-0.5 h-2 bg-[#f59e0b] rounded-full transition-transform"
                  style={{ transform: `rotate(${(volume / 100) * 270 - 135}deg)` }}
                />
              </div>
              <span className="text-[9px] text-[#c4a480] uppercase font-bold tracking-wider">
                VOL CONTROL
              </span>
            </div>

            {/* Slider */}
            <div className="flex-1 flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={100}
                value={isMuted ? 0 : (isNaN(volume) || volume === undefined || volume === null ? 80 : volume)}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                aria-label="Volume Slider"
                className="w-full h-1.5 bg-[#21140a] rounded-lg appearance-none cursor-pointer accent-[#f59e0b] focus:outline-none"
              />
              <span className="text-[11px] text-[#ffd59e] w-7 text-right font-mono font-bold">
                {isMuted ? '0%' : `${volume}%`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
