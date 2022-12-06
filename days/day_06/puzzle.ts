export const calculatePart1 = (input: string) => {
  const characters = input.trim().split('');

  for (let i = 0; i < characters.length; i += 1) {
    const packet = characters.slice(i, i + 4);

    if (packet.length === Array.from(new Set([...packet])).length) {
      return i + 4;
    }
  }

  return 0;
};

export const calculatePart2 = (input: string) => {
  return 0;
};
