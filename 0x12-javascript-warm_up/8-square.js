#!/usr/bin/node
const sq = process.argv[2];
if (isNaN(sq)) {
  console.log('Missing size');
} else {
  for (let a = 0; a < sq; a++) {
    console.log('X'.repeat(sq));
  }
}
