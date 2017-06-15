'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get a random hex-based color
 */

var randomColor = function randomColor() /*: string*/ {
  var hex = Math.floor(Math.random() * 16777215).toString(16);
  var pad = '000000';
  return '#' + (pad + hex).slice(-pad.length);
};
exports.default = randomColor;