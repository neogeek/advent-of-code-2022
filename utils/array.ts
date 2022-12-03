export const chunk = <T>(array: T[], size = 1) =>
  array.reduce((prev, curr, index) => {
    const group = prev[prev.length - 1];

    if (Array.isArray(group) && group.length < size) {
      group.push(curr);
    } else {
      prev.push([curr]);
    }

    return prev;
  }, [] as T[][]);
