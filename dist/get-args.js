"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Like Haskell's `getArgs`, but for Node
 * @example
 * getArgs() // => Array<?string>
 */

var getArgs = function getArgs() {
  return process.argv.slice(2);
};

exports.default = getArgs;