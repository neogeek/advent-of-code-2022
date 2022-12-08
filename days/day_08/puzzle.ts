import * as mod from 'https://deno.land/std@0.167.0/uuid/mod.ts';

const parseTrees = (input: string) => {
  const rows = input
    .trim()
    .split('\n')
    .map(line =>
      line.split('').map(item => ({
        uuid: mod.v1.generate().toString(),
        height: parseInt(item),
      }))
    );

  const cols = new Array(rows[0].length);

  cols.fill([]).map((_, index) => {
    cols[index] = rows.map(row => row[index]);
  });

  return { rows, cols };
};

const checkForHeight = (items: { uuid: string; height: number }[]) => {
  return items.filter((item, index) => {
    return !items.slice(0, index).some(prev => prev.height >= item.height);
  });
};

export const calculatePart1 = (input: string) => {
  const { rows, cols } = parseTrees(input);

  const visible: { uuid: string; height: number }[] = [];

  rows.map(row => {
    checkForHeight(row).map(item => visible.push(item));
    checkForHeight(row.reverse()).map(item => visible.push(item));
  }, 0);

  cols.map(l => {
    checkForHeight(l).map(item => visible.push(item));
    checkForHeight(l.reverse()).map(item => visible.push(item));
  }, 0);

  return Array.from(new Set(visible)).length;
};

export const calculatePart2 = (input: string) => {
  return 0;
};
