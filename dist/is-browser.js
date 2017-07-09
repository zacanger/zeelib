'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isBrowser = function isBrowser() {
  return !!(typeof window !== 'undefined' && typeof process === 'undefined');
};

exports.default = isBrowser;