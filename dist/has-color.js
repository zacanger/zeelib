'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var isWin = function isWin() /*: bool*/ {
  return process.platform === 'win32';
};

var isColor = function isColor() /*: bool*/ {
  var termColor = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i;
  return !!process.env.COLORTERM || termColor.test(process.env.TERM || '');
};

/**
 * Returns true if the current terminal supports color
 * @example
 * hasColor()
 */

var hasColor = function hasColor() /*: bool*/ {
  return isWin() || isColor();
};

exports.default = hasColor;