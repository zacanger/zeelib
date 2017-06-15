'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Convert rgb to hex
 */

var rgbToHex = function rgbToHex(r /*: number*/, g /*: number*/, b /*: number*/) /*: string*/ {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

exports.default = rgbToHex;