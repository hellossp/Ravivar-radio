'use client';

import { useEffect, useRef } from 'react';
import { Song } from '@/data/songs';

interface YouTubeAudioPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number; // 0 to 100
  isMuted: boolean;
  seekTime?: number | null;
  onEnded: () => void;
  onTimeUpdate: (currentTime: number) => void;
  onDuration: (duration: number) => void;
  onPlayingStateChange: (isPlaying: boolean) => void;
  onErrorNext: () => void;
  onShowToast?: (message: string, type: 'info' | 'warning' | 'error', title?: string) => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeAudioPlayer({
  currentSong,
  isPlaying,
  volume,
  isMuted,
  seekTime,
  onEnded,
  onTimeUpdate,
  onDuration,
  onPlayingStateChange,
  onErrorNext,
  onShowToast,
}: YouTubeAudioPlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const initCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isReadyRef = useRef<boolean>(false);
  const isSwitchingTrackRef = useRef<boolean>(false);
  const lastLoadedSongIdRef = useRef<string | null>(null);
  const isAudioUnlockedRef = useRef<boolean>(false);
  const lastEndedTimestampRef = useRef<number>(0);

  // Load YouTube IFrame API once with reliable initialization polling
  useEffect(() => {
    const checkAndInit = () => {
      if (playerRef.current) {
        if (initCheckIntervalRef.current) clearInterval(initCheckIntervalRef.current);
        return;
      }
      if (window.YT && window.YT.Player && containerRef.current) {
        initPlayer();
        if (initCheckIntervalRef.current) clearInterval(initCheckIntervalRef.current);
      }
    };

    // If script isn't added yet, inject it
    if (!document.getElementById('youtube-iframe-api')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Set callback
    window.onYouTubeIframeAPIReady = () => {
      checkAndInit();
    };

    // Start polling in case containerRef or window.YT is ready slightly later
    initCheckIntervalRef.current = setInterval(checkAndInit, 200);

    return () => {
      if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
      if (initCheckIntervalRef.current) clearInterval(initCheckIntervalRef.current);
    };
  }, []);

  // Global Mobile Touch Gesture Unlocker (Unlocks WebKit & Android Media Session)
  useEffect(() => {
    const handleUserInteraction = () => {
      if (isAudioUnlockedRef.current) return;
      isAudioUnlockedRef.current = true;

      if (playerRef.current && isReadyRef.current) {
        try {
          if (isPlaying && playerRef.current.playVideo) {
            playerRef.current.playVideo();
          }
        } catch (e) {
          // Ignore
        }
      }
    };

    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
    };
  }, [isPlaying]);

  const initPlayer = () => {
    if (!containerRef.current || playerRef.current) return;

    try {
      playerRef.current = new window.YT.Player(containerRef.current, {
        height: '100',
        width: '100',
        videoId: currentSong?.youtubeId || '',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
        },
        events: {
          onReady: (event: any) => {
            isReadyRef.current = true;
            event.target.setVolume(isMuted ? 0 : volume);
            if (currentSong) {
              try {
                isSwitchingTrackRef.current = true;
                lastLoadedSongIdRef.current = currentSong.id;
                event.target.loadVideoById(currentSong.youtubeId, 0);
                if (isPlaying) {
                  const playPromise = event.target.playVideo();
                  if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {
                      onShowToast?.("Tap screen to unlock audio on mobile", "info", "MOBILE AUDIO");
                    });
                  }
                }
              } catch (e) {
                console.warn("YouTube onReady load error:", e);
                isSwitchingTrackRef.current = false;
              }
            }
          },
          onStateChange: (event: any) => {
            // YT.PlayerState: ENDED (0), PLAYING (1), PAUSED (2), BUFFERING (3), CUED (5)
            const state = event.data;

            if (state === window.YT.PlayerState.PLAYING) {
              isSwitchingTrackRef.current = false;
              onPlayingStateChange(true);
              if (playerRef.current?.getDuration) {
                onDuration(playerRef.current.getDuration());
              }
              startTimer();
            } else if (state === window.YT.PlayerState.PAUSED) {
              onPlayingStateChange(false);
              stopTimer();
            } else if (state === window.YT.PlayerState.CUED) {
              // If cued and should be playing, attempt to play (helps mobile browsers)
              if (isPlaying && playerRef.current?.playVideo) {
                try {
                  playerRef.current.playVideo();
                } catch (e) {
                  onShowToast?.("Tap screen to start audio playback", "info", "MOBILE AUDIO");
                }
              }
            } else if (state === window.YT.PlayerState.ENDED) {
              // Guard: Ignore ENDED event fired during track unloading/switching or duplicate events
              const now = Date.now();
              if (isSwitchingTrackRef.current || (now - lastEndedTimestampRef.current < 2000)) {
                console.log("Ignoring duplicate or track-switch YouTube ENDED event");
                return;
              }
              lastEndedTimestampRef.current = now;
              isSwitchingTrackRef.current = true;
              onPlayingStateChange(false);
              stopTimer();
              onEnded();
            }
          },
          onError: (err: any) => {
            console.warn("YouTube player error (code " + err?.data + ") on track:", currentSong?.title);
            stopTimer();
            isSwitchingTrackRef.current = false;

            const songTitle = currentSong?.title || "Track";
            onShowToast?.(`Audio issue with "${songTitle}". Auto-skipping...`, "warning", "PLAYER NOTICE");

            // Skip to next track
            setTimeout(() => {
              onErrorNext();
            }, 800);
          },
        },
      });
    } catch (err) {
      console.warn("Error instantiating YT.Player:", err);
      onShowToast?.("Could not connect to audio stream", "error", "SYSTEM ERROR");
    }
  };

  const startTimer = () => {
    if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
    timeIntervalRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        try {
          const t = playerRef.current.getCurrentTime();
          if (typeof t === 'number' && !isNaN(t)) {
            onTimeUpdate(t);
          }
        } catch (e) {
          // Ignore polling errors
        }
      }
    }, 400);
  };

  const stopTimer = () => {
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }
  };

  // Load new song when currentSong changes
  useEffect(() => {
    if (!playerRef.current || !currentSong || !isReadyRef.current) return;
    if (lastLoadedSongIdRef.current === currentSong.id) return;

    try {
      if (playerRef.current.loadVideoById) {
        isSwitchingTrackRef.current = true;
        lastLoadedSongIdRef.current = currentSong.id;
        playerRef.current.loadVideoById(currentSong.youtubeId, 0);
        if (isPlaying && playerRef.current.playVideo) {
          const playRes = playerRef.current.playVideo();
          if (playRes && typeof playRes.catch === 'function') {
            playRes.catch(() => {
              onShowToast?.("Tap screen to play track", "info", "MOBILE AUDIO");
            });
          }
        }
      }
    } catch (e) {
      console.warn("Error changing video:", e);
      isSwitchingTrackRef.current = false;
    }
  }, [currentSong?.id, currentSong?.youtubeId, isPlaying]);

  // Handle Play/Pause toggle
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.playVideo || !isReadyRef.current) return;
    try {
      if (isPlaying) {
        const p = playerRef.current.playVideo();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            onShowToast?.("Tap screen to play track", "info", "MOBILE AUDIO");
          });
        }
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      onShowToast?.("Tap screen to start playback", "info", "MOBILE AUDIO");
    }
  }, [isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.setVolume || !isReadyRef.current) return;
    try {
      playerRef.current.setVolume(isMuted ? 0 : volume);
    } catch (e) {
      // Ignore initial volume errors
    }
  }, [volume, isMuted]);

  // Handle Seeking / Scrubbing to specific time
  useEffect(() => {
    if (seekTime === undefined || seekTime === null || !playerRef.current || !playerRef.current.seekTo || !isReadyRef.current) return;
    try {
      playerRef.current.seekTo(seekTime, true);
    } catch (e) {
      console.warn("Seek error:", e);
    }
  }, [seekTime]);

  return (
    <div className="fixed top-0 right-0 w-1 h-1 opacity-[0.01] pointer-events-none z-0 overflow-hidden">
      <div ref={containerRef} id="yt-audio-player" />
    </div>
  );
}
