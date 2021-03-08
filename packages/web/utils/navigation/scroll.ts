type NavigationBarState = { limitPosition: number; pinned: boolean; lastPosition: number };

export function navigationBarState({
  lastPosition,
  limitPosition,
  pinned,
}: NavigationBarState): [boolean, number] {
  if (lastPosition < window.scrollY && limitPosition < window.scrollY) {
    pinned = true;
  }

  if (lastPosition > window.scrollY && limitPosition > window.scrollY) {
    pinned = false;
  }

  return [pinned, window.scrollY];
}

export function toggleScrollingState(disableScroll: boolean) {
  const body = document.querySelector('body');

  if (!body) return;

  if (disableScroll) {
    window.scrollTo(0, 0);
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}
