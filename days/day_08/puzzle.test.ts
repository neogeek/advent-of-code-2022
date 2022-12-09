import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import {
  calculatePart1,
  calculatePart2,
  checkForDistance,
  checkForHeight,
} from './puzzle.ts';

const example = Deno.readTextFileSync('days/day_08/example.txt');
const input = Deno.readTextFileSync('days/day_08/input.txt');

describe('day 8', () => {
  describe('part 1', () => {
    Deno.test('returns the expected result', () => {
      assertEquals(calculatePart1(example), 21);
      assertEquals(calculatePart1(input), 1684);
    });
  });
  describe('part 2', () => {
    Deno.test('returns the expected result', () => {
      assertEquals(calculatePart2(example), 8);
    });
  });

  describe('utils', () => {
    Deno.test('calculates tree height', () => {
      assertEquals(
        checkForHeight([
          { height: 3 },
          { height: 0 },
          { height: 3 },
          { height: 7 },
          { height: 3 },
        ]),
        [{ height: 3 }, { height: 7 }]
      );
    });
    Deno.test('calculates distance', () => {
      assertEquals(
        checkForDistance(
          [
            { height: 3 },
            { height: 0 },
            { height: 3 },
            { height: 7 },
            { height: 3 },
          ],
          7
        ),
        4
      );
    });
  });
});
