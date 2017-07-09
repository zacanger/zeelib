"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getLengthOfItemsInArray = function getLengthOfItemsInArray(el, arr) {
  return arr.filter(function (a) {
    return a === el;
  }).length;
};

exports.default = getLengthOfItemsInArray;