import type { Position } from '../types.ts';

export const plotGraph = (positions: Position[], fill = '#') => {
  const map = {
    min: { x: 0, y: 0 },
    max: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
  };

  positions.map(position => {
    map.min.x = Math.min(map.min.x, position.x);
    map.min.y = Math.min(map.min.y, position.y);
    map.max.x = Math.max(map.max.x, position.x);
    map.max.y = Math.max(map.max.y, position.y);
  });

  map.offset.x = Math.abs(map.min.x);
  map.offset.y = Math.abs(map.min.y);
  map.max.x += map.offset.x;
  map.max.y += map.offset.y;

  const graph: string[][] = new Array(map.max.y + 1)
    .fill(null)
    .map(() => new Array(map.max.x + 1).fill('.'));

  positions.map(position => {
    graph[map.offset.y + position.y][map.offset.x + position.x] = fill;
  });

  return graph.map(line => line.join('')).join('\n');
};

export const flipGraph = (graph: string) =>
  graph.split('\n').reverse().join('\n');
