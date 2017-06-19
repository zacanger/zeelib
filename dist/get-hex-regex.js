"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns a regex to test for valid hex
 * @example
 * getHexRegex()
 */

var getHexRegex = function getHexRegex() /*: RegExp*/ {
  return (/^#?[a-f0-9]{3}|[a-f0-9]{6}$/i
  );
};

exports.default = getHexRegex;