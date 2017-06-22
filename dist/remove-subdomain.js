'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove subdomain from string
 * @example
 * removeSubdomain('foo.me.bar.baz') // => 'me.bar.baz'
 */

var removeSubdomain = function removeSubdomain(str /*: string*/) /*: string*/ {
  return str.split('').filter(function (c /*: string*/) {
    return c === '.';
  }).length > 2 ? str.replace(/^[^.]+\./g, '') : str;
};

exports.default = removeSubdomain;