"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns all but the last item of an array
 */

var init = function init(arr /*: any[]*/) /*: any[]*/ {
  return arr.slice(0, -1);
};

exports.default = init;