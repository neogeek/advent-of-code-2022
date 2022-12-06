import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import { calculatePart1, calculatePart2 } from './puzzle.ts';

const example = Deno.readTextFileSync('days/day_05/example.txt');

describe('day 5', () => {
  describe('part 1', () => {
    Deno.test('returns the expected result', () => {
      assertEquals(calculatePart1(example), 'CMZ');
    });
  });
  describe('part 2', () => {
    Deno.test('returns the expected result', () => {
      assertEquals(calculatePart2(example), 'MCD');
    });
  });
});
