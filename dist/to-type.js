'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toType = function toType(val) {
  console.error('`toType` is deprecated. Use `typeOf` instead.');
  return {}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

exports.default = toType;