'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Truncate a string
 * @example
 * truncate('asdf asdf asdf asdf', 4) // => 'asd…'
 * truncate('asdf asdf asdf asdf', 8, ' etc.') // => 'asd etc.'
 */

var truncate = function truncate(str /*: string*/, limit /*: number*/) /*: string*/ {
  var tail /*: string*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '…';

  if (str.length > limit) {
    limit = limit - tail.length;
    return '' + str.substr(0, limit) + tail;
  }
  return str;
};

exports.default = truncate;