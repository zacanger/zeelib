'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the value of a cookie by name
 * @example
 * document.cookie = 'foo=bar'
 * getCookie('foo') // => 'bar'
 */

var getCookie = function getCookie(name /*: string*/) /*: ?string*/ {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
};

exports.default = getCookie;