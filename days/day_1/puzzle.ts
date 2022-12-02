export const calculatePart1 = (input: string) => {
  return input
    .trim()
    .split(/\n{2,}/)
    .map(group =>
      group
        .split(/\n/)
        .map(item => parseInt(item, 10))
        .reduce((prev, acc) => prev + acc)
    )
    .map((item, index) => ({ id: index + 1, total: item }))
    .sort((a, b) => a.total - b.total)
    .reverse()[0].total;
};

export const calculatePart2 = (input: string) => {
  return input
    .trim()
    .split(/\n{2,}/)
    .map(group =>
      group
        .split(/\n/)
        .map(item => parseInt(item, 10))
        .reduce((prev, acc) => prev + acc)
    )
    .map((item, index) => ({ id: index + 1, total: item }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3)
    .reduce((prev, acc) => prev + acc.total, 0);
};
