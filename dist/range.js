'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var range = function range(a, b) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var arr = [];

  if (typeof a === 'number') {
    arr[0] = a;
    while (a + step <= b) {
      arr[arr.length] = a += step;
    }
  } else {
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