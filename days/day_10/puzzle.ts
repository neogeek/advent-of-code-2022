export const calculatePart1 = (input: string) => {
  const instructions = input.trim().split(/\n/);

  let x = 1;

  let cycles: number[] = [];

  let signalStrengths: number[] = [];

  instructions.map(instruction => {
    const [step, value] = instruction.split(' ');

    if (step === 'noop') {
      cycles.push(0);
    } else if (step === 'addx') {
      cycles.push(0);
      cycles.push(parseInt(value));
    }
  });

  cycles.map((cycle, index) => {
    x += cycle;

    if ([20, 60, 100, 140, 180, 220].includes(index + 1)) {
      signalStrengths.push((index + 1) * x);
    }
  }, 0);

  return signalStrengths.reduce((prev, cur) => prev + cur, 0);
};

export const calculatePart2 = (input: string) => {
  return 0;
};
