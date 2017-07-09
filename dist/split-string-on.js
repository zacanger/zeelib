'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var splitStringOn = function splitStringOn(str) {
  var spl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!str || typeof str !== 'string') {
    console.warn('Please pass a string as first param.');
  }
  var idx = str.indexOf(spl);
  return idx === -1 ? null : [str.substr(0, idx), str.substr(idx + spl.length)];
};

exports.default = splitStringOn;