import * as mod from 'https://deno.land/std@0.167.0/uuid/mod.ts';

import { sortNumbers, reverse } from '../../utils/array.ts';

interface Tree {
  uuid?: string;
  height: number;
}

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

  const cols: Tree[][] = new Array(rows[0].length);

  cols.fill([]).map((_, index) => {
    cols[index] = rows.map(row => row[index]);
  });

  return { rows, cols };
};

export const checkForHeight = (items: Tree[]) => {
  return items.filter((item, index) => {
    return !items.slice(0, index).some(prev => prev.height >= item.height);
  });
};

export const checkForDistance = (items: Tree[], height: number) => {
  const tallerTrees = items.findIndex(item => item.height >= height);

  if (tallerTrees === -1) return items.length;

  return items.slice(0, tallerTrees + 1).length;
};

export const calculatePart1 = (input: string) => {
  const { rows, cols } = parseTrees(input);

  const visible: Tree[] = [];

  rows.map(row => {
    checkForHeight(row).map(item => visible.push(item));
    checkForHeight(reverse(row)).map(item => visible.push(item));
  }, 0);

  cols.map(col => {
    checkForHeight(col).map(item => visible.push(item));
    checkForHeight(reverse(col)).map(item => visible.push(item));
  }, 0);

  return Array.from(new Set(visible)).length;
};

export const calculatePart2 = (input: string) => {
  const { rows, cols } = parseTrees(input);

  const scores: number[] = [];

  rows.map((_, rowIndex) =>
    cols.map((_, colIndex) => {
      const item = rows[rowIndex][colIndex];

      const top = checkForDistance(
        reverse(cols[colIndex].slice(0, rowIndex)),
        item.height
      );

      const left = checkForDistance(
        reverse(rows[rowIndex].slice(0, colIndex)),
        item.height
      );

      const right = checkForDistance(
        rows[rowIndex].slice(colIndex + 1),
        item.height
      );

      const bottom = checkForDistance(
        cols[colIndex].slice(rowIndex + 1),
        item.height
      );

      const score = top * left * right * bottom;

      if (score) {
        scores.push(score);
      }
    })
  );

  return reverse(sortNumbers(scores))[0];
};
