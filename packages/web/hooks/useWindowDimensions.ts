import { useEffect, useState } from 'react';

export function getWindowDimensions() {
  if (typeof window !== 'undefined' && window.innerWidth && window.innerHeight) {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  return { width: 0, height: 0 };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
