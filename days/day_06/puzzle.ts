const findStartOfPacketMarker = (input: string, packetLength: number) => {
  const characters = input.trim().split('');

  for (let i = 0; i < characters.length; i += 1) {
    const packet = characters.slice(i, i + packetLength);

    if (packet.length === Array.from(new Set([...packet])).length) {
      return i + packetLength;
    }
  }

  return 0;
};

export const calculatePart1 = (input: string) => {
  return findStartOfPacketMarker(input, 4);
};

export const calculatePart2 = (input: string) => {
  return findStartOfPacketMarker(input, 14);
};
