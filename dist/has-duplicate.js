"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var hasDuplicate = function hasDuplicate(arr) {
  return arr.some(function (v, i, s) {
    return s.indexOf(v) !== i;
  });
};

exports.default = hasDuplicate;