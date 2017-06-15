'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the type of value
 * @param {any} val
 * @returns {string}
 */

var toType = function toType(val) {
  console.error('`toType` is depreacted. Use `typeOf` instead.');
  return {}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

exports.default = toType;