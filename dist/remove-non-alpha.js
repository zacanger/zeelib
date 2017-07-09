'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeNonAlpha = function removeNonAlpha(str) {
  return str.replace(/[^A-Za-z ]+/g, '');
};

exports.default = removeNonAlpha;