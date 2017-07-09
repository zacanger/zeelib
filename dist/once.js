"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var once = function once(fn) {
  var returnValue = void 0;
  return function () {
    if (!returnValue) {
      returnValue = fn.apply(undefined, arguments);
    }
    return returnValue;
  };
};

exports.default = once;