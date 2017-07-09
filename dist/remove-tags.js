'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeTags = function removeTags(str) {
  return str.replace(/(<([^>]+)>)/ig, '');
};

exports.default = removeTags;