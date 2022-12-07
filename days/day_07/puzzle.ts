interface Match {
  dir: string;
  files: number[];
  totalFileSize: number;
  totalDirSize: number;
  spaceRemainingAfterDelete: number;
  dirs: string[];
  children: Match[];
}

const createDirectoryStructure = (input: string) => {
  const commands = input.trim().split('\n');

  const matches: Match[] = [];

  let cwd = '/';

  for (let i = 0; i < commands.length; i += 1) {
    const command = commands[i];

    const [, dir] = command.match(/^\$ cd ([^ ]+)/) || [];
    const ls = command === '$ ls';

    if (dir) {
      if (dir === '/') {
        cwd = dir;
      } else if (dir === '..') {
        cwd = cwd.replace(/([^\/]+)\/$/, '');
      } else {
        cwd = `${cwd}${dir}/`;
      }
    } else if (ls) {
      const commandOffest = i + 1;

      const nextCommandOffset = commands
        .slice(commandOffest)
        .findIndex(command => command.match(/^\$/));

      const files = commands
        .slice(
          commandOffest,
          nextCommandOffset !== -1
            ? commandOffest + nextCommandOffset
            : commands.length
        )
        .filter(file => !file.match(/^dir/))
        .map(file => parseInt(file.replace(/ [^ ]+$/, '').trim()));

      const dirs = commands
        .slice(
          commandOffest,
          nextCommandOffset !== -1
            ? commandOffest + nextCommandOffset
            : commands.length
        )
        .filter(file => file.match(/^dir/))
        .map(file => file.replace('dir', '').trim());

      matches.push({
        dir: cwd,
        files,
        totalFileSize: files.reduce((a, b) => a + b, 0),
        totalDirSize: 0,
        spaceRemainingAfterDelete: 0,
        dirs,
        children: [],
      });
    }
  }

  return matches
    .map(parent => {
      parent.children = matches.filter(
        match =>
          match.dir !== parent.dir &&
          match.dir.match(new RegExp(`^${parent.dir}`))
      );

      parent.totalDirSize =
        parent.totalFileSize +
        parent.children.reduce((a, b) => a + b.totalFileSize, 0);

      return parent;
    })
    .map(parent => {
      const rootDir = matches.find(match => match.dir === '/');

      if (!rootDir) {
        throw new Error('Root dir not found');
      }

      parent.spaceRemainingAfterDelete =
        70000000 - rootDir?.totalDirSize + parent.totalDirSize;

      return parent;
    });
};

export const calculatePart1 = (input: string) => {
  const matches = createDirectoryStructure(input);

  return matches
    .filter(match => match.totalDirSize < 100000)
    .reduce((a, b) => a + b.totalDirSize, 0);
};

export const calculatePart2 = (input: string) => {
  const matches = createDirectoryStructure(input);

  return matches
    .filter(match => match.spaceRemainingAfterDelete > 30000000)
    .sort((a, b) => a.totalDirSize - b.totalDirSize)[0].totalDirSize;
};
