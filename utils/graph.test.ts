import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.167.0/testing/bdd.ts';

import { flipGraph, plotGraph } from './graph.ts';

describe('graph', () => {
  describe('plotGraph', () => {
    it('plot numbers on a graph', () => {
      assertEquals(
        plotGraph([
          { x: -2, y: 0 },
          { x: -1, y: 0 },
          { x: 1, y: 0 },
          { x: 2, y: 0 },
          { x: 3, y: 0 },
          { x: 3, y: 3 },
        ]),
        `##.###
......
......
.....#`
      );
    });
  });
  describe('flipGraph', () => {
    it('plot numbers on a graph and flip it', () => {
      assertEquals(
        flipGraph(
          plotGraph([
            { x: -2, y: 0 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 3, y: 3 },
          ])
        ),
        `.....#
......
......
##.###`
      );
    });
  });
});
