// @flow

export const clamp = (x, bounds) => {
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
) => {
  const number = clamp(x, boundsOld);
  const [minOld, maxOld] = boundsOld;
  const [minNew, maxNew] = boundsNew;
  console.log({ number, minOld, maxOld, minNew, maxNew });
  return (number - (minOld - minNew)) * ((maxNew - minNew) / (maxOld - minOld));
};
