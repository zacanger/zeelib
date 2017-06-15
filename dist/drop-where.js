"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Drop where matches predicate
 * credit: gh:spicydonuts
 */

var dropWhere = function dropWhere(fn /*: any*/, arr /*: any[]*/) /*: any[]*/ {
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