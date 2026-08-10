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
}: YouTubeAudioPlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isReadyRef = useRef<boolean>(false);
  const isSwitchingTrackRef = useRef<boolean>(false);

  // Load YouTube IFrame API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
    };
  }, []);

  const initPlayer = () => {
    if (!containerRef.current || playerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      height: '200',
      width: '200',
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
              event.target.loadVideoById(currentSong.youtubeId, 0);
              if (isPlaying) {
                event.target.playVideo();
              }
            } catch (e) {
              console.warn("YouTube onReady error:", e);
              isSwitchingTrackRef.current = false;
            }
          }
        },
        onStateChange: (event: any) => {
          // YT.PlayerState: ENDED (0), PLAYING (1), PAUSED (2), BUFFERING (3)
          if (event.data === window.YT.PlayerState.PLAYING) {
            isSwitchingTrackRef.current = false;
            onPlayingStateChange(true);
            if (playerRef.current?.getDuration) {
              onDuration(playerRef.current.getDuration());
            }
            startTimer();
          } else if (event.data === window.YT.PlayerState.PAUSED) {
            onPlayingStateChange(false);
            stopTimer();
          } else if (event.data === window.YT.PlayerState.ENDED) {
            // Guard: Ignore ENDED event fired during track unloading/switching
            if (isSwitchingTrackRef.current) {
              console.log("Ignoring YouTube ENDED event during track switch");
              return;
            }
            onPlayingStateChange(false);
            stopTimer();
            onEnded();
          }
        },
        onError: (err: any) => {
          console.warn("YouTube player error (code " + err?.data + ") on track:", currentSong?.title);
          stopTimer();
          isSwitchingTrackRef.current = false;
          // Error 2 (invalid param), 100 (not found), 101/150 (embed disabled) -> skip to next track
          if ([2, 100, 101, 150].includes(err?.data)) {
            setTimeout(() => {
              onErrorNext();
            }, 800);
          }
        },
      },
    });
  };

  const startTimer = () => {
    if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
    timeIntervalRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        onTimeUpdate(playerRef.current.getCurrentTime());
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
    try {
      if (playerRef.current.loadVideoById) {
        isSwitchingTrackRef.current = true;
        playerRef.current.loadVideoById(currentSong.youtubeId, 0);
        if (isPlaying) {
          playerRef.current.playVideo();
        }
      }
    } catch (e) {
      console.warn("Error changing video:", e);
      isSwitchingTrackRef.current = false;
    }
  }, [currentSong?.id, currentSong?.youtubeId]);

  // Handle Play/Pause toggle
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.playVideo || !isReadyRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      // Ignore initial state errors
    }
  }, [isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.setVolume || !isReadyRef.current) return;
    playerRef.current.setVolume(isMuted ? 0 : volume);
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
    <div className="fixed bottom-0 right-0 w-1 h-1 opacity-0 pointer-events-none -z-50 overflow-hidden">
      <div ref={containerRef} id="yt-audio-player" />
    </div>
  );
}
