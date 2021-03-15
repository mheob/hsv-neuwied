import { useEffect, useLayoutEffect, useState } from 'react';

import { Breakpoint, breakpoints } from '../styles';
import { canUseDOM } from '../utils/dom';

const isBrowser = canUseDOM();

const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

function ChakraUseMediaQuery(query: string | string[]): boolean[] {
  const queries = Array.isArray(query) ? query : [query];
  const isSupported = isBrowser && 'matchMedia' in window;

  const [matches, setMatches] = useState(
    queries.map((query) => (isSupported ? !!window.matchMedia(query).matches : false))
  );

  useSafeLayoutEffect(() => {
    if (!isSupported) return undefined;

    const mediaQueryList = queries.map((query) => window.matchMedia(query));

    const listenerList = mediaQueryList.map((mediaQuery, index) => {
      const listener = () =>
        setMatches((prev) =>
          prev.map((prevValue, idx) => (index === idx ? !!mediaQuery.matches : prevValue))
        );

      mediaQuery.addEventListener('change', listener);

      return listener;
    });

    return () => {
      mediaQueryList.forEach((mediaQuery, index) => {
        mediaQuery.removeEventListener('change', listenerList[index]);
      });
    };
  }, [query]);

  return matches;
}

type Direction = 'max' | 'min';

export function useMediaQuery(breakpoint: Breakpoint, direction: Direction = 'max') {
  const [matches] = ChakraUseMediaQuery(`(${direction}-width: ${breakpoints[breakpoint]}px)`);
  return matches;
}
