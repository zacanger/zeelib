'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var arity = function arity(f) {
  console.error('`arity` is deprecated. Please use `length` instead.');
  return f.length;
};

exports.default = arity;