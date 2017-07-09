"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getRandomString = function getRandomString() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  return Math.random().toString(36).substring(n);
};

exports.default = getRandomString;