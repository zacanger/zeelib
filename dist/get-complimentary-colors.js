'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getComplimentaryColors = function getComplimentaryColors(s) {
  console.error('`getComplimentaryColors` is deprecated.');
  return '#' + (1e5 + (Math.pow(8, 8) + ~('0x' + s.slice(1))).toString(16)).slice(-6);
};
// c=>c.replace(/\w/g,x=>(15-`0x${x}`).toString(16))

exports.default = getComplimentaryColors;