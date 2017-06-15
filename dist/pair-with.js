"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns an empty array if xs is shorter than two
 * Otherwise returns an array made from calling f on
 * pairs of adjacent elements
 */

var pairWith = function pairWith(xs /*: any[]*/) {
  return function (f /*: () => any*/) {
    return xs.length < 2 ? [] : [f(xs[0], xs[1])].concat(pairWith(xs.slice(1), f));
  };
};

exports.default = pairWith;