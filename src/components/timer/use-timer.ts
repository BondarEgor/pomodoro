import { useState, useRef, useEffect } from 'react';

type Mode = 'classic' | 'deep' | 'short';

export const MODES = {
  classic: 25,
  deep: 50,
  short: 15,
};

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(MODES['classic'] * 60);
  const [mode, setMode] = useState<Mode>('classic');

  const timerRef = useRef(null);

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
    setSeconds(MODES[mode] * 60);
  };

  const handleChooseMode = (mode: Mode) => {
    setIsRunning(false);

    const minutes = MODES[mode];
    setSeconds(minutes * 60);

    setMode(mode);
  };

  const minutes = Math.floor(seconds / 60);
  const secondsLeft = String(seconds % 60).padStart(2, '0');

  const time = `${minutes}:${secondsLeft}`;

  return {
    handlePauseTimer,
    handleResetTimer,
    handleStartTimer,
    handleSetClassic: () => handleChooseMode('classic'),
    handleSetDeep: () => handleChooseMode('deep'),
    handleSetShort: () => handleChooseMode('short'),
    time,
    mode,
    minutes,
    setSeconds: (number) => setSeconds(number * 60),
    isRunning
  };
};