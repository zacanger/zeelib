"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Simple `pluck`
 */

var pluck = function pluck(arr /*: any[]*/, key /*: string*/) /*: any[]*/ {
  return arr.map(function (obj) {
    return obj[key];
  });
};

exports.default = pluck;