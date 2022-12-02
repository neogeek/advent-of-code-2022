const { readFileSync } = require('fs');

const input = readFileSync('input.txt', 'utf-8')
  .trim()
  .split(/\n{2,}/)
  .map((group) =>
    group
      .split(/\n/)
      .map((item) => parseInt(item, 10))
      .reduce((prev, acc) => prev + acc)
  )
  .map((item, index) => ({ id: index + 1, total: item }))
  .sort((a, b) => a.total - b.total)
  .reverse();

console.log('\n===== Day 1 =====\n');

console.log(`Part 1: ${input[0].total}`);

console.log(
  `Part 2: ${input.slice(0, 3).reduce((prev, acc) => prev + acc.total, 0)}`
);