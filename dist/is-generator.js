'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isGenerator = function isGenerator(v) {
  return v && typeof v.next === 'function' && typeof v.throw === 'function';
};

exports.default = isGenerator;