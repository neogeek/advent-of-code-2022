export const calculatePart1 = (input: string) => {
  const instructions = input.trim().split(/\n/);

  let x = 1;

  const cycles: number[] = [0];

  const signalStrengths: number[] = [];

  instructions.map(instruction => {
    const [step, value] = instruction.split(' ');

    if (step === 'noop') {
      cycles.push(0);
    } else if (step === 'addx') {
      cycles.push(0);
      cycles.push(parseInt(value, 10));
    }
  });

  cycles.map((cycle, index) => {
    x += cycle;

    if (index === 20 || !((index - 20) % 40)) {
      signalStrengths.push(index * x);
    }
  });

  return signalStrengths.reduce((prev, cur) => prev + cur, 0);
};

export const calculatePart2 = (input: string) => {
  return 0;
};
