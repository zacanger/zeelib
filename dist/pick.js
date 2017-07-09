"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function pick(ks, o) {
  if (o === undefined) {
    return function (t) {
      return pick(ks, t);
    };
  }

  var r = {};
  var c = 0;
  while (c < ks.length) {
    if (ks[c] in o) {
      r[ks[c]] = o[ks[c]];
    }
    c++;
  }

  return r;
}

exports.default = pick;