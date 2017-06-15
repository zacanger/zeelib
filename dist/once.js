"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Only calls fn once; subsequent calls just return first val
 */

var once = function once(fn /*: any*/) /*: any*/ {
  var returnValue = void 0;
  return function () /*: any*/ {
    if (!returnValue) {
      returnValue = fn.apply(undefined, arguments);
    }
    return returnValue;
  };
};

exports.default = once;