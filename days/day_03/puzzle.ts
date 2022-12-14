import { chunk } from '../../utils/array.ts';

const letters = new Array(26)
  .fill(0)
  .map((_, n) => String.fromCharCode(97 + n));

const map = [...letters, ...letters.map(letter => letter.toUpperCase())];

export const calculatePart1 = (input: string) => {
  return input
    .trim()
    .split(/\n/)
    .map(group => {
      const arrays = chunk(group.split(''), group.length / 2);

      const match = Array.from(
        new Set(arrays[0].filter(item => arrays[1].includes(item)))
      );

      return map.indexOf(match[0]) + 1;
    })
    .reduce((prev, acc) => prev + acc);
};

export const calculatePart2 = (input: string) => {
  return chunk(input.trim().split(/\n/), 3)
    .map(groups => {
      const match = Array.from(
        new Set(
          groups[0]
            .split('')
            .filter(
              item =>
                groups[1].split('').includes(item) &&
                groups[2].split('').includes(item)
            )
        )
      );

      return map.indexOf(match[0]) + 1;
    })
    .reduce((prev, acc) => prev + acc);
};
