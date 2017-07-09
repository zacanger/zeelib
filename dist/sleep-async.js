"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var sleepAsync = function sleepAsync(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

exports.default = sleepAsync;