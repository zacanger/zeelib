'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var rot13 = function rot13(str) {
  return str.split('').map(function (_) {
    if (!_.match(/[A-Za-z]/)) {
      return _;
    }
    var c = Math.floor(_.charCodeAt(0) / 97);
    var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
    return String.fromCharCode(k + (c === 0 ? 64 : 96));
  }).join('');
};

exports.default = rot13;