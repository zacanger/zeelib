"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Levenshtein distance
 * cred: https://gist.github.com/andrei-m/982927#gistcomment-1931258 kigiri MTT
 * @example
 * levenshteinDistance('asdf', 'asdf') // => 0
 * levenshteinDistance('asdf', 'ghjkl') // => 5
 */

var levenshteinDistance = function levenshteinDistance(a /*: string*/, b /*: string*/) /*: number*/ {
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  var tmp = void 0,
      i = void 0,
      j = void 0,
      prev = void 0,
      val = void 0,
      row = void 0;
  // swap to save some memory O(min(a,b)) instead of O(a)
  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  row = Array(a.length + 1);
  // init the row
  for (i = 0; i <= a.length; i++) {
    row[i] = i;
  }

  // fill in the rest
  for (i = 1; i <= b.length; i++) {
    prev = i;
    for (j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        val = row[j - 1]; // match
      } else {
        val = Math.min(row[j - 1] + 1, // substitution
        Math.min(prev + 1, // insertion
        row[j] + 1)); // deletion
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
};

exports.default = levenshteinDistance;