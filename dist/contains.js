'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var contains = function contains(ls /*: string | any[]*/, el /*: any*/) /*: bool*/ {
  console.error('`contains` is deprecated. Please use `elem` instead.');
  return ls.includes(el);
};

exports.default = contains;