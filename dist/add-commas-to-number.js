'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Adds commas in correct place in number
 * addCommasToNumber(1000000) // => '1,000,000'
 */

var addCommasToNumber = function addCommasToNumber(n) {
  var parts = n.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

exports.default = addCommasToNumber;