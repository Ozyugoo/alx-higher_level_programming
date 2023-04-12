#!/usr/bin/node
const list = require('./100-data').list;
console.log(list);
const listed = list.map((number, element) => number * element);
console.log(listed);
