import { NextRouter } from 'next/router';

export function getPartOfUrl(path: NextRouter, position: number) {
  if (!path) return '';
  return path.asPath.substring(
    path.asPath.indexOf('/', position - 1) + 1,
    path.asPath.indexOf('/', position)
  );
}

export function getLastPartOfUrl(path: NextRouter) {
  if (!path) return '';
  return path.asPath.substring(path.asPath.lastIndexOf('/') + 1);
}
