import { readFileSync } from 'fs';

import { calculatePart1, calculatePart2 } from './puzzle';

const example = readFileSync('days/day_2/example.txt', 'utf-8');

describe('day 2', () => {
  describe('part 1', () => {
    it('returns the expected result', () => {
      expect(calculatePart1(example)).toBe(15);
    });
  });
  describe('part 2', () => {
    it('returns the expected result', () => {
      expect(calculatePart2(example)).toBe(12);
    });
  });
});
