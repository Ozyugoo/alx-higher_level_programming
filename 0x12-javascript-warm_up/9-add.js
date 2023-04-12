#!/usr/bin/node
function add (m, n) {
  return (m + n);
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));
