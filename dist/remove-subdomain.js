'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeSubdomain = function removeSubdomain(str) {
  return str.split('').filter(function (c) {
    return c === '.';
  }).length > 2 ? str.replace(/^[^.]+\./g, '') : str;
};

exports.default = removeSubdomain;