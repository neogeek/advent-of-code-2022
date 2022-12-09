import type { Position } from '../../types.ts';

import { uniqueObject } from '../../utils/array.ts';

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

export const calculatePart1 = (input: string) => {
  const instructions = input.trim().split('\n');

  const currentHeadPosition: Position = { x: 0, y: 0 };
  const currentTailPosition: Position = { x: 0, y: 0 };

  const headSteps: Step[] = [{ position: { ...currentTailPosition } }];
  const tailSteps: Step[] = [{ position: { ...currentTailPosition } }];

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

      calculateTailPosition(currentTailPosition, currentHeadPosition);

      headSteps.push({ position: { ...currentHeadPosition } });
      tailSteps.push({ position: { ...currentTailPosition } });
    }
  }

  return uniqueObject(tailSteps.map(step => step.position)).length;
};

export const calculatePart2 = (input: string) => {
  return 0;
};
