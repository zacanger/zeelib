'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getMethodsOf = function getMethodsOf(o) {
  var r = [];
  for (var m in o) {
    if (o.hasOwnProperty(m)) {
      if (typeof o[m] === 'function') {
        r.push(o[m].name);
      }
    }
  }
  return r;
};

exports.default = getMethodsOf;