import Base from './base';
import Fonts from './fonts';
import Reset from './reset';

export * from './breakpoints';
export * from './utils';

export default function GlobalStyles() {
  return (
    <>
      <Fonts />
      <Reset />
      <Base />
    </>
  );
}
