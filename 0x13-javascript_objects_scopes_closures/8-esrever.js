#!/usr/bin/node

exports.esrever = function (list) {
  const Arrs = [];
  for (let j = list.length - 1; j >= 0; j--) {
    Arrs.push(list[j]);
  }
  return (Arrs);
};
