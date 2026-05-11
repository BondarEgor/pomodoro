import { useState, useRef, useEffect } from 'react';

type Mode = 'classic' | 'deep' | 'short';

const PRESETS = {
  classic: 25,
  deep: 50,
  short: 15,
};

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(PRESETS['classic'] * 60);
  const timerRef = useRef(null);
  const lastModeRef = useRef<Mode>('classic');

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 897) {
          setIsRunning(false);

          const permission = Notification.permission;

          if (permission === 'granted') {
            new Notification('Timer is over');
            const audio = new Audio('./sound.mp3');
            audio.play();

          } else if (permission !== 'denied') {
            Notification.requestPermission().then((reqPermission) => {
              if (reqPermission === 'granted') {
                new Notification('Timer is over');
              }
            });
          }

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    timerRef.current = id;

    return () => clearInterval(id);
  }, [isRunning]);

  const handleStartTimer = () => {
    if (seconds > 0) setIsRunning(true);
  };

  const handlePauseTimer = () => setIsRunning(false);

  const handleResetTimer = () => {
    setIsRunning(false);
    setSeconds(PRESETS[lastModeRef.current] * 60);
  };

  const handleSetMinutes = (mode: Mode) => {
    setIsRunning(false);

    const minutes = PRESETS[mode];
    setSeconds(minutes * 60);

    lastModeRef.current = mode;
  };

  const minutes = Math.floor(seconds / 60);
  const secondsLeft = String(seconds % 60).padStart(2, '0');

  const time = `${minutes}:${secondsLeft}`;

  return {
    handlePauseTimer,
    handleResetTimer,
    handleStartTimer,
    handleSetClassic: () => handleSetMinutes('classic'),
    handleSetDeep: () => handleSetMinutes('deep'),
    handleSetShort: () => handleSetMinutes('short'),
    time,
    minutes,
    setSeconds: (number) => setSeconds(number * 60),
    isRunning
  };
};