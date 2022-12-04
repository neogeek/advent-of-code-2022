export const chunk = <T>(array: T[], size = 1) =>
  array.reduce((prev, curr) => {
    const group = prev[prev.length - 1];

    if (Array.isArray(group) && group.length < size) {
      group.push(curr);
    } else {
      prev.push([curr]);
    }

    return prev;
  }, [] as T[][]);

export const containsEvery = <T>(array1: T[], array2: T[]) =>
  array2.every(item => array1.includes(item));

export const containsAny = <T>(array1: T[], array2: T[]) =>
  array2.some(item => array1.includes(item));
