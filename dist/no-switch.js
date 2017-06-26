'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var noSwitch = function noSwitch(conds) {
  return function (c) {
    console.error('`noSwitch` is deprecated. Please use the `switchy` lib.');
    if (typeof conds[c] === 'function') {
      return conds[c]();
    } else if (typeof conds.default === 'function') {
      return conds.default();
    }
  };
};

exports.default = noSwitch;