'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Switch statements are annoying sometimes
 * Takes an object of conditions: functions, and a thing to switch on
 * credit: gh:egoist/switchy
 */

var noSwitch = function noSwitch() {
  var conds /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (c /*: any*/) /*: any*/ {
    if (typeof conds[c] === 'function') {
      return conds[c]();
    } else if (typeof conds.default === 'function') {
      return conds.default();
    }
  };
};

exports.default = noSwitch;