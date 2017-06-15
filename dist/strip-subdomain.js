'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Strip subdomain from string
 */

var stripSubdomain = function stripSubdomain(str /*: string*/) /*: string*/ {
  return str.split('').filter(function (c /*: string*/) {
    return c === '.';
  }).length > 2 ? str.replace(/^[^.]+\./g, '') : str;
};

exports.default = stripSubdomain;