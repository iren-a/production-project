import { useCallback, useRef } from 'react';

/**
 * Хук, отменяет предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay – задержка в мс
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback((...args: any[]) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [callback, delay]);
}
