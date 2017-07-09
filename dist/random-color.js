'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var randomColor = function randomColor() {
  var hex = Math.floor(Math.random() * 16777215).toString(16);
  var pad = '000000';
  return '#' + (pad + hex).slice(-pad.length);
};
exports.default = randomColor;