"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Gets `document.referrer`
 */

var getReferrer = function getReferrer() /*: ?string*/ {
  return document.referrer;
};

exports.default = getReferrer;