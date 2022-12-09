import type { Position } from '../../types.ts';

interface Step {
  position: Position;
}

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

      if (currentHeadPosition.x - currentTailPosition.x > 1) {
        if (currentTailPosition.y != currentHeadPosition.y) {
          currentTailPosition.y = currentHeadPosition.y;
        }
        currentTailPosition.x = currentHeadPosition.x - 1;
      }

      if (currentHeadPosition.x - currentTailPosition.x < -1) {
        if (currentTailPosition.y != currentHeadPosition.y) {
          currentTailPosition.y = currentHeadPosition.y;
        }
        currentTailPosition.x = currentHeadPosition.x + 1;
      }

      if (currentHeadPosition.y - currentTailPosition.y > 1) {
        if (currentTailPosition.x != currentHeadPosition.x) {
          currentTailPosition.x = currentHeadPosition.x;
        }
        currentTailPosition.y = currentHeadPosition.y - 1;
      }

      if (currentHeadPosition.y - currentTailPosition.y < -1) {
        if (currentTailPosition.x != currentHeadPosition.x) {
          currentTailPosition.x = currentHeadPosition.x;
        }
        currentTailPosition.y = currentHeadPosition.y + 1;
      }

      headSteps.push({ position: { ...currentHeadPosition } });
      tailSteps.push({ position: { ...currentTailPosition } });
    }
  }

  const uniqueSteps: Step[] = [];

  tailSteps.map(tailStep => {
    if (
      !uniqueSteps.some(
        uniqueStep =>
          uniqueStep.position.x === tailStep.position.x &&
          uniqueStep.position.y === tailStep.position.y
      )
    ) {
      uniqueSteps.push(tailStep);
    }
  });

  return uniqueSteps.length;
};

export const calculatePart2 = (input: string) => {
  return 0;
};
