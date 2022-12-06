import { globber } from 'https://deno.land/x/globber@0.1.0/mod.ts';
import { dirname } from 'https://deno.land/std@0.167.0/path/mod.ts';

const iterator = globber({
  include: ['**/puzzle.ts'],
});

const results = [];

for await (const entry of iterator) {
  const importedModule = await import(`./${entry.relative}`);

  const input = await Deno.readTextFile(`${dirname(entry.relative)}/input.txt`);

  const matches = entry.relative.match(/[0-9]+/);

  if (matches) {
    results.push({
      Label: `Day ${matches[0]}`,
      'Part 1': importedModule.calculatePart1(input),
      'Part 2': importedModule.calculatePart2(input),
    });
  }
}

console.table(results.sort((a, b) => b.Label.localeCompare(a.Label)).reverse());
