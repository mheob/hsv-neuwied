function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

export function shuffle<T>(array: T[]) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    const randomChoiceIndex = getRandom(i, array.length - 1);
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}
