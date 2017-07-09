'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getOrdinal = function getOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

exports.default = getOrdinal;