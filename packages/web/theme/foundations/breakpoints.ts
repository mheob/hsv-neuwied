export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
  '3xl': '120em',
};

export const getBreakpointInRemAsInteger = (breakpoint: Breakpoint) => {
  const breakpointValueAsString = breakpoints[breakpoint];
  const breakpointValueAsInteger = +breakpointValueAsString.slice(0, -2);
  return breakpointValueAsInteger;
};

export const mediaQuery = (breakPoint: Breakpoint) => {
  // @ts-ignore
  const breakPointArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

  const [result] = breakPointArray.reduce((acc, [name, size]) => {
    if (breakPoint === name) return [...acc, `@media (min-width: ${size})`];
    return acc;
  }, []);

  return result as string;
};

export default breakpoints;
