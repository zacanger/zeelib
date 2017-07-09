'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getUid8 = function getUid8() {
  return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
};

exports.default = getUid8;