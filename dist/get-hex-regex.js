"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns a regex to test for valid hex
 * @example
 * getHexRegex()
 */

var getHexRegex = function getHexRegex() {
  return (/^#?[a-f0-9]{3}|[a-f0-9]{6}$/i
  );
};

exports.default = getHexRegex;