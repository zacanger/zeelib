'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var contains = function contains(ls, el) {
  console.error('`contains` is deprecated. Please use `elem` instead.');
  return ls.includes(el);
};

exports.default = contains;