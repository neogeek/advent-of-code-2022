const letters = new Array(26)
  .fill(0)
  .map((_, n) => String.fromCharCode(97 + n));

const map = [...letters, ...letters.map(letter => letter.toUpperCase())];

export const calculatePart1 = (input: string) => {
  return input
    .trim()
    .split(/\n/)
    .map(group => {
      const array1 = group.slice(0, group.length / 2).split('');
      const array2 = group.slice(group.length / 2).split('');

      const match = Array.from(
        new Set(array1.filter(item => array2.includes(item)))
      );

      return map.indexOf(match[0]) + 1;
    })
    .reduce((prev, acc) => prev + acc);
};
