import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import { calculatePart1, calculatePart2 } from './puzzle.ts';

const example = Deno.readTextFileSync('days/day_09/example.txt');
const example2 = Deno.readTextFileSync('days/day_09/example2.txt');

describe('day 9', () => {
  describe('part 1', () => {
    it('returns the expected result', () => {
      assertEquals(calculatePart1(example), 13);
    });
  });
  describe('part 2', () => {
    it.ignore('returns the expected result', () => {
      assertEquals(calculatePart2(example2), 36);
    });
  });
});
