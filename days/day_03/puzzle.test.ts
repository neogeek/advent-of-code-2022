import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';

import { calculatePart1, calculatePart2 } from './puzzle.ts';

const example = Deno.readTextFileSync('days/day_03/example.txt');

Deno.test('day 3', () => {
  Deno.test('part 1', t => {
    t.step('returns the expected result', () => {
      assertEquals(calculatePart1(example), 157);
    });
  });
  Deno.test('part 2', t => {
    t.step('returns the expected result', () => {
      assertEquals(calculatePart2(example), 70);
    });
  });
});
