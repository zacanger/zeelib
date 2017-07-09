"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var pluck = function pluck(key, arr) {
  return arr.map(function (obj) {
    return obj[key];
  });
};

exports.default = pluck;