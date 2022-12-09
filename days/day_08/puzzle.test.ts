import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

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
    it('returns the expected result', () => {
      assertEquals(calculatePart1(example), 21);
      assertEquals(calculatePart1(input), 1684);
    });
  });
  describe('part 2', () => {
    it('returns the expected result', () => {
      assertEquals(calculatePart2(example), 8);
    });
  });

  describe('utils', () => {
    describe('calculates tree height', () => {
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
    describe('calculates distance', () => {
      it('check against a number of trees', () => {
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
      it('check against one tree', () => {
        assertEquals(checkForDistance([{ height: 7 }], 7), 1);
      });
      it('check against no trees', () => {
        assertEquals(checkForDistance([], 7), 0);
      });
    });
  });
});
