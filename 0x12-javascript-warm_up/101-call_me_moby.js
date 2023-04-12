#!/usr/bin/node
exports.callMeMoby = function (k, theFunction) {
  for (let b = 0; b < k; b++) {
    theFunction();
  }
};
