'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Calls preventDefault and stopPropagation
 * if they exist
 * @example
 * handleClick (e) {
 *   preventDefault(e)
 *   doOtherThingsMaybe()
 * }
 */

var preventDefault = function preventDefault(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    if (typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
  }
};

exports.default = preventDefault;