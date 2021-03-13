export function formatDateToLocaleLong(date = new Date(), locale = 'de-DE') {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDateToLocaleShort(date = new Date(), locale = 'de-DE') {
  return date.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: '2-digit' });
}

export function formatTimeToLocaleShort(date = new Date(), locale = 'de-DE') {
  return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
}
