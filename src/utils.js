// @flow

export const clamp = (x: number, bounds: $ReadOnlyArray<number>): number => {
  const [min, max] = bounds;
  if (x > max) return max;
  if (x < min) return min;
  return x;
};

/**
 * Trransform values to new range
 * @param {*} x
 * @param {*} boundsOld
 * @param {*} boundsNew
 */
export const getTransformedValue = (
  x: number,
  boundsOld: Array<number>,
  boundsNew: Array<number>
): number => {
  const number = clamp(x, boundsOld);
  const [minOld, maxOld] = boundsOld;
  const [minNew, maxNew] = boundsNew;
  return (number - (minOld - minNew)) * ((maxNew - minNew) / (maxOld - minOld));
};

export const getRandomColor = (): string => {
  // from https://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript#1152508
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};
