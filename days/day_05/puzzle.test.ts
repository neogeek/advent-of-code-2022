import { readFileSync } from 'fs';

import { calculatePart1, calculatePart2 } from './puzzle';

const example = readFileSync('days/day_05/example.txt', 'utf-8');

describe('day 5', () => {
  describe('part 1', () => {
    it('returns the expected result', () => {
      expect(calculatePart1(example)).toBe('CMZ');
    });
  });
  describe('part 2', () => {
    it('returns the expected result', () => {
      expect(calculatePart2(example)).toBe('MCD');
    });
  });
});
