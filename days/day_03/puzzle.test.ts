import { readFileSync } from 'fs';

import { calculatePart1, calculatePart2 } from './puzzle';

const example = readFileSync('days/day_03/example.txt', 'utf-8');

describe('day 3', () => {
  describe('part 1', () => {
    it('returns the expected result', () => {
      expect(calculatePart1(example)).toBe(157);
    });
  });
  describe('part 2', () => {
    it('returns the expected result', () => {
      expect(calculatePart2(example)).toBe(70);
    });
  });
});
