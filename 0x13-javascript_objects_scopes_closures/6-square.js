#!/usr/bin/node

module.exports = class Square extends require('./5-square') {
  charPrint (k) {
    if (k === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.height; i++) {
        console.log(k.repeat(this.width));
      }
    }
  }
};
