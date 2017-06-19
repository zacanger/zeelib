'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Range function. Takes a start and and end,
 * and a step (defaults to 1). Works for numbers and
 * latin characters. This is _inclusive_. That is:
 * `1..10,2 == 0,2,4,6,8,10`
 * @param {string|number} a
 * @param {string|number} b
 * @param {number} step (optional, defaults to one)
 * @returns {Array}
 * @example
 * range(1, 4) // => [ 1, 2, 3, 4 ]
 * range(1, 10, 3) // => [ 1, 4, 7, 10 ]
 * range('z', 'q') // > [ 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' ]
 */

var range = function range(a, b) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var arr = [];

  if (typeof a === 'number') {
    arr[0] = a;
    while (a + step <= b) {
      arr[arr.length] = a += step;
    }
  } else {
    // TODO one day: unicode, maybe
    var s = 'abcdefghijklmnopqrstuvwxyz';

    if (a === a.toUpperCase() || b === b.toUpperCase()) {
      b = b.toUpperCase();
      s = s.toUpperCase();
    }

    s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
    arr = s.split('');
  }

  return arr;
};

exports.default = range;