enum Hand {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

enum Result {
  Win = 6,
  Draw = 3,
  Lose = 0,
}

const MappingPart1 = {
  A: Hand.Rock,
  B: Hand.Paper,
  C: Hand.Scissors,
  X: Hand.Rock,
  Y: Hand.Paper,
  Z: Hand.Scissors,
} as const;

const MappingPart2 = {
  A: Hand.Rock,
  B: Hand.Paper,
  C: Hand.Scissors,
  X: Result.Lose,
  Y: Result.Draw,
  Z: Result.Win,
} as const;

export const calculatePart1 = (input: string) => {
  return input
    .trim()
    .split(/\n/)
    .map(group => group.split(' ').map(item => MappingPart1[item] as Hand))
    .map(([opponent, player]) => {
      if (opponent === player) {
        return Result.Draw + player;
      }

      if (
        (opponent === Hand.Rock && player === Hand.Paper) ||
        (opponent === Hand.Paper && player === Hand.Scissors) ||
        (opponent === Hand.Scissors && player === Hand.Rock)
      ) {
        return Result.Win + player;
      }

      return Result.Lose + player;
    })
    .reduce((prev, acc) => prev + acc);
};

export const calculatePart2 = (input: string) => {
  return input
    .trim()
    .split(/\n/)
    .map(group =>
      group.split(' ').map(item => MappingPart2[item] as Hand | Result)
    )
    .map(([opponent, result]) => {
      switch (result) {
        case Result.Lose:
          if (opponent === Hand.Rock) {
            return Hand.Scissors + result;
          } else if (opponent === Hand.Paper) {
            return Hand.Rock + result;
          } else if (opponent === Hand.Scissors) {
            return Hand.Paper + result;
          }
        case Result.Draw:
          return opponent + result;
        case Result.Win:
          if (opponent === Hand.Rock) {
            return Hand.Paper + result;
          } else if (opponent === Hand.Paper) {
            return Hand.Scissors + result;
          } else if (opponent === Hand.Scissors) {
            return Hand.Rock + result;
          }
      }
      return 0;
    })
    .reduce((prev, acc) => prev + acc);
};
