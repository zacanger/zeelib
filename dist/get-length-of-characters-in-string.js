'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getLengthOfCharactersInString = function getLengthOfCharactersInString(el, str) {
  return str.split('').filter(function (c) {
    return c === el;
  }).length;
};

exports.default = getLengthOfCharactersInString;