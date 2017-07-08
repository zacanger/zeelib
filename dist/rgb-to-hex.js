'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Convert rgb to hex
 * @example
 * rgbToHex(255, 255, 255) // => '#ffffff'
 */

var rgbToHex = function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

exports.default = rgbToHex;