/** @type {import('jest').Config} */
const jestConfig = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': 'ts-jest/legacy',
  },
};

export default jestConfig;
