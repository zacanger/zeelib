'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getUid4 = function getUid4() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
};

exports.default = getUid4;