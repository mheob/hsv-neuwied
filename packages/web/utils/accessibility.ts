export function initFocusRingOnlyOnTab() {
  function handleFirstTab(keyDownEvent: KeyboardEvent) {
    if (keyDownEvent.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');

      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  }

  function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');

    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  }

  window.addEventListener('keydown', handleFirstTab);
}
