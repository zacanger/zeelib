'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Gets `document.referrer`
 * @example
 * getReferrer()
 */

var getReferrer = function getReferrer() {
  return document.referrer || '';
};

exports.default = getReferrer;