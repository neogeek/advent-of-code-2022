import { readFileSync } from 'fs';

enum Hand {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

const Mapping = {
  A: Hand.Rock,
  B: Hand.Paper,
  C: Hand.Scissors,
  X: Hand.Rock,
  Y: Hand.Paper,
  Z: Hand.Scissors,
} as const;

const input = readFileSync('input.txt', 'utf-8')
  .trim()
  .split(/\n/)
  .map((group) => group.split(' ').map((item) => Mapping[item] as Hand))
  .map(([opponent, player]) => {
    if (opponent === player) {
      return 3 + player;
    }

    if (
      (opponent === Hand.Rock && player === Hand.Paper) ||
      (opponent === Hand.Paper && player === Hand.Scissors) ||
      (opponent === Hand.Scissors && player === Hand.Rock)
    ) {
      return 6 + player;
    }

    return 0 + player;
  })
  .reduce((prev, acc) => prev + acc);

console.log('\n===== Day 2 =====\n');

console.log(`Part 1: ${input}`);
