'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var isInteger = Number.isInteger || function (n /*: number*/) /*: bool*/ {
  console.error('`isInteger` is depreacted. Please use `Number.isInteger` instead.');
  return (n | 0) === n;
};

exports.default = isInteger;