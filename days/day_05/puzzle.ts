export const calculatePart1 = (input: string) => {
  const [inputStacks, inputInstructions] = input.trimEnd().split('\n\n');

  const stacks = [];

  inputStacks
    .replace(/[ ]{3} /g, '[-]')
    .replace(/[ ]+/g, '')
    .split('\n')
    .slice(0, -1)
    .reverse()
    .map(line => line.replace(/^\[|\]$/g, '').split(']['))
    .map(items =>
      items.map((item, index) => {
        if (item !== '-') {
          if (!Array.isArray(stacks[index])) {
            stacks[index] = [];
          }

          stacks[index].unshift(item);
        }
      })
    );

  const instructions = inputInstructions.split('\n');

  instructions.map(line => {
    const [count, from, to] = line
      .match(/[0-9]+/g)
      .map(item => parseInt(item, 10));

    for (let i = 0; i < count; i += 1) {
      const pickedup = stacks[from - 1].shift();

      stacks[to - 1].unshift(pickedup);
    }
  });

  return stacks.map(stack => stack[0]).join('');
};

export const calculatePart2 = (input: string) => {
  const [inputStacks, inputInstructions] = input.trimEnd().split('\n\n');

  const stacks = [];

  inputStacks
    .replace(/[ ]{3} /g, '[-]')
    .replace(/[ ]+/g, '')
    .split('\n')
    .slice(0, -1)
    .reverse()
    .map(line => line.replace(/^\[|\]$/g, '').split(']['))
    .map(items =>
      items.map((item, index) => {
        if (item !== '-') {
          if (!Array.isArray(stacks[index])) {
            stacks[index] = [];
          }

          stacks[index].unshift(item);
        }
      })
    );

  const instructions = inputInstructions.split('\n');

  instructions.map(line => {
    const [count, from, to] = line
      .match(/[0-9]+/g)
      .map(item => parseInt(item, 10));

    const pickedup = stacks[from - 1].splice(0, count);

    stacks[to - 1] = [...pickedup, ...stacks[to - 1]];
  });

  return stacks.map(stack => stack[0]).join('');
};
