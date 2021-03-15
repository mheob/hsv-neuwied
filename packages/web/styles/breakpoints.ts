export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1952,
};

export type Breakpoint = keyof typeof breakpoints;

export const mediaQuery = (breakPoint: Breakpoint) => {
  // @ts-ignore
  const breakPointArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

  const [result] = breakPointArray.reduce((acc, [name, size]) => {
    if (breakPoint === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result as string;
};
