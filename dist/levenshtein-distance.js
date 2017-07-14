'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var levenshteinDistance = function levenshteinDistance(a, b) {
  console.error('`levenshteinDistance` is deprecated. Please use a real lib for this.');
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

  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  row = Array(a.length + 1);

  for (i = 0; i <= a.length; i++) {
    row[i] = i;
  }

  for (i = 1; i <= b.length; i++) {
    prev = i;
    for (j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        val = row[j - 1];
      } else {
        val = Math.min(row[j - 1] + 1, Math.min(prev + 1, row[j] + 1));
      }
      row[j - 1] = prev;
      prev = val;
    }
    row[a.length] = prev;
  }
  return row[a.length];
};

exports.default = levenshteinDistance;