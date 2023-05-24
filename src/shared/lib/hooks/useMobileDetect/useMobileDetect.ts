import { useEffect, useState } from 'react';

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;
    setIsMobile(window.matchMedia('(pointer:coarse)').matches);
  }, []);

  return isMobile;
}
