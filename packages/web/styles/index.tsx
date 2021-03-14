import Base from './base';
import Fonts from './fonts';
import Reset from './reset';

export { breakpoints, mediaQuery, theme } from './theme';

export default function GlobalStyles() {
  return (
    <>
      <Fonts />
      <Reset />
      <Base />
    </>
  );
}
