"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// @flow

/**
 * Returns true if the value is of the type
 * @example
 * is('number', 2) // => true
 */

var is = function is(type /*: string*/, val /*: any*/) /*: bool*/ {
  return (typeof val === "undefined" ? "undefined" : _typeof(val)) === type;
}; // eslint-disable-line valid-typeof

exports.default = is;