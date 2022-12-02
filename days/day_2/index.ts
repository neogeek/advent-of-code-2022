import { readFileSync } from 'fs';

import { calculatePart1, calculatePart2 } from './puzzle.js';

const input = readFileSync('days/day_2/input.txt', 'utf-8');

console.log('\n===== Day 2 =====\n');

console.log(`Part 1: ${calculatePart1(input)}`);

console.log(`Part 2: ${calculatePart2(input)}`);
