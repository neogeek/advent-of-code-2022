type Operation = '+' | '-' | '*' | '/';

interface InstructionGroup {
  investigatedCount: number;
  monkeyIndex: number;
  startingItems: number[];
  assertTrueMonkeyIndex: number;
  assertFalseMonkeyIndex: number;
  testDivisbleBy: number;
  operation: string[];
  test: (values: number[], operation: Operation) => number | undefined;
}

const findLineAndReturnNumbers = (array: string[], pattern: RegExp) => {
  return Array.from(
    array.find(item => item.match(pattern))?.match(/[0-9]+/g) || []
  ).map(item => parseInt(item));
};

const parseInstructions = (input: string) => {
  return input
    .trim()
    .split(/\n\n/)
    .map(group => {
      const lines = group.split('\n');

      const [monkeyIndex] = findLineAndReturnNumbers(lines, /^monkey/i);
      const startingItems = findLineAndReturnNumbers(lines, /starting items:/i);
      const [assertTrueMonkeyIndex] = findLineAndReturnNumbers(
        lines,
        /if true:/i
      );
      const [assertFalseMonkeyIndex] = findLineAndReturnNumbers(
        lines,
        /if false:/i
      );
      const operation = Array.from(
        lines
          .find(item => item.match(/operation:/i))
          ?.match(/old ([*+-\/]) ([\-0-9]+)?/) || []
      );
      const [testDivisbleBy] = findLineAndReturnNumbers(lines, /test:/i);

      return {
        investigatedCount: 0,
        monkeyIndex,
        startingItems,
        assertTrueMonkeyIndex,
        assertFalseMonkeyIndex,
        testDivisbleBy,
        operation,
        test: (values: number[], operation: Operation) => {
          if (operation === '+') {
            return values[0] + values[1];
          } else if (operation === '-') {
            return values[0] - values[1];
          } else if (operation === '*') {
            return values[0] * values[1];
          } else if (operation === '/') {
            return values[0] / values[1];
          }
        },
      };
    });
};

const caluclateWorryFromInstructionGroups = (
  instructionGroups: InstructionGroup[]
) => {
  return instructionGroups.map(instruction => {
    //   console.log(`Monkey ${instruction.monkeyIndex}`);

    [...instruction.startingItems].map(() => {
      const leftSideOfOperation = instruction.startingItems.shift() as number;

      instruction.investigatedCount++;

      const rightSideOfOperation = instruction.operation[2]
        ? parseInt(instruction.operation[2])
        : leftSideOfOperation;

      let updatedItem = instruction.test(
        [leftSideOfOperation, rightSideOfOperation],
        instruction.operation[1] as Operation
      );

      // console.log(`\tMonkey inspects an item with a worry level of ${item}.`);
      // console.log(
      //   `\t\tWorry level is ${instruction.operation[1]} by ${rightSideOfOperation} to ${updatedItem}.`
      // );

      updatedItem = Math.floor((updatedItem as number) / 3);

      // console.log(
      //   `\t\tMonkey gets bored with item. Worry level is divided by 3 to ${updatedItem}.`
      // );

      if (updatedItem % instruction.testDivisbleBy === 0) {
        //   console.log(
        //     `\t\tCurrent worry level is divisible by ${instruction.testDivisbleBy}.`
        //   );

        instructionGroups
          .find(
            group => group.monkeyIndex === instruction.assertTrueMonkeyIndex
          )
          ?.startingItems.push(updatedItem);
      } else {
        //   console.log(
        //     `\t\tCurrent worry level is not divisible by ${instruction.testDivisbleBy}.`
        //   );

        instructionGroups
          .find(
            group => group.monkeyIndex === instruction.assertFalseMonkeyIndex
          )
          ?.startingItems.push(updatedItem);
      }
    });
  });
};

export const calculatePart1 = (input: string) => {
  const instructionGroups = parseInstructions(input);

  for (let i = 0; i < 20; i += 1) {
    caluclateWorryFromInstructionGroups(instructionGroups);
  }

  return instructionGroups
    .sort((a, b) => a.investigatedCount - b.investigatedCount)
    .reverse()
    .slice(0, 2)
    .reduce((prev, curr) => prev * curr.investigatedCount, 1);
};

export const calculatePart2 = (input: string) => {
  return 0;
};
