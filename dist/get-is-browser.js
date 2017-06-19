'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getIsBrowser = function getIsBrowser() {
  console.error('`getIsBrowser` is deprecated. Please use `isBrowser`.');
  return !!(typeof window !== 'undefined' && typeof process === 'undefined');
};

exports.default = getIsBrowser;