"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getNow = function getNow() {
  return Date.now || function () {
    return new Date().getTime();
  };
};

exports.default = getNow;