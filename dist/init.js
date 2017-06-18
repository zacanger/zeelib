"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns all but the last item of an array
 * @example
 * init([ 1, 2, 3 ]) // => [ 1, 2 ]
 */

var init = function init(arr /*: any[]*/) /*: any[]*/ {
  return arr.slice(0, -1);
};

exports.default = init;