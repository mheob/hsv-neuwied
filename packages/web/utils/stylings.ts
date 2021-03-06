export function getRgbaStringFromHex(hex: string, opacity?: number) {
  // separates a hex color (#00ff00) to an array of rgb values ([0, 255, 0])
  const separatedColors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!separatedColors) return 'rgba(0, 0, 0, 0)';

  const red = parseInt(separatedColors[1], 16);
  const green = parseInt(separatedColors[2], 16);
  const blue = parseInt(separatedColors[3], 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity || 1})`;
}
