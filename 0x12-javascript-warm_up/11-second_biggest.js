#!/usr/bin/node
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const av = process.argv.map(Number)
    .slice(2, process.argv.length)
    .sort((i, j) => i - j);
  console.log(av[av.length - 2]);
}
