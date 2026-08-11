// 90s Barber Shop Real ASMR Ambiance Player

let audio1: HTMLAudioElement | null = null;
let audio2: HTMLAudioElement | null = null;
let currentTrackIndex = 0;
let isPlayingAmbiance = false;

export function startBarberShopAmbiance() {
  if (typeof window === 'undefined') return;
  if (isPlayingAmbiance) return;
  isPlayingAmbiance = true;

  if (!audio1) {
    audio1 = new Audio('/ambiance/haircut-scissors.mp3');
    audio1.volume = 0.18;
  }
  if (!audio2) {
    audio2 = new Audio('/ambiance/head-massage.mp3');
    audio2.volume = 0.18;
  }

  const tracks = [audio1, audio2];

  const playTrack = (index: number) => {
    if (!isPlayingAmbiance) return;
    currentTrackIndex = index;
    const currentAudio = tracks[index];

    try {
      currentAudio.currentTime = 0;
      currentAudio.volume = 0.18;

      currentAudio.onended = () => {
        if (isPlayingAmbiance) {
          const nextIndex = (index + 1) % tracks.length;
          playTrack(nextIndex);
        }
      };

      const playPromise = currentAudio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((e) => {
          console.warn("Ambiance playback blocked by browser:", e);
        });
      }
    } catch (e) {
      console.warn("Ambiance error:", e);
    }
  };

  playTrack(currentTrackIndex);
}

export function stopBarberShopAmbiance() {
  isPlayingAmbiance = false;
  try {
    if (audio1) {
      audio1.pause();
      audio1.currentTime = 0;
    }
    if (audio2) {
      audio2.pause();
      audio2.currentTime = 0;
    }
  } catch (e) {
    // Ignore pause errors
  }
}
