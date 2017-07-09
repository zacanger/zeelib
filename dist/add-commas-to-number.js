'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var addCommasToNumber = function addCommasToNumber(n) {
  var parts = n.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

exports.default = addCommasToNumber;