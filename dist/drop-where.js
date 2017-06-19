'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Drop where matches predicate
 * credit: gh:spicydonuts
 * @example
 * dropWhere(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

var dropWhere = function dropWhere(fn /*: any*/, arr /*: any[]*/) /*: any[]*/ {
  console.error('`dropWhere` is deprecated. Please use `dropWhile`.');
  var keepers = [];
  arr.forEach(function (item, i) {
    if (!fn(item, i)) {
      keepers.push(item);
    }
  });
  if (arr.length === keepers.length) {
    return arr;
  }
  return keepers;
};

exports.default = dropWhere;