'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Get the memory size of an object
 * based on code by http://code.stephenmorley.org/ CC0 1.0 Universal
 * @example
 * sizeOf('asdf') // => 8
 */

var sizeOf = function sizeOf(object) {
  var objects = [object];
  var size = 0;

  for (var index = 0; index < objects.length; index++) {
    switch (_typeof(objects[index])) {
      case 'boolean':
        size += 4;
        break;
      case 'number':
        size += 8;
        break;
      case 'string':
        size += 2 * objects[index].length;
        break;
      case 'object':
        if (!Array.isArray(objects[index])) {
          for (var key in objects[index]) {
            size += 2 * key.length;
          }
        }

        for (var _key in objects[index]) {
          var processed = false;
          for (var search = 0; search < objects.length; search++) {
            if (objects[search] === objects[index][_key]) {
              processed = true;
              break;
            }
          }

          if (!processed) {
            objects.push(objects[index][_key]);
          }
        }
    }
  }

  return size;
};

exports.default = sizeOf;