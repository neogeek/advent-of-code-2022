import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import {
  chunk,
  containsAny,
  containsEvery,
  unique,
  uniqueObject,
} from './array.ts';

describe('array', () => {
  describe('chunk', () => {
    it('groups array into chunks of 3', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      assertEquals(chunk(input, 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
    });
  });
  describe('contains', () => {
    it('array1 contains all items in array2', () => {
      const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const array2 = [1, 2, 3, 4];

      assertEquals(containsEvery(array1, array2), true);
    });
    it('array1 contains some items in array2', () => {
      const array1 = [1, 2, 3];
      const array2 = [1, 2, 3, 4];

      assertEquals(containsAny(array1, array2), true);
    });
  });
  describe('unique', () => {
    it('unique array values', () => {
      assertEquals(unique([1, 2, 3, 4, 5, 5]), [1, 2, 3, 4, 5]);
    });
  });
  describe('uniqueObject', () => {
    it('unique object values', () => {
      assertEquals(uniqueObject([{ key: 'value' }, { key: 'value' }]), [
        { key: 'value' },
      ]);
    });
  });
});
