import { useState, useRef, useCallback, useEffect } from 'react';

export const useTimer = (init: number) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(init);
  const timerRef = useRef(null);

  const handleStartTimer = useCallback(() => {
    if (timer > 0) setIsRunning(true);
  }, [timer]);

  const handlePauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleResetTimer = useCallback(() => {
    setIsRunning(false);
    setTimer(60);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    timerRef.current = id;

    return () => clearInterval(id);
  }, [isRunning]);

  return {
    handlePauseTimer,
    handleResetTimer,
    handleStartTimer,
    timer,
    isRunning
  };
};