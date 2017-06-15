'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// @flow

/**
 * Returns true if value is a primitive
 */

var isPrimitive = function isPrimitive(v /*: any*/) /*: bool*/ {
  if (v === null) {
    return true;
  }
  var t = typeof v === 'undefined' ? 'undefined' : _typeof(v);
  return t !== 'object' && t !== 'function';
};

exports.default = isPrimitive;