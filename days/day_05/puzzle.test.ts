import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';

import { calculatePart1, calculatePart2 } from './puzzle.ts';

const example = Deno.readTextFileSync('days/day_04/example.txt');

Deno.test('day 5', () => {
  Deno.test('part 1', t => {
    t.step('returns the expected result', () => {
      assertEquals(calculatePart1(example), 'CMZ');
    });
  });
  Deno.test('part 2', t => {
    t.step('returns the expected result', () => {
      assertEquals(calculatePart2(example), 'MCD');
    });
  });
});
