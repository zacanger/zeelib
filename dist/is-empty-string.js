'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEmptyString = function isEmptyString(str) {
  console.error('`isEmptyString` is deprecated. Please use `isEmpty` instead.');
  if (str === undefined || str === null) {
    return true;
  }
  return (/^[ \t\s]*$/.test(str)
  );
};

exports.default = isEmptyString;