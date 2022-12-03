import { readFileSync } from 'fs';

import { calculatePart1 } from './puzzle';

const example = readFileSync('days/day_03/example.txt', 'utf-8');

describe('day 3', () => {
  describe('part 1', () => {
    it('returns the expected result', () => {
      expect(calculatePart1(example)).toBe(157);
    });
  });
});
