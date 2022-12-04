import { chunk, containsAny, containsEvery } from './array';

describe('array', () => {
  describe('chunk', () => {
    it('groups array into chunks of 3', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(chunk(input, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    });
  });
  describe('contains', () => {
    it('array1 contains all items in array2', () => {
      const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const array2 = [1, 2, 3, 4];

      expect(containsEvery(array1, array2)).toBeTruthy();
    });
    it('array1 contains some items in array2', () => {
      const array1 = [1, 2, 3];
      const array2 = [1, 2, 3, 4];

      expect(containsAny(array1, array2)).toBeTruthy();
    });
  });
});
