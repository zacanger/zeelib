"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Like Haskell's `getArgs`, but for Node
 * @example
 * getArgs() // => Array<?string>
 */

var getArgs = function getArgs() /*: string[]*/ {
  return process.argv.slice(2);
};

exports.default = getArgs;