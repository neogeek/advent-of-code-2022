import type { Position } from '../../types.ts';

import { uniqueObject } from '../../utils/array.ts';
import { flipGraph, plotGraph } from '../../utils/graph.ts';

interface Step {
  position: Position;
}

const calculateTailPosition = (
  position: Position,
  previousPosition: Position
) => {
  if (previousPosition.x - position.x > 1) {
    if (position.y != previousPosition.y) {
      position.y = previousPosition.y;
    }
    position.x = previousPosition.x - 1;
  }

  if (previousPosition.x - position.x < -1) {
    if (position.y != previousPosition.y) {
      position.y = previousPosition.y;
    }
    position.x = previousPosition.x + 1;
  }

  if (previousPosition.y - position.y > 1) {
    if (position.x != previousPosition.x) {
      position.x = previousPosition.x;
    }
    position.y = previousPosition.y - 1;
  }

  if (previousPosition.y - position.y < -1) {
    if (position.x != previousPosition.x) {
      position.x = previousPosition.x;
    }
    position.y = previousPosition.y + 1;
  }
};

const calculateRopePositions = (instructions: string[], tailLength = 1) => {
  const currentHeadPosition: Position = { x: 0, y: 0 };
  const currentTailPositions: Position[] = new Array(tailLength)
    .fill(null)
    .map(() => ({
      x: 0,
      y: 0,
    }));

  const headSteps: Step[] = [{ position: { ...currentHeadPosition } }];
  const tailSteps: Step[] = new Array(currentTailPositions.length)
    .fill(null)
    .map((_, index) => ({ position: currentTailPositions[index], index }));

  for (let i = 0; i < instructions.length; i += 1) {
    const [direction, numSteps] = instructions[i].split(' ');

    const parsedNumSteps = parseInt(numSteps);

    for (let j = 0; j < parsedNumSteps; j += 1) {
      if (direction === 'R') {
        currentHeadPosition.x++;
      } else if (direction === 'L') {
        currentHeadPosition.x--;
      } else if (direction === 'D') {
        currentHeadPosition.y--;
      } else if (direction === 'U') {
        currentHeadPosition.y++;
      }

      currentTailPositions.map((_, index) => {
        calculateTailPosition(
          currentTailPositions[index],
          index ? currentTailPositions[index - 1] : currentHeadPosition
        );
      });

      headSteps.push({ position: { ...currentHeadPosition } });

      currentTailPositions.map(currentTailPosition =>
        tailSteps.push({ position: { ...currentTailPosition } })
      );
    }
  }

  return tailSteps.map(step => step.position);
};

export const calculatePart1 = (input: string) => {
  const instructions = input.trim().split('\n');

  const positions = calculateRopePositions(instructions, 1);

  // console.log(flipGraph(plotGraph(positions)));

  return uniqueObject(positions).length;
};

export const calculatePart2 = (input: string) => {
  const instructions = input.trim().split('\n');

  const positions = calculateRopePositions(instructions, 1);
  // const positions = calculateRopePositions(instructions, 9);

  // console.log(flipGraph(plotGraph(positions)));

  return uniqueObject(positions).length;
};
