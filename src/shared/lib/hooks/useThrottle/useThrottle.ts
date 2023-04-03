import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      timerRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [callback, delay]);
}
