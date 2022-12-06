import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import { calculatePart1, calculatePart2 } from './puzzle.ts';

describe('day 6', () => {
  describe('part 1', () => {
    Deno.test('returns the expected result', () => {
      assertEquals(calculatePart1('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 7);
      assertEquals(calculatePart1('bvwbjplbgvbhsrlpgdmjqwftvncz'), 5);
      assertEquals(calculatePart1('nppdvjthqldpwncqszvftbrmjlhg'), 6);
      assertEquals(calculatePart1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 10);
      assertEquals(calculatePart1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 11);
    });
  });
  describe('part 2', () => {
    Deno.test('returns the expected result', () => {
      assertEquals(calculatePart2('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), 19);
      assertEquals(calculatePart2('bvwbjplbgvbhsrlpgdmjqwftvncz'), 23);
      assertEquals(calculatePart2('nppdvjthqldpwncqszvftbrmjlhg'), 23);
      assertEquals(calculatePart2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 29);
      assertEquals(calculatePart2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 26);
    });
  });
});
