import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import { calculatePart1, calculatePart2 } from './puzzle.ts';

const example = Deno.readTextFileSync('days/day_17/example.txt');

describe('day 17', () => {
  describe('part 1', () => {
    it.ignore('returns the expected result', () => {
      assertEquals(calculatePart1(example), -1);
    });
  });
  describe('part 2', () => {
    it.ignore('returns the expected result', () => {
      assertEquals(calculatePart2(example), -1);
    });
  });
});
