'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { SONGS, Song, CategoryType } from '@/data/songs';
import YouTubeAudioPlayer from '@/components/YouTubeAudioPlayer';
import CassettePlayer from '@/components/CassettePlayer';
import PlaylistPanel from '@/components/PlaylistPanel';
import AmbientOverlay from '@/components/AmbientOverlay';
import AboutPanel from '@/components/AboutPanel';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import ShortcutsModal from '@/components/ShortcutsModal';
import { playCassetteClick, playRadioDialClick, playStaticBurst } from '@/utils/audioSynth';

export default function Home() {
  // App States
  const [isLoading, setIsLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState<Song | null>(SONGS[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [seekTime, setSeekTime] = useState<number | null>(null);
  
  // UI Overlays
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [soundFxEnabled, setSoundFxEnabled] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Filtered Songs List
  const filteredSongs = useMemo(() => {
    return SONGS.filter((song) => {
      // Category filter
      if (selectedCategory !== 'ALL') {
        if (selectedCategory === 'ODIA' && song.language !== 'ODIA') return false;
        if (selectedCategory === 'HINDI' && song.language !== 'HINDI') return false;
        if (selectedCategory === 'ROMANTIC' && song.category !== 'ROMANTIC') return false;
        if (selectedCategory === 'SAD' && song.category !== 'SAD') return false;
        if (selectedCategory === '90s CLASSICS' && song.category !== '90s CLASSICS') return false;
      }
      // Search Query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          song.title.toLowerCase().includes(q) ||
          song.artist.toLowerCase().includes(q) ||
          (song.album && song.album.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Active song list based on filter
  const activeSongs = useMemo(() => {
    return filteredSongs.length > 0 ? filteredSongs : SONGS;
  }, [filteredSongs]);

  // Current Song Index in active songs list
  const currentIndex = useMemo(() => {
    if (!currentSong) return 0;
    const idx = activeSongs.findIndex((s) => s.id === currentSong.id);
    return idx >= 0 ? idx : 0;
  }, [currentSong, activeSongs]);

  // Handlers
  const handleTogglePlay = () => {
    if (soundFxEnabled) playCassetteClick();
    setIsPlaying((prev) => !prev);
  };

  const handleNextSong = () => {
    if (soundFxEnabled) playRadioDialClick();
    const nextIdx = (currentIndex + 1) % activeSongs.length;
    setCurrentSong(activeSongs[nextIdx]);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    if (soundFxEnabled) playRadioDialClick();
    const prevIdx = (currentIndex - 1 + activeSongs.length) % activeSongs.length;
    setCurrentSong(activeSongs[prevIdx]);
    setIsPlaying(true);
  };

  const handleSelectSong = (song: Song) => {
    if (soundFxEnabled) playCassetteClick();
    setCurrentSong(song);
    setIsPlaying(true);
    setIsPlaylistOpen(false);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    setSeekTime(time);
  };

  const handleVolumeChange = (vol: number) => {
    setVolume(vol);
    if (vol > 0 && isMuted) setIsMuted(false);
  };

  const handleToggleMute = () => {
    if (soundFxEnabled) playRadioDialClick();
    setIsMuted((prev) => !prev);
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in search input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          handleTogglePlay();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNextSong();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevSong();
          break;
        case 'KeyM':
          e.preventDefault();
          handleToggleMute();
          break;
        case 'KeyP':
          e.preventDefault();
          if (soundFxEnabled) playCassetteClick();
          setIsPlaylistOpen((prev) => !prev);
          break;
        case 'KeyA':
          e.preventDefault();
          if (soundFxEnabled) playCassetteClick();
          setIsAboutOpen((prev) => !prev);
          break;
        case 'Escape':
          e.preventDefault();
          setIsPlaylistOpen(false);
          setIsAboutOpen(false);
          setIsShortcutsOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isPlaying, soundFxEnabled]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0d0a08] select-none font-sans text-slate-100">
      {/* 1. LOADING SCREEN OVERLAY */}
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      {/* 2. MAIN BACKGROUND PHOTOGRAPH (STATIC, NON-SCROLLING, FIXED COVER) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/6b12936b-24b3-47a7-b126-134fb4facea6.png"
          alt="1990s Odisha Barber Shop Sunday Morning"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] md:object-center"
        />
      </div>

      {/* 3. AMBIENT OVERLAY (Top-Left Title, Top-Right Timestamp, Floating Notes) */}
      <AmbientOverlay reducedMotion={reducedMotion} />

      {/* 4. TOP NAVIGATION CONTROL BAR */}
      <Navigation
        onOpenPlaylist={() => {
          if (soundFxEnabled) playCassetteClick();
          setIsPlaylistOpen(true);
        }}
        onOpenAbout={() => {
          if (soundFxEnabled) playCassetteClick();
          setIsAboutOpen(true);
        }}
        soundFxEnabled={soundFxEnabled}
        onToggleSoundFx={() => {
          if (soundFxEnabled) playStaticBurst();
          setSoundFxEnabled((prev) => !prev);
        }}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* 5. MAIN CASSETTE / RADIO PLAYER OVERLAY */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-6 sm:left-8 sm:right-auto z-30 pointer-events-auto max-w-[440px] sm:max-w-lg">
        <CassettePlayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onNext={handleNextSong}
          onPrev={handlePrevSong}
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
          volume={volume}
          onVolumeChange={handleVolumeChange}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onOpenPlaylist={() => {
            if (soundFxEnabled) playCassetteClick();
            setIsPlaylistOpen(true);
          }}
          currentIndex={currentIndex}
          totalSongs={SONGS.length}
        />
      </div>

      {/* 6. YOUTUBE AUDIO ENGINE (HIDDEN IN DOM) */}
      <YouTubeAudioPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        volume={volume}
        isMuted={isMuted}
        seekTime={seekTime}
        onEnded={handleNextSong}
        onTimeUpdate={setCurrentTime}
        onDuration={setDuration}
        onPlayingStateChange={setIsPlaying}
        onErrorNext={handleNextSong}
      />

      {/* 7. MODALS & OVERLAYS */}
      <PlaylistPanel
        isOpen={isPlaylistOpen}
        onClose={() => setIsPlaylistOpen(false)}
        songs={filteredSongs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        onSelectSong={handleSelectSong}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          if (soundFxEnabled) playRadioDialClick();
          setSelectedCategory(cat);
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <AboutPanel
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </main>
  );
}
