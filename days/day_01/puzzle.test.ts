import { readFileSync } from 'fs';

import { calculatePart1, calculatePart2 } from './puzzle';

const example = readFileSync('days/day_01/example.txt', 'utf-8');

describe('day 1', () => {
  describe('part 1', () => {
    it('returns the expected result', () => {
      expect(calculatePart1(example)).toBe(24000);
    });
  });
  describe('part 2', () => {
    it('returns the expected result', () => {
      expect(calculatePart2(example)).toBe(45000);
    });
  });
});
