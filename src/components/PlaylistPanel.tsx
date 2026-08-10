'use client';

import { X, Search, Music, Play, Disc } from 'lucide-react';
import { Song, CATEGORIES, CategoryType } from '@/data/songs';

interface PlaylistPanelProps {
  isOpen: boolean;
  onClose: () => void;
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onSelectSong: (song: Song) => void;
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function PlaylistPanel({
  isOpen,
  onClose,
  songs,
  currentSong,
  isPlaying,
  onSelectSong,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: PlaylistPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-[2px] transition-all animate-fadeIn">
      {/* Vintage Paper Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#f4ebd0] text-[#2c221e] rounded-sm border-4 border-[#8c7355] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden font-serif select-none"
        style={{
          backgroundImage: 'radial-gradient(#e5d8b8 1px, transparent 1px), radial-gradient(#d6c39e 1px, #f4ebd0 1px)',
          backgroundSize: '20px 20px, 40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      >
        {/* Newspaper / Notebook Header */}
        <div className="border-b-2 border-double border-[#8c7355] p-4 sm:p-5 bg-[#eae0c8]/80 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 text-xs font-mono font-bold tracking-widest text-[#8c2318] border border-[#8c2318]/50 hover:bg-[#8c2318] hover:text-white rounded transition-colors uppercase"
          >
            [ X CLOSE ]
          </button>

          <div className="pr-20">
            <h2 className="text-xl sm:text-2xl font-bold font-serif tracking-wide text-[#3a2d27] flex items-center gap-2">
              <Disc className="w-5 h-5 text-[#9e3820] animate-spin-slow" />
              <span>ରବିବାର ସଙ୍ଗୀତ ତାଲିକା</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#6b5545] tracking-wider mt-0.5">
              SUNDAY MORNING CASSETTE LOGBOOK • 1997
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-3.5 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7355]" />
            <input
              type="text"
              placeholder="Search song, artist, movie..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-[#faf4e6] border border-[#a89073] rounded font-mono text-[#2c221e] focus:outline-none focus:border-[#8c2318] placeholder-[#a89073]"
            />
          </div>

          {/* Categories Tabs */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1 text-xs font-mono tracking-wider rounded-t whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#8c2318] text-[#fff8ea] font-bold shadow-sm'
                      : 'bg-[#dfd3b8] text-[#594639] hover:bg-[#cfc1a4]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Songs List (Independent Scroll) */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-[#d4c3a3] font-mono">
          {songs.length === 0 ? (
            <div className="text-center py-10 text-[#7a6552]">
              <Music className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-serif">No songs found in this category.</p>
            </div>
          ) : (
            songs.map((song, index) => {
              const isSelected = currentSong?.id === song.id;
              return (
                <div
                  key={song.id}
                  onClick={() => onSelectSong(song)}
                  className={`group flex items-center justify-between p-2.5 sm:p-3 rounded cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#ffe8a3]/80 border-l-4 border-[#8c2318] shadow-sm'
                      : 'hover:bg-[#eadebd]/60'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <span className={`text-xs font-bold w-6 ${isSelected ? 'text-[#8c2318]' : 'text-[#8c7355]'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`text-sm sm:text-base truncate font-serif font-semibold ${isSelected ? 'text-[#8c2318]' : 'text-[#2c221e]'}`}>
                          {song.title}
                        </p>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                          song.language === 'ODIA' 
                            ? 'bg-[#d6e8d5] text-[#205423] border border-[#91c28f]' 
                            : 'bg-[#fae1d4] text-[#822b15] border border-[#e5a894]'
                        }`}>
                          {song.language}
                        </span>
                      </div>
                      <p className="text-xs text-[#6b5545] font-serif truncate mt-0.5">
                        {song.artist} {song.album ? `• ${song.album}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-[#8c7355] font-mono hidden sm:inline">
                      {song.year}
                    </span>
                    {isSelected && isPlaying ? (
                      <div className="flex items-center gap-0.5 text-[#8c2318]">
                        <span className="w-1 h-3 bg-[#8c2318] animate-bounce" />
                        <span className="w-1 h-4 bg-[#8c2318] animate-bounce delay-100" />
                        <span className="w-1 h-2 bg-[#8c2318] animate-bounce delay-200" />
                      </div>
                    ) : (
                      <Play className="w-4 h-4 text-[#8c7355] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Vintage Footer */}
        <div className="border-t border-[#8c7355] px-4 py-2 bg-[#eae0c8] flex items-center justify-between text-[11px] text-[#6b5545] font-mono">
          <span>TOTAL: {songs.length} TRACKS</span>
          <span>SELECT ANY SONG TO PLAY</span>
        </div>
      </div>
    </div>
  );
}
