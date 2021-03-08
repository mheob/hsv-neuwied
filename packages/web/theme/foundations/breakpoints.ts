export const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

export const mediaQuery = (breakPoint: keyof typeof breakpoints) => {
  // @ts-ignore
  const breakPointArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

  const [result] = breakPointArray.reduce((acc, [name, size]) => {
    if (breakPoint === name) return [...acc, `@media (min-width: ${size})`];
    return acc;
  }, []);

  return result as string;
};

export default breakpoints;
