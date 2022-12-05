import { dirname } from 'path';

import { readFile } from 'fs/promises';

import Table from 'cli-table3';

import { globby } from 'globby';

const paths = await globby(['./days/**/puzzle.ts']);

const table = new Table({ head: ['', 'Part 1', 'Part 2'] });

const results: { index: number; values: [number, number] }[] = [];

await Promise.all(
  paths.sort().map(async (path, index) => {
    const importedModule = await import(path);

    const input = await readFile(`${dirname(path)}/input.txt`, 'utf-8');

    results.push({
      index,
      values: [
        importedModule.calculatePart1(input),
        importedModule.calculatePart2(input),
      ],
    });
  })
);

results
  .sort((a, b) => a.index - b.index)
  .map(({ index, values }) => {
    table.push({ [`Day ${index + 1}`]: values });
  });

console.log(table.toString());
