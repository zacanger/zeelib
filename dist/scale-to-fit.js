"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a width, height, maxWidth, and maxHeight
 * Returns an object that tells you the largest you can
 * scale to.
 */

/*:: type O = {
  width: number,
  height: number
}*/
var scaleToFit = function scaleToFit(width /*: number*/, height /*: number*/, maxWidth /*: ?number*/, maxHeight /*: ?number*/) /*: O*/ {
  var output = { width: width, height: height };

  if (maxWidth && output.width > maxWidth) {
    output.width = maxWidth;
    output.height = maxWidth / width * height;
  }
  if (maxHeight && output.height > maxHeight) {
    output.height = maxHeight;
    output.width = maxHeight / height * width;
  }

  return output;
};

exports.default = scaleToFit;