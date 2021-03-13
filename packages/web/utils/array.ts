export function comparison<T>(key: string, desc = false) {
  return (a: { [index: string]: T }, b: { [index: string]: T }) => {
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return desc ? comparison * -1 : comparison;
  };
}

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
