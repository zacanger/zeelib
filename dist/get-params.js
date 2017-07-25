'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getParams = function getParams(fn) {
  var s = fn.toString();
  return s.slice(s.indexOf('(') + 1, s.indexOf(')')).match(/([^\s,]+)/g) || [];
};

exports.default = getParams;