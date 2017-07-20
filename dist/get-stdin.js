'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getStdin = function getStdin(f) {
  var b = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (s) {
    b += s;
  });
  process.stdin.on('end', function () {
    f(b);
  }).resume();
};

exports.default = getStdin;