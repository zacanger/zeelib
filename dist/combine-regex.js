'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var combineRegex = function combineRegex(rs, opts) {
  console.error('`combineRegex` is deprecated.');
  return new RegExp(rs.map(function (r) {
    return r.source;
  }).join(''), opts);
};

exports.default = combineRegex;