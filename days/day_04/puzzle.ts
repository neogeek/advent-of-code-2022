import { chunk, containsAny, containsEvery } from '../../utils/array.ts';

export const calculatePart1 = (input: string) => {
  const ranges = input
    .trim()
    .split('\n')
    .map(line => line.split(','))
    .flat()
    .map(item => item.split('-').map(number => parseInt(number)))
    .map(items =>
      new Array(items[1] - items[0] + 1)
        .fill('')
        .map((_, index) => items[0] + index)
    );

  return chunk(ranges, 2).filter(([array1, array2]) => {
    return containsEvery(array1, array2) || containsEvery(array2, array1);
  }).length;
};

export const calculatePart2 = (input: string) => {
  const ranges = input
    .trim()
    .split('\n')
    .map(line => line.split(','))
    .flat()
    .map(item => item.split('-').map(number => parseInt(number)))
    .map(items =>
      new Array(items[1] - items[0] + 1)
        .fill('')
        .map((_, index) => items[0] + index)
    );

  return chunk(ranges, 2).filter(
    ([array1, array2]) =>
      containsAny(array1, array2) || containsAny(array2, array1)
  ).length;
};
